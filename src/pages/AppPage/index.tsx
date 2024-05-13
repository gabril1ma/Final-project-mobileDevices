import React from "react";
import { Text, View } from "react-native";
import SearchInput from "../../components/atoms/SearchInput";
import AppBackground from "../../components/atoms/AppBackground";
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
        <Text className="text-5xl">ahah</Text>
       
      </View>
      <View ></View>
      <SearchInput />
    </AppBackground>
    </>
  );
};

export default AppPage;
