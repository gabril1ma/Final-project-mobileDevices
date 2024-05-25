import React from "react";
import { Text, View } from "react-native";
import AppBackground from "../../components/atoms/AppBackground";
import SearchInput from "../../components/atoms/SearchInput";
import BroadcastersList from "../../components/molecules/BroadcastersList";
import SelectedBroadcasterDragAndDrop from "../../components/molecules/SelectedBroadcasterDragAndDrop";
import useAppContext from "../../hooks/useAppContext";
import { styles } from "./styles";

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

      <Text>
        {appState.isLoading ? (
          <Text>Loading...</Text>
        ) : (
          appState.news.map((n) => (
            <Text key={n.title}>
              {n.title}
              <br />
            </Text>
          ))
        )}
      </Text>

      <SelectedBroadcasterDragAndDrop />
    </AppBackground>
  );
};

export default AppPage;
