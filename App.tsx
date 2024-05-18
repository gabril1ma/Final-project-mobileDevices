import React from "react";
import { Image, SafeAreaView, View, StyleSheet } from "react-native";
import { globalStyles } from "./src/UI/globalStyles";
import ArrowBackCircle from "./src/assets/ArrowBackCircle";
import HomeIcon from "./src/assets/HomeIcon";
import SearchIcon from "./src/assets/SearchIcon";
import UserIcon from "./src/assets/UserIcon";
import AppBar from "./src/components/atoms/AppBar";
import AppPage from "./src/pages/AppPage";

const logoWithoutBackground =
  "https://ensinio-public.s3.us-west-1.amazonaws.com/beta/beta/comment/images/1ec0599578533e22c2ec082cbcaa07b8.png";

export default function App() {
  return (
    <SafeAreaView style={globalStyles.container}>
      <AppBar style={globalStyles.topBar}>
        <Image
          source={{ uri: logoWithoutBackground }}
          style={{ width: 40, height: 40 }}
        />
      </AppBar>

      <View style={globalStyles.pagesContainer}>
        <AppPage />
      </View>

      <AppBar style={globalStyles.navBar}>
        <HomeIcon />
        <SearchIcon />
        <ArrowBackCircle />
        <UserIcon/>
      </AppBar>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    marginLeft: 'auto',
    padding: 10,
  },
});
