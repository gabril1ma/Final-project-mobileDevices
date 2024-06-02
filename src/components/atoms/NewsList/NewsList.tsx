import React from "react";
import { StyleSheet, View } from "react-native";
import NewsItem from "../NewsItems/newsItems";

const NewsList = ({ news }) => {
  return (
    <View style={styles.container}>
      {news?.map((item) => (
        <NewsItem
          key={item.title}
          broadcaster = {item.broadcaster}
          title={item.title}
          imageUrl={item.image}
          date={item.date}
          link={item.link}
          ogTitle={item.ogTitle}
          broadcasterImages={item.broadcasterImages}
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
});

export default NewsList;
