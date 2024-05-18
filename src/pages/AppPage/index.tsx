import React, {useState} from "react";
import { Text, View } from "react-native";
import SearchInput from "../../components/atoms/SearchInput";
import AppBackground from "../../components/atoms/AppBackground";
import ButtonCustom from "../../components/atoms/ButtonCustom";
import { styles } from "./styles";
import CheckboxWithLabel from "../../assets/CheckBox";

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
      <View ></View>
      <SearchInput />

      
      <ButtonCustom
          onPress={() => {}}
          title="Pesquisar"
          variant="primary"
         />
    </AppBackground>
    </>
  );
};


export default AppPage;
