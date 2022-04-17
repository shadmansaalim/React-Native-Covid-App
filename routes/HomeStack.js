import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/Home';
import Countries from '../screens/Countries';
import About from '../screens/About';
import Footer from '../components/shared/Footer';

const screens = {
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Footer navigation={navigation} />,
            }
        }
    },
    Countries: {
        screen: Countries,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Footer navigation={navigation} />,
            }
        }
    },
    About: {
        screen: About,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Footer navigation={navigation} />,
            }
        }
    }
};
const HomeStack = createStackNavigator(screens);

export default HomeStack;