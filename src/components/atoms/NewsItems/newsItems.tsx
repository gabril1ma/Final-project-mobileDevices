import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const NewsItem = ({ imageUrl, link, ogTitle, broadcaster }) => {
  return (
    <a href={link} style={styles.link}>
      <TouchableOpacity style={styles.container}>
        <Image source={{ uri: imageUrl }} style={styles.image} />

        <View>
          <Text>{broadcaster}</Text>
          <Text style={styles.title}>{ogTitle}</Text>
        </View>
      </TouchableOpacity>
    </a>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderWidth: 1,
    borderColor: "transparent",
  },
  image: {
    height: 50,
    borderRadius: 4,
    marginRight: 10,
    aspectRatio: 70 / 50,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  link: {
    textDecorationLine: "none",
  },
});

export default NewsItem;
