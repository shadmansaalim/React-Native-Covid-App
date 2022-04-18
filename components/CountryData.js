import React from 'react';
import { View, Text } from 'native-base';
import { StyleSheet } from 'react-native';
import { globalStyles } from '../styles/global';

const CountryData = (props) => {
    const { country, active, cases, deaths, recovered, todayCases, todayDeaths, critical } = props.country.item;

    return (
        <View style={styles.cardStyle}>
            <View>
                <Text style={{ ...globalStyles.titleText, fontSize: 20 }} color="white">{country}</Text>
                <View>
                    <Text style={globalStyles.text} color="white">Cases : {cases} | Today : {todayCases} | Active : {active}</Text>
                </View>
                <View>
                    <Text style={globalStyles.text} color="white">Deaths : {deaths} | Today : {todayDeaths}</Text>
                </View>
                <View>
                    <Text style={globalStyles.text} color="white">Recovered : {recovered} | Critical : {critical}</Text>
                </View>
            </View>
        </View>
    );
};

export default CountryData;


const styles = StyleSheet.create({
    cardStyle: {
        backgroundColor: "#1e272e",
        padding: 16,
        textAlign: "left",
        overflow: "hidden",
        borderBottomWidth: 1,
        borderBottomColor: 'lightgray',
    }
})
