import axios from "axios";
import { useCallback } from "react";
import NewsDTO from "../DTO/NewsDTO";
import { IGoogleNewResponse } from "../types";
import useAppContext from "./useAppContext";

const getQuery = (value: string, domain: string) =>
  `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=a6fab64d720fc42f9&q=${value}&siteSearch=${domain}&siteSearchFilter=i`;

const useAppService = () => {
  const { appState, setAppState } = useAppContext();

  const getSelectedDomains = useCallback(
    () =>
      appState?.broadcasters
        .filter((broad) => broad?.selected)
        .map((i) => i.urlAPI),
    [appState?.broadcasters]
  );

  const clearState = useCallback(
    () => setAppState((prev) => ({ ...prev, searchInputValue: "" })),
    []
  );

  const fetchNews = useCallback(
    async (searchValue: string) => {
      const selectedDomains = getSelectedDomains();
      let allNews = [];

      for (const domain of selectedDomains) {
        try {
          const { data } = await axios.get(getQuery(searchValue, domain));
          const googleNews: IGoogleNewResponse[] = data?.items ?? [];
          allNews = [...allNews, ...googleNews.map((googleNew) => new NewsDTO(googleNew))];
        } catch (error) {
          console.error(`Erro ao buscar notícias do domínio ${domain}:`, error);
        }
      }

      setAppState((prev) => ({
        ...prev,
        news: allNews,
      }));
    },
    [setAppState, getSelectedDomains]
  );

  const dispatchfetchNews = useCallback(async () => {
    await fetchNews(appState.searchInputValue);
  }, [appState?.searchInputValue, fetchNews]);

  const dispatchSearchNews = useCallback(async () => {
    try {
      setAppState((prev) => ({ ...prev, isLoading: true }));
      await dispatchfetchNews();
    } catch (error) {
      console.log("🚀 ~ error:", error);
    } finally {
      clearState();
      setAppState((prev) => ({ ...prev, isLoading: false }));
    }
  }, [appState?.broadcasters, appState?.searchInputValue, clearState]);

  return { dispatchSearchNews };
};

export default useAppService;
