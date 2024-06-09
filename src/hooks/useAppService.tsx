import axios from "axios";
import { useCallback } from "react";
import NewsDTO from "../DTO/NewsDTO";
import { IGoogleNewResponse } from "../types";
import useAppContext from "./useAppContext";

const getQuery = (value: string, domains: string) =>
  `https://customsearch.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_API_KEY}&cx=a6fab64d720fc42f9&q=${value}&siteSearch=${domains}&siteSearchFilter=i&sort=date`;

const useAppService = () => {
  const { appState, setAppState } = useAppContext();

  const getSelectedDomains = useCallback(
    () =>
      appState?.broadcasters
        .filter((broad) => broad?.selected)
        .map((i) => i.urlAPI)
        .join(":OR:"),
    [appState?.broadcasters]
  );

  const fetchNews = useCallback(
    async (searchValue: string) => {
      const selectedDomains = getSelectedDomains();
      const { data } = await axios.get(getQuery(searchValue, selectedDomains));
      const googleNews: IGoogleNewResponse[] = data?.items ?? [];

      setAppState((prev) => ({
        ...prev,
        news: googleNews.map((item) => new NewsDTO(item)),
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
      setAppState((prev) => ({ ...prev, isLoading: false }));
    }
  }, [appState?.broadcasters, appState?.searchInputValue]);

  return { dispatchSearchNews };
};

export default useAppService;
