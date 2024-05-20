import React from "react";
import { Text, View } from "react-native";
import AppBackground from "../../components/atoms/AppBackground";
import SearchInput from "../../components/atoms/SearchInput";
import BroadcastersList from "../../components/molecules/BroadcastersList";
import SelectedBroadcasterDragAndDrop from "../../components/molecules/SelectedBroadcasterDragAndDrop";
import { styles } from "./styles";
import SelectMultiple from "../../components/atoms/SelectMultiple";
import {post} from '../../components/atoms/SelectMultiple/fakePost';


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
      <SelectMultiple title='Noticias' max={5} onChange={(selecionados) => alert(selecionados.map(i => i?.id))} options={post}/>

        <SearchInput />

        <BroadcastersList />

        <SelectedBroadcasterDragAndDrop />
      </AppBackground>
  );
};

export default AppPage;
