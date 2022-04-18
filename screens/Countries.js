import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { View, VStack, Input, Icon, Text, FlatList, ScrollView, Image } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { globalStyles } from '../styles/global';
import CountryData from '../components/CountryData';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [displayCountries, setDisplayCountries] = useState([]);
    const [click, setClick] = useState(false);
    const [searchText, setSearchText] = useState('');
    useEffect(() => {
        fetch('https://coronavirus-19-api.herokuapp.com/countries/')
            .then(res => res.json())
            .then(data => {
                setCountries(data);
                setDisplayCountries(data);
                setSearchText('');
            })
    }, []);

    const handleSearch = text => {
        setSearchText(text);
        setClick(true);
        const userCountries = countries.filter(country => country.country.toLowerCase().includes(text.toLowerCase()));
        setDisplayCountries(userCountries);
    }
    return (
        <ScrollView style={styles.container}>
            <VStack w="100%" alignSelf="center" padding={6}>
                <Input
                    value={searchText}
                    onChangeText={text => handleSearch(text)}
                    color="white" placeholder="Search your country" width="100%" borderRadius="4" py="3" px="1" fontSize="14" InputLeftElement={<Icon m="2" ml="3" size="6" color="gray.400" as={<MaterialIcons name="search" />} />} />
            </VStack>

            {
                click
                    ?
                    (
                        displayCountries.length
                            ?
                            <View>
                                <Text textAlign="center" marginTop={4} marginBottom={6} style={globalStyles.titleText}>Live Covid-19 Information</Text>
                                {
                                    displayCountries.map(country => <CountryData
                                        key={country.country}
                                        country={country}
                                    ></CountryData>)
                                }
                            </View>
                            :
                            <View style={styles.searchNotFound}>
                                <Text marginTop={4} marginBottom={6} style={globalStyles.titleText} color="white">Search Result Not Found</Text>
                                <Image
                                    source={require('../assets/searchNotFound.png')}
                                    size="96"
                                    alt="Search Not Found Image"
                                />
                            </View>

                    )
                    :
                    <View>
                        <Text textAlign="center" marginTop={4} marginBottom={6} style={globalStyles.titleText}>Live Covid-19 Information</Text>
                        {
                            countries.map(country =>
                                <CountryData
                                    key={country.country}
                                    country={country}
                                ></CountryData>)
                        }
                    </View>
            }

        </ScrollView>

    );
};

export default Countries;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    searchNotFound: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
});