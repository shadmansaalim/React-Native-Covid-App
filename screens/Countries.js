import React, { useState } from 'react';
import { View, VStack, Input, Icon } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { globalStyles } from '../styles/global';

const Countries = () => {
    return (
        <View style={globalStyles.container}>
            <VStack w="100%" alignSelf="center">
                <Input color="white" placeholder="Search your country" width="100%" borderRadius="4" py="3" px="1" fontSize="14" InputLeftElement={<Icon m="2" ml="3" size="6" color="gray.400" as={<MaterialIcons name="search" />} />} />
            </VStack>
        </View>

    );
};

export default Countries;