// src/pages/ResultsPage.js
import React from "react";
import { Text, View } from "react-native";
import NewsList from "../../components/atoms/NewsList/NewsList";
import useAppContext from "../../hooks/useAppContext";

const ResultsPage = () => {
  const { appState } = useAppContext();

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>
        Resultados da Pesquisa
      </Text>
      {appState.isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <NewsList news={appState.news} />
      )}
    </View>
  );
};

export default ResultsPage;
