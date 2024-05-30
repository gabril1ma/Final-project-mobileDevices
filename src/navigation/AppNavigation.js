// src/navigation/AppNavigation.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppPage from '../pages/AppPage/index';
import NewsPage from '../pages/NewsPage/News';

const Stack = createStackNavigator();

const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={AppPage} />
                <Stack.Screen name="Results" component={NewsPage} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigation;
