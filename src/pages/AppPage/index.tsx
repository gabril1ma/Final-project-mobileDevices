import React from "react";
import { Text, View } from "react-native";
import AppBackground from "../../components/atoms/AppBackground";
import SearchInput from "../../components/atoms/SearchInput";
import BroadcastersList from "../../components/molecules/BroadcastersList";
import SelectedBroadcasterDragAndDrop from "../../components/molecules/SelectedBroadcasterDragAndDrop";
import { styles } from "./styles";
import SearchInput from "../../components/atoms/SearchInput";
import SelectMultiple from "../../components/atoms/SelectMultiple";
import {post} from '../../components/atoms/SelectMultiple/fakePost';


const AppPage = () => {
  return (
<<<<<<< HEAD
    <AppBackground style={styles.container}>
      <View style={styles.innerPadding}>
        <Text style={styles.title}>
          Selecione os principais véiculos de informação que você deseja
          acompanhar 
        </Text>
        <SearchInput />
      </View>
      <SelectMultiple title='Noticias' max={5} onChange={(selecionados) => alert(selecionados.map(i => i?.id))} options={post}/>
    </AppBackground>
=======
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

        <SelectedBroadcasterDragAndDrop />
      </AppBackground>
    </>
>>>>>>> 42f25dce1b2693b4932e823ccfa133fb6084eff1
  );
};

export default AppPage;
