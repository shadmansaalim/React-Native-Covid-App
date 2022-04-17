import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/Home';
import Countries from '../screens/Countries';
import About from '../screens/About';

const screens = {
    Home: {
        screen: Home,
    },
    Countries: {
        screen: Countries,
    },
    About: {
        screen: About,
    }
};
const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);