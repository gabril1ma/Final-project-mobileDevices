import Checkbox from "expo-checkbox";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const CheckBox = ({ onValueChange, isChecked, label }) => {
  return (
    <Text onPress={onValueChange}>
      <View style={styles.section}>
        <Checkbox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={onValueChange}
          color={isChecked ? "#3762EA" : "#DFE4EA"}
        />
        <Text style={styles.paragraph}>{label}</Text>
      </View>
    </Text>
  );
};

const styles = StyleSheet.create({
  section: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: "#DFE4EA",
    borderBottomWidth: 1,
    width: "100%",
  },
  paragraph: {
    fontSize: 15,
  },
  checkbox: {
    margin: 12,
    width: 20,
    height: 20,
  },
});

export default CheckBox;
