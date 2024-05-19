import React from 'react';
import { Image, SafeAreaView, View, StyleSheet } from 'react-native';
import { globalStyles } from './src/UI/globalStyles';
import ArrowBackCircle from './src/assets/ArrowBackCircle';
import HomeIcon from './src/assets/HomeIcon';
import SearchIcon from './src/assets/SearchIcon';
import UserIcon from './src/assets/UserIcon';
import AppBar from './src/components/atoms/AppBar';
import AppPage from './src/pages/AppPage';
import NewsList from './src/components/atoms/NewsList/NewsList';
import CheckboxWithLabel from './src/components/atoms/CheckBox/CheckBox';
import EmptyMessage from './src/components/atoms/EmptyMessage/EmptyMEssage';

const logoWithoutBackground = 'https://ensinio-public.s3.us-west-1.amazonaws.com/beta/beta/comment/images/1ec0599578533e22c2ec082cbcaa07b8.png';

const sampleNews = [
  {
    title: 'News Title 1',
    imageUrl: 'https://via.placeholder.com/50',
  },
  {
    title: 'News Title 2',
    imageUrl: 'https://via.placeholder.com/50',
  },
  {
    title: 'News Title 3',
    imageUrl: 'https://via.placeholder.com/50',
  },
];

export default function App() {
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
    <SafeAreaView style={globalStyles.container}>
      <AppBar style={globalStyles.topBar}>
        <Image source={{ uri: logoWithoutBackground }} style={{ width: 40, height: 40 }} />
      </AppBar>

      <View style={globalStyles.pagesContainer}>
        <AppPage />
        <NewsList news={sampleNews} />
      </View>

      <View style={styles.checkboxContainer}>
        <CheckboxWithLabel
          id="checkbox1"
          label="Option 1"
          checked={checkboxState.checkbox1}
          onChange={handleCheckboxChange}
        />
        <CheckboxWithLabel
          id="checkbox2"
          label="Option 2"
          checked={checkboxState.checkbox2}
          onChange={handleCheckboxChange}
        />
      </View>

      <AppBar style={globalStyles.navBar}>
        <HomeIcon />
        <SearchIcon />
        <ArrowBackCircle />
        <UserIcon width={30} height={30} color="#000000" />
      </AppBar>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  checkboxContainer: {
    padding: 16,
  },
  iconContainer: {
    marginLeft: 'auto',
    padding: 10,
  },
});
