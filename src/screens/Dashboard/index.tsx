import React, { useEffect, useState } from 'react';

import {
  Container,
  ContainerLogo,
  ContainerProducts,
  ProductsList,
  ContainerTitle,
  Header,
  Logo,
  Page,
  Slogan,
  Title,
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
    </Container>
  );
}
