import React from "react";
import { Text, View } from "react-native";
import SearchInput from "../../components/SearchInput";
import AppBackground from "../../components/atoms/AppBackground";
import { styles } from "./styles";

const AppPage = () => {
  return (
    <AppBackground style={styles.container}>
      <View style={styles.innerPadding}>
        <Text style={styles.title}>
          Selecione os principais véiculos de informação que você deseja
          acompanhar
        </Text>

        <SearchInput />
      </View>
    </AppBackground>
  );
};

export default AppPage;
