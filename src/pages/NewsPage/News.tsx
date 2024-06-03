// src/pages/ResultsPage.js
import React from "react";
import { ScrollView, Text, View } from "react-native";
import NewsList from "../../components/atoms/NewsList/NewsList";
import useAppContext from "../../hooks/useAppContext";

const ResultsPage = () => {
  const { appState } = useAppContext();

  return (
    <ScrollView>
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>
        Resultados da Pesquisa
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
