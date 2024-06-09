import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import NewsDTO from "../../../DTO/NewsDTO";
import NewsItem from "../NewsItems/newsItems";

const NewsList = ({ news }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        {news?.map((item: NewsDTO) => (
          <NewsItem
            key={item.metatags.og_title}
            broadcaster={item.metatags.og_site_name}
            imageUrl={item.metatags.og_image ?? item.metatags.twitter_image}
            link={item.link}
            ogTitle={item?.metatags?.og_title}
          />
        ))}

        {news.length === 0 && (
          <Text style={styles.noNewsText}>Não foram encontradas notícias</Text>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    // width: "60%",
  },
  noNewsText: {
    textAlign: "center",
    color: "#C4001F",
    fontSize: 16,
    marginTop: 20,
  },
});

export default NewsList;
