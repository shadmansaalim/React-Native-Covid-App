import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Button, FlatList, TouchableOpacity, Modal, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { globalStyles } from '../styles/global';

const Home = () => {
    const [global, setGlobal] = useState({});

    useEffect(() => {
        fetch('https://coronavirus-19-api.herokuapp.com/all')
            .then(res => res.json())
            .then(data => setGlobal(data))
    }, [])

    return (
        <View style={globalStyles.container}>
            <Text style={{ ...globalStyles.titleText, ...styles.headerText }}>Global Coronavirus Information</Text>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    headerText: {
        textAlign: 'center'
    }
});