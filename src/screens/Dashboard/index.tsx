import React, { useEffect, useState } from 'react';

import { KeyboardAvoidingView } from 'react-native';
import {
  ButtonPrint,
  Container,
  ContainerLogo,
  ContainerPrint,
  ContainerProducts,
  ProductsList,
  ContainerTitle,
  Header,
  Logo,
  Page,
  Slogan,
  Title,
  ScrollViewProducts,
  Form,
  Input,
} from './styles';

import { Button } from '../../components/Button';

interface Props {
  image: string;
  name: string;
  price: number;
  id: string;
}

export function Dashboard() {
  return (
    <Container>
      <Header>
        <ContainerLogo>
          <Logo source={require('../../images/logo_baoba.png')} />
        </ContainerLogo>

        <ContainerTitle>
          <Title>Clube Baobá</Title>
          <Slogan>Um clube de ofertas, sorteios e saúde</Slogan>
          <Page>Faça o seu Cadastro</Page>
        </ContainerTitle>
      </Header>

      <KeyboardAvoidingView
        contentContainerStyle={{
          bottom: 0,
          left: 0,
          flexDirection: 'row',
          padding: 10,
          alignContent: 'center',
          justifyContent: 'space-between',
          borderTopColor: '#FFF',
          borderTopWidth: 1,
        }}
        behavior="position"
        enabled
      >
        <Form>
          <Input placeholder="Nome" />
          <Input placeholder="Telefone" />
          <Input placeholder="Email" />
          <Input placeholder="CPF" />
          <Button title="Enviar" onPress={() => {}} />
        </Form>
      </KeyboardAvoidingView>
    </Container>
  );
}
