import { StyleSheet } from "react-native";
import { paddingConstructor } from "../shared/utils/padding";

export const globalStyles = StyleSheet.create({
  container: {
    height: "100%",
    flex: 1,
  },

  topBar: {
    backgroundColor: "#222222",
    ...paddingConstructor(16, 0),
  },

  navBar: {
    backgroundColor: "#222222",
    ...paddingConstructor(16, 0),
    bottom: 0,
    position: "absolute",
    width: "100%",
  },
});
