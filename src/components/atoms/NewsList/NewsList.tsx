import React from 'react';
import { View, StyleSheet } from 'react-native';
import NewsItem from '../NewsItems/newsItems';

const NewsList = ({ news }) => {
  return (
    <View style={styles.container}>
      {news.map((item, index) => (
        <NewsItem
          key={index}
          title={item.title}
          imageUrl={item.imageUrl}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default NewsList;
