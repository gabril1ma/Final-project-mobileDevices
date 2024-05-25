import React from "react";
import { Text, View } from "react-native";
import SearchIcon from "../../../assets/SearchIcon";
import useAppContext from "../../../hooks/useAppContext";
import useAppService from "../../../hooks/useAppService";
import { styles } from "./styles";

const SearchInput = () => {
  const { setAppState, appState } = useAppContext();

  const { dispatchSearchNews } = useAppService();

  const handleChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) =>
    setAppState((prev) => ({ ...prev, searchInputValue: e.target.value }));

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
          onChange={handleChangeInputValue}
          value={appState?.searchInputValue}
        />
      </label>
      <Text onPress={dispatchSearchNews}>
        <SearchIcon fill="#454B66" />
      </Text>
    </View>
  );
};

export default SearchInput;
