import React from "react";
import { View, ViewProps } from "react-native";

interface IAppBar extends ViewProps {}
const AppBar = ({ children, ...props }: IAppBar) => {

  return (
    <View 
      {...props}>{children}
      
    </View>
  );
};

export default AppBar;
