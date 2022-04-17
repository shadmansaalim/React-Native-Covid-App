import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { Ionicons } from "@expo/vector-icons";

import Home from "../screens/Home";
import Countries from "../screens/Countries";
import About from "../screens/About";
import Header from '../components/shared/Header';

const NavContainerTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: '#121212'
    },
};

const Tab = createBottomTabNavigator();

export default function Navigator() {
    return (
        <NavigationContainer theme={NavContainerTheme} >
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Home') {
                            iconName = focused
                                ? 'home'
                                : 'home-outline';
                        }
                        else if (route.name === 'Countries') {
                            iconName = focused
                                ? 'flag'
                                : 'flag-outline';
                        }
                        else {
                            iconName = focused ? 'information-circle' : 'information-circle-outline';
                        }

                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: '#3880FF',
                    tabBarInactiveTintColor: '#BFB5B2',
                    tabBarInactiveBackgroundColor: 'black',
                    tabBarActiveBackgroundColor: 'black',
                    tabBarItemStyle: {
                        height: 83,
                        paddingBottom: 30,
                        paddingTop: 10
                    },
                    tabBarStyle: {
                        height: 83,
                    },
                })}
            >
                <Tab.Screen name="Home" component={Home}
                    options={() => {
                        return {
                            headerTitle: () => <Header title="Home" />,
                            headerStyle: { backgroundColor: 'black' }
                        }
                    }}
                />
                <Tab.Screen name="Countries" component={Countries}
                    options={() => {
                        return {
                            headerTitle: () => <Header title="Countries" />,
                            headerStyle: { backgroundColor: 'black' }
                        }
                    }}
                />
                <Tab.Screen name="About" component={About}
                    options={() => {
                        return {
                            headerTitle: () => <Header title="About" />,
                            headerStyle: { backgroundColor: 'black' }
                        }
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
