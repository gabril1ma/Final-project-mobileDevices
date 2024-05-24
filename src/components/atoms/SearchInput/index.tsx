import React from "react";
import { View } from "react-native";
import SearchIcon from "../../../assets/SearchIcon";
import useAppContext from "../../../hooks/useAppContext";
import { styles } from "./styles";

const SearchInput = () => {
  const {
    appState: { broadcasters },
  } = useAppContext();

  const shouldDisableSearchBar = broadcasters.some((b) => b.selected);

  return (
    <View
      style={{
        ...styles.container,
      }}
    >
      <label htmlFor="search-news-input" style={styles.searchInputLabel}>
        <input
          type="text"
          name="search-news-input"
          style={{ ...styles.searchInput, outlineColor: "transparent" }}
          placeholder="Pesquisar..."
        />
      </label>
      <SearchIcon fill="#454B66" />
    </View>
  );
};

export default SearchInput;
