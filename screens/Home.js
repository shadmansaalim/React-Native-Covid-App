import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { globalStyles } from '../styles/global';
import { Text, HStack, Spinner } from 'native-base';


const Home = () => {
    const [global, setGlobal] = useState({});

    useEffect(() => {
        fetch('https://coronavirus-19-api.herokuapp.com/all')
            .then(res => res.json())
            .then(data => setGlobal(data))
    }, [])

    return (
        <>
            {
                Object.keys(global).length
                    ?
                    <View style={globalStyles.container}>
                        <Text style={{ ...globalStyles.titleText, ...styles.headerText }}>Global Coronavirus Information</Text>
                        <View style={styles.dataContainer}>
                            <TouchableOpacity>
                                <View style={styles.cardStyle}>
                                    <View style={styles.cardInfo}>
                                        <Text style={globalStyles.text} fontSize="2xl" color="white">Cases</Text>
                                        <Text style={globalStyles.text} color="white">Global</Text>
                                    </View>
                                    <Text style={globalStyles.text} fontSize="2xl" color="muted.300">{global.cases}</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={styles.cardStyle}>
                                    <View style={styles.cardInfo}>
                                        <Text style={globalStyles.text} fontSize="2xl" color="white">Deaths</Text>
                                        <Text style={globalStyles.text} color="white">Global</Text>
                                    </View>
                                    <Text style={globalStyles.text} fontSize="2xl" color="muted.300">{global.deaths}</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={styles.cardStyle}>
                                    <View style={styles.cardInfo}>
                                        <Text style={globalStyles.text} fontSize="2xl" color="white">Recovered</Text>
                                        <Text style={globalStyles.text} color="white">Global</Text>
                                    </View>
                                    <Text style={globalStyles.text} fontSize="2xl" color="muted.300">{global.recovered}</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    :
                    <HStack justifyContent="center" alignItems="center" height="100%">
                        <Spinner size="lg" color="dark.600" />
                    </HStack>

            }
        </>
    );
};

export default Home;

const styles = StyleSheet.create({
    headerText: {
        textAlign: 'center'
    },
    dataContainer: {
        marginTop: 25
    },
    cardStyle: {
        backgroundColor: "#1e272e",
        borderRadius: 10,
        margin: 15,
        padding: 15,
        textAlign: "left",
        overflow: "hidden",
    },
    cardInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
});