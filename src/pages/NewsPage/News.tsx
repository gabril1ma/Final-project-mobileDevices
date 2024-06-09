import React, { useCallback, useEffect } from "react";
import { ScrollView, Text, View } from "react-native";
import NewsList from "../../components/atoms/NewsList/NewsList";
import useAppContext from "../../hooks/useAppContext";

const ResultsPage = () => {
  const { appState, setAppState } = useAppContext();

  const clearState = useCallback(
    () => setAppState((prev) => ({ ...prev, searchInputValue: "" })),
    []
  );

  useEffect(() => {
    return () => clearState();
  }, [clearState]);

  return (
    <ScrollView>
      <View style={{ flex: 1, padding: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>
          Resultados da pesquisa {appState.searchInputValue}
        </Text>

        {appState.isLoading ? (
          <Text>Loading...</Text>
        ) : (
          <NewsList news={appState.news} />
        )}
      </View>
    </ScrollView>
  );
};

export default ResultsPage;
