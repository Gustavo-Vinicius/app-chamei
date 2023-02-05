import React from 'react';
import { View } from 'react-native';
import Logo from './assets/Logo.svg'
import styled from './styled';
import { Button, Input, Text } from "native-base";

export function PrestadorServicoLogin() {
  return (
    <View style={styled.container}>
      <View style={{ alignItems: "center", justifyContent: "center", paddingTop: 30, paddingBottom: 20 }}>
        <Logo />
      </View>
      <View style={{ alignItems: "center", justifyContent: "center", paddingTop: 98 }}>
        <Text fontSize="2xl" color="#AAAAAA">Prestador de serviço - MEI</Text>
      </View>
      <View style={{ alignItems: "center", justifyContent: "center", paddingTop: 50 }}>
        <Input size="xl" variant="outline" placeholder="Nome :" w="100%" />
      </View>
      <View style={{ alignItems: "center", justifyContent: "center", paddingTop: 50 }}>
        <Input size="xl" variant="outline" placeholder="Senha :" w="100%" />
      </View>
      <View style={{ padding: 15}}>
        <Button color="#2F74B7" style={{ height: 80, backgroundColor: "#2F74B7" }}>
          <Text color="white" fontSize="lg">
            Entrar
          </Text>
        </Button>
      </View>

    </View>
  );
}