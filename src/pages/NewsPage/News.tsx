import React from "react";
import { Text, View } from "react-native";
import AppBackground from "../../components/atoms/AppBackground";
import SearchInput from "../../components/atoms/SearchInput";
import BroadcastersList from "../../components/molecules/BroadcastersList";
import SelectedBroadcasterDragAndDrop from "../../components/molecules/SelectedBroadcasterDragAndDrop";
import useAppContext from "../../hooks/useAppContext";
import { styles } from "./styles";
import NewsList from "../../components/atoms/NewsList/NewsList";

const NewsPage = () => {
  const { appState } = useAppContext();

  return (
    <AppBackground style={styles.container}>
      <View style={styles.innerPadding}>
        <Text style={styles.title}>
          Noticias encontradas
        </Text>

      </View>

      <BroadcastersList />
        <NewsList news={appState} />

      <SelectedBroadcasterDragAndDrop />
    </AppBackground>
  );
};

export default NewsPage;
