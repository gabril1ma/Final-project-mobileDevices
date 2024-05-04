import React from "react";
import { SafeAreaView, Text } from "react-native";
import { globalStyles } from "./src/UI/globalStyles";
import AppBar from "./src/components/atoms/AppBar";
import ExamplePage from "./src/pages/ExamplePage";

export default function App() {
  return (
    <SafeAreaView style={globalStyles.container}>
      <AppBar style={globalStyles.topBar}>
        <Text>TOP BAR</Text>
      </AppBar>

      <ExamplePage />

      <AppBar style={globalStyles.navBar}>
        <Text>FIXED NAVIGATION BAR</Text>
      </AppBar>
    </SafeAreaView>
  );
}
