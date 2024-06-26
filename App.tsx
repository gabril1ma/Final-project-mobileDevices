import React from "react";
import { Image, SafeAreaView, StyleSheet } from "react-native";
import { globalStyles } from "./src/UI/globalStyles";
import ArrowBackCircle from "./src/assets/ArrowBackCircle";
import HomeIcon from "./src/assets/HomeIcon";
import SearchIcon from "./src/assets/SearchIcon";
import AppBar from "./src/components/atoms/AppBar";
import { AppContextProvider } from "./src/contexts/AppContext";
import AppNavigation from "./src/navigation/AppNavigation";

const logoWithoutBackground =
  "https://ensinio-public.s3.us-west-1.amazonaws.com/beta/beta/comment/images/1ec0599578533e22c2ec082cbcaa07b8.png";

export default function App() {
  return (
    <AppContextProvider>
      <SafeAreaView style={globalStyles.container}>
        <AppBar style={globalStyles.topBar}>
          <Image
            source={{ uri: logoWithoutBackground }}
            style={{ width: 40, height: 40 }}
          />
        </AppBar>

        <AppNavigation />

        <AppBar style={globalStyles.navBar}>
          <HomeIcon />
          <SearchIcon />
          <ArrowBackCircle />
        </AppBar>
      </SafeAreaView>
    </AppContextProvider>
  );
}

const styles = StyleSheet.create({
  checkboxContainer: {
    padding: 16,
  },
  iconContainer: {
    marginLeft: "auto",
    padding: 10,
  },
});
