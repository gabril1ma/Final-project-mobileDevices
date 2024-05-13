import { StyleSheet } from "react-native";
import { paddingConstructor } from "../shared/utils/padding";

export const globalStyles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#f9f9f9",
  },

  pagesContainer: {
    flex: 1,
  },

  topBar: {
    backgroundColor: "#222222",
    display: "flex",
    alignItems: "flex-start",
    flex: 1,
    maxHeight: 60,
    ...paddingConstructor(8, 8),
  },

  navBar: {
    backgroundColor: "#222222",
    flex: 1,
    maxHeight: 50,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
