// src/components/atoms/SearchInput.js
import React from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import SearchIcon from "../../../assets/SearchIcon";
import useAppContext from "../../../hooks/useAppContext";
import useAppService from "../../../hooks/useAppService";
import { styles } from "./styles";

const SearchInput = ({ onSearchCompleted }) => {
  const { setAppState, appState } = useAppContext();
  const { dispatchSearchNews } = useAppService();

  const handleChangeInputValue = (e) =>
    setAppState((prev) => ({ ...prev, searchInputValue: e.nativeEvent.text }));

  const handleSearch = async () => {
    const news = await dispatchSearchNews();
    if (onSearchCompleted) {
      onSearchCompleted(news);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Pesquisar..."
        onChange={handleChangeInputValue}
        value={appState?.searchInputValue}
      />
      <TouchableOpacity onPress={handleSearch}>
        <SearchIcon fill="#454B66" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
