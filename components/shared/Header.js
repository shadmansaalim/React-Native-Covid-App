import React from 'react';
import { StyleSheet, View, Text, Image, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header({ navigation, title }) {
    return (
        <View style={styles.header}>
            <View style={styles.headerTitle}>
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 16,
        color: 'white',
        letterSpacing: 1,
        marginBottom: 0
    },
    headerTitle: {
        flexDirection: 'row'
    },
});