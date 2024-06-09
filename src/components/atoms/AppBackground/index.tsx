import React from "react";
import { ScrollView, View, ViewProps } from "react-native";
import { styles } from "./styles";

interface IAppBackgroundProps extends ViewProps {}
const AppBackground = ({ children, ...props }: IAppBackgroundProps) => {
  return (
    <ScrollView style={styles.container} {...props}>
      <View style={styles.innerBackground}>{children}</View>
    </ScrollView>
  );
};

export default AppBackground;
