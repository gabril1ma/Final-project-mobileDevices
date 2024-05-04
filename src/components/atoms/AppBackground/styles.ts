import { StyleSheet } from "react-native";
import { paddingConstructor } from "../../../shared/utils/padding";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F9FAFA",
    ...paddingConstructor(0, 12),
  },

  innerBackground: {
    backgroundColor: "#FFFFFF",
  },
});
