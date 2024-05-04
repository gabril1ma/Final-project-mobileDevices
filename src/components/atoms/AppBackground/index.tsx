import React from "react";
import { View, ViewProps } from "react-native";
import { styles } from "./styles";

interface IAppBackgroundProps extends ViewProps {}
const AppBackground = ({ children, ...props }: IAppBackgroundProps) => {
  return (
    <View style={styles.container} {...props}>
      <View style={styles.innerBackground}>{children}</View>
    </View>
  );
};

export default AppBackground;
