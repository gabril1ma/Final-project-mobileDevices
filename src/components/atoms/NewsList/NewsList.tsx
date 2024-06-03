import React from "react";
import { StyleSheet, View, Text } from "react-native";
import NewsItem from "../NewsItems/newsItems";

const NewsList = ({ news }) => {
  return (
    <View style={styles.container}>
      {news.length === 0 && (
        <Text style={styles.noNewsText}>Não foram encontradas notícias</Text>
      )}
      {news?.map((item) => (
        <NewsItem
          key={item.title}
          broadcaster={item.broadcaster}
          title={item.title}
          imageUrl={item.image}
          date={item.date}
          link={item.link}
          ogTitle={item.ogTitle}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: "60%",
  },
  noNewsText: {
    textAlign: "center",
    color: "#C4001F",
    fontSize: 16,
    marginTop: 20,
  },
});

export default NewsList;
