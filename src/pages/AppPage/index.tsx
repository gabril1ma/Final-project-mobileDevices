import React from "react";
import { Text, View, Image } from "react-native";
import AppBackground from "../../components/atoms/AppBackground";
import SearchInput from "../../components/atoms/SearchInput";
import BroadcastersList from "../../components/molecules/BroadcastersList";
import SelectedBroadcasterDragAndDrop from "../../components/molecules/SelectedBroadcasterDragAndDrop";
import useAppContext from "../../hooks/useAppContext";
import { styles } from "./styles";
import NewsList from "../../components/atoms/NewsList/NewsList";

const AppPage = () => {
  const { appState } = useAppContext();

  return (
    <AppBackground style={styles.container}>
      <View style={styles.innerPadding}>
        <Text style={styles.title}>
          Selecione os principais véiculos de informação que você deseja
          acompanhar
        </Text>

        <SearchInput />
      </View>

      <BroadcastersList />
      
      {appState.isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <NewsList news={appState.news} />
      )}

      

      <SelectedBroadcasterDragAndDrop />
    </AppBackground>
  );
};

export default AppPage;
