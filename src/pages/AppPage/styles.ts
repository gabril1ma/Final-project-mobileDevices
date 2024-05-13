import { StyleSheet } from "react-native";
import { paddingConstructor } from "../../shared/utils/padding";

export const styles = StyleSheet.create({
  container: {
    ...paddingConstructor(0, 16),
  },
  innerPadding: {
    ...paddingConstructor(16, 16),
  },
  title: {
    color: "#18224C",
    fontWeight: "500",
    fontSize: 15,
    maxWidth: "70%",
    marginBottom: 48,
  },
});
