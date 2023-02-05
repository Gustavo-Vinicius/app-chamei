import { Image, View } from "react-native";
import React from "react";
import Logo from './assets/Logo.svg'
import styled from "./styled";
import { Button, Text } from "native-base";

import { useNavigation } from '@react-navigation/native'




export function Home() {
    
    const navigation = useNavigation();

    function AbrirLoginDoPrestador() {
        navigation.navigate('LoginPrestadorServico')
    }

    return (
        <View style={styled.container}>
            <View style={{ alignItems: "center", justifyContent: "center", paddingTop: 30, paddingBottom: 20 }}>
                <Logo />
            </View>
            <View style={{ alignItems: "center", justifyContent: "center", paddingBottom: 92 }}>

                <Text italic fontSize="xl">Aqui você é o seu prestador de serviço!</Text>
            </View>

            <View style={{ alignItems: "center", justifyContent: "center", paddingBottom: 10 }}>
                <Text fontSize="lg" color="#AAAAAA">Quem é você?</Text>
            </View>

            <View style={{ padding: 5 }}>

                
                <Button onPress={AbrirLoginDoPrestador} color="#2F74B7" style={{ height: 80, backgroundColor: "#2F74B7" }}>
                    <Text color="white" fontSize="lg">
                        Prestador de serviço - MEI
                    </Text>
                </Button>
            </View>
            <View style={{ padding: 5 }}>
                <Button style={{ height: 80, backgroundColor: "#6DC3C7"}}>
                    <Text color="white" fontSize="lg">
                    Cliente
                    </Text>
                </Button>
            </View>
        </View>
    )
}