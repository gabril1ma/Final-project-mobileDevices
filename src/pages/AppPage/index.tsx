import { useNavigation } from "@react-navigation/native";
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
  const navigation = useNavigation();

  const handleSearch = (news) => {
    navigation.navigate("Results", { news });
  };

  return (
    <AppBackground style={styles.container}>
      <View style={styles.innerPadding}>
        <Text style={styles.title}>
          Selecione os principais véiculos de informação que você deseja
          acompanhar
        </Text>

        <SearchInput onSearchCompleted={handleSearch} />

        <BroadcastersList />

        <SelectedBroadcasterDragAndDrop />
      </View>
    </AppBackground>
  );
};

export default AppPage;
