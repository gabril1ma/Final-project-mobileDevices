import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import useAppContext from "../../../hooks/useAppContext";

const SelectedBroadcasterDragAndDrop = () => {
  const {
    appState: { broadcasters },
  } = useAppContext();

  const selectedBroadCasters = broadcasters.filter((b) => b.selected);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Coloque em ordem crescente qual veiculo de noticia você prefere:
      </Text>

      <View style={styles.buttonContainer}>
        {selectedBroadCasters.map((b) => (
          <TouchableOpacity style={styles.draggableItem} key={b.name}>
            <Text>{b.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },
  buttonContainer: {
    display: "flex",
    gap: 4,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  text: {
    color: "#18224C",
    fontWeight: "500",
    fontSize: 15,
    marginBottom: 8,
  },
  draggableItem: {
    padding: 16,
    color: "#18224C",
    backgroundColor: "#DFE4EA",
    fontWeight: "400",
    fontSize: 13,
    fontFamily:
      " -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
  },
});

export default SelectedBroadcasterDragAndDrop;
