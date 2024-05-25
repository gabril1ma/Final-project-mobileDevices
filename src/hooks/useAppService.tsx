import axios from "axios";
import { useCallback } from "react";
import NewsDTO from "../DTO/NewsDTO";
import { IGoogleNewResponse } from "../types";
import useAppContext from "./useAppContext";

const getCNNQuery = (value: string, domainsToInclude: string) =>
  `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=a6fab64d720fc42f9&q=${value}&siteSearch=${domainsToInclude}&siteSearchFilter=i`;

const useAppService = () => {
  const { appState, setAppState } = useAppContext();

  const domainsToInclude = appState?.broadcasters
    .filter((broad) => broad?.selected)
    .map((i) => i.urlAPI)
    .toString();

  const clearState = useCallback(
    () => setAppState((prev) => ({ ...prev, searchInputValue: "" })),
    []
  );

  const fetchCNNNews = useCallback(
    async (searchValue: string) => {
      try {
        const { data } = await axios.get(searchValue);
        const googleNews: IGoogleNewResponse[] = data?.items ?? [];

        setAppState((prev) => ({
          ...prev,
          news: googleNews.map((googleNew) => new NewsDTO(googleNew)),
        }));
      } catch (error) {
        console.error("Erro ao buscar notícias:", error);
      }
    },
    [setAppState]
  );

  const dispatchfetchNews = useCallback(async () => {
    await fetchCNNNews(
      getCNNQuery(appState.searchInputValue, domainsToInclude ?? "")
    );
  }, [appState?.searchInputValue, fetchCNNNews]);

  const dispatchSearchNews = useCallback(async () => {
    try {
      setAppState((prev) => ({ ...prev, isLoading: true }));
      dispatchfetchNews();
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
