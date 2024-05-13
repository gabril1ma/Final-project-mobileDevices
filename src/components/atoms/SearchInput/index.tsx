import React from "react";
import { View, Text } from "react-native";
import SearchIcon from "../../../assets/SearchIcon";
import { styles } from "./styles";

const SearchInput = () => {
  return (
    <View style={styles.container}>
      <label htmlFor="search-news-input" style={styles.searchInputLabel}>
        <input
          type="text"
          name="search-news-input"
          style={{ ...styles.searchInput, outlineColor: "transparent" }}
          placeholder="Pesquisar..."
        />
      </label>
      <Text className="font-bold">
        fununciona
      </Text>
      <SearchIcon fill="#454B66" />
    </View>
  );
};

export default SearchInput;
