import React from "react";
import { View } from "react-native";
<<<<<<< HEAD
=======
import SearchIcon from "../../../assets/SearchIcon";
import useAppContext from "../../../hooks/useAppContext";
>>>>>>> 42f25dce1b2693b4932e823ccfa133fb6084eff1
import { styles } from "./styles";
import SearchIcon from "../../../assets/SearchIcon";

const SearchInput = () => {
  const {
    appState: { broadcasters },
  } = useAppContext();

  const shouldDisableSearchBar = broadcasters.some((b) => b.selected);

  return (
    <View
      style={{
        ...styles.container,
        borderBottomColor: shouldDisableSearchBar ? "#DFE4EA" : "#A31621",
      }}
    >
      <label htmlFor="search-news-input" style={styles.searchInputLabel}>
        <input
          disabled={!shouldDisableSearchBar}
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
