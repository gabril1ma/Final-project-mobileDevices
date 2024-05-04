import React from "react";
import { Button, ButtonProps } from "react-native";

type TButtonVariantType = "primary" | "secundary" | "transparent";
interface IButtonCustomProps extends ButtonProps {
  variant: TButtonVariantType;
}
const buttonColor = {
  primary: "#3762EA",
  secundary: "#DFE4EA",
  transparant: "transparant",
};

const ButtonCustom = ({ variant, ...props }: IButtonCustomProps) => {
  const color = buttonColor[variant] ?? buttonColor["transparant"];
  return <Button color={color} {...props} />;
};

export default ButtonCustom;
