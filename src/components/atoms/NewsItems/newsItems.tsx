import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const NewsItem = ({ title, imageUrl, date, link, ogTitle, broadcaster, broadcasterImages }) => {
  const handlePress = () => {
    Linking.openURL(link);
  };

  return (
    <View>
      <Image source={{ uri: broadcasterImages }} style={styles.image} />
      <Text>{broadcaster}</Text>
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View>
        <Text style={styles.title}>{ogTitle}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
    </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 12,
    color: '#555',
  },
});

export default NewsItem;
