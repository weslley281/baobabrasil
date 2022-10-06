import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { CardPromotion } from '../../components/CardPromotion';
import { cardsPromotion } from '../../utils/cardsPromotion';

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

      <FlatList
        data={cardsPromotion}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        renderItem={({ item }) => (
          <CardPromotion data={item} onPress={() => {}} />
        )}
      />
    </Container>
  );
}
