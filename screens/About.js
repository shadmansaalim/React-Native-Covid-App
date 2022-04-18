import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, Image, Button } from 'native-base';
import { globalStyles } from '../styles/global';
import { Feather } from '@expo/vector-icons';
import { Linking } from 'react-native';


const About = () => {
    const linking = {
        prefixes: ['mychat://', 'https://mychat.com', 'https://*.mychat.com'],
    };
    return (
        <View style={styles.container}>
            <Text style={{ ...globalStyles.text, ...styles.text }}>
                My name is Saalim Shadman and I am a Computer Science student at RMIT, Melbourne, Australia. I used React Native and Native Base to build this application along with API for live Covid data. I am a Full Stack Developer checkout my portfolio to know more about me.
            </Text>
            <Button onPress={() => Linking.openURL('https://saalim-shadman.web.app/')} rightIcon={<Feather name="arrow-up-right" size={24} color="black" />} bgColor="cyan.700" marginTop={6}>About Me
            </Button>

        </View>
    );
};

export default About;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 40,
        marginTop: 40
    },
    text: {
        color: 'white',
    },
});