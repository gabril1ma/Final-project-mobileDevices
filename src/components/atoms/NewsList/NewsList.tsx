import React from "react";
import { StyleSheet, View } from "react-native";
import NewsItem from "../NewsItems/newsItems";

const mockedNews = [
  {
    title: "News Title 1",
    imageUrl: "https://via.placeholder.com/50",
  },
  {
    title: "News Title 2",
    imageUrl: "https://via.placeholder.com/50",
  },
  {
    title: "News Title 3",
    imageUrl: "https://via.placeholder.com/50",
  },
];

const NewsList = () => {
  const [checkboxState, setCheckboxState] = React.useState({
    checkbox1: false,
    checkbox2: false,
  });

  const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;
    setCheckboxState((prevState) => ({
      ...prevState,
      [id]: checked,
    }));
  };

  return (
    <View style={styles.container}>
      {mockedNews?.map((item) => (
        <NewsItem
          key={item.title}
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
