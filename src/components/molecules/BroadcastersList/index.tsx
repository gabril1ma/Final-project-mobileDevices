import React from "react";
import { StyleSheet, View } from "react-native";
import useAppContext from "../../../hooks/useAppContext";
import CheckBox from "../../atoms/CheckBox/CheckBox";

const BroadcastersList = () => {
  const {
    appState: { broadcasters },
    setAppState,
  } = useAppContext();

  const handleCheckBoadcaster = (index: number) =>
    setAppState((prev) => ({
      ...prev,
      broadcasters: broadcasters?.map((broadcaster) => {
        if (broadcaster?.name === broadcasters[index]?.name)
          return { ...broadcaster, selected: !broadcaster?.selected };
        return broadcaster;
      }),
    }));

  return (
    <View style={styles.container}>
      {broadcasters?.map((b, index) => (
        <CheckBox
          key={b?.name}
          label={b?.name}
          isChecked={b?.selected}
          onValueChange={() => handleCheckBoadcaster(index)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },
});

export default BroadcastersList;
