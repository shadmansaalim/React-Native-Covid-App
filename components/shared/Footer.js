import React, { useState } from 'react';
import { NativeBaseProvider, Box, Text, Heading, VStack, FormControl, Input, Link, Button, Icon, HStack, Center, Pressable } from "native-base";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from '@expo/vector-icons';
const Footer = () => {
    const [selected, setSelected] = useState(1);
    return (
        <NativeBaseProvider>
            <Box flex={1} bg="white" safeAreaTop width="100%" maxW="100%" alignSelf="center">
                <Center flex={1}></Center>
                <HStack bg="dark.50" alignItems="center" safeAreaBottom shadow={6}>
                    <Pressable opacity={selected === 0 ? 1 : 0.5} py="3" flex={1} onPress={() => setSelected(0)}>
                        <Center>
                            <Icon mb="1" as={<FontAwesome name="flag" size={24} color="black" />}
                                color=
                                {selected == 0
                                    ?
                                    "darkBlue.500"
                                    :
                                    "white"
                                } size="sm" />
                            <Text color=
                                {selected == 0
                                    ?
                                    "darkBlue.500"
                                    :
                                    "white"
                                } fontSize="12">
                                Home
                            </Text>
                        </Center>
                    </Pressable>
                    <Pressable opacity={selected === 1 ? 1 : 0.5} py="2" flex={1} onPress={() => setSelected(1)}>
                        <Center>
                            <Icon mb="1" as={<MaterialIcons name="search" />} color={selected == 0
                                ?
                                "darkBlue.500"
                                :
                                "white"
                            } size="sm" />
                            <Text color={selected == 0
                                ?
                                "darkBlue.500"
                                :
                                "white"
                            } fontSize="12">
                                Search
                            </Text>
                        </Center>
                    </Pressable>
                    <Pressable opacity={selected === 2 ? 1 : 0.6} py="2" flex={1} onPress={() => setSelected(2)}>
                        <Center>
                            <Icon mb="1" as={<MaterialCommunityIcons name={selected === 2 ? "cart" : "cart-outline"} />} color={selected == 0
                                ?
                                "darkBlue.500"
                                :
                                "white"
                            } size="sm" />
                            <Text color={selected == 0
                                ?
                                "darkBlue.500"
                                :
                                "white"
                            } fontSize="12">
                                Cart
                            </Text>
                        </Center>
                    </Pressable>
                </HStack>
            </Box>
        </NativeBaseProvider>
    );
};

export default Footer;