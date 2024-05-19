import React from "react";
import { Text, View } from "react-native";
import AppBackground from "../../components/atoms/AppBackground";
import SearchInput from "../../components/atoms/SearchInput";
import BroadcastersList from "../../components/molecules/BroadcastersList";
import { styles } from "./styles";

const AppPage = () => {
  return (
    <>
      <AppBackground style={styles.container}>
        <View style={styles.innerPadding}>
          <Text style={styles.title}>
            Selecione os principais véiculos de informação que você deseja
            acompanhar
          </Text>
        </View>

        <SearchInput />

        <BroadcastersList />
      </AppBackground>
    </>
  );
};

export default AppPage;
