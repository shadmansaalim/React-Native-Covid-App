import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { View, VStack, Input, Icon, Text, FlatList } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { globalStyles } from '../styles/global';
import CountryData from '../components/CountryData';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [displayCountries, setDisplayCountries] = useState([]);
    useEffect(() => {
        fetch('https://coronavirus-19-api.herokuapp.com/countries/')
            .then(res => res.json())
            .then(data => {
                setCountries(data);
                setDisplayCountries(data);
            })
    }, []);

    const handleSearch = searchText => {
        const userCountries = countries.filter(country => country.country.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayCountries(userCountries);
    }
    return (
        <View style={styles.container}>
            <VStack w="100%" alignSelf="center" padding={6}>
                <Input onChangeText={text => handleSearch(text)} color="white" placeholder="Search your country" width="100%" borderRadius="4" py="3" px="1" fontSize="14" InputLeftElement={<Icon m="2" ml="3" size="6" color="gray.400" as={<MaterialIcons name="search" />} />} />
            </VStack>

            {
                displayCountries.length
                    ?
                    <View>
                        <Text textAlign="center" marginTop={6} marginBottom={6} style={globalStyles.titleText}>Live Covid-19 Information</Text>
                        <FlatList
                            data={displayCountries}
                            renderItem={(country) => (
                                <CountryData country={country}></CountryData>
                            )}
                        />
                    </View>
                    :
                    <View>
                        <Text>Search Result Not Found</Text>
                    </View>

            }

        </View>

    );
};

export default Countries;

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});