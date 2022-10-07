import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components';
import { Button } from '../../components/Button';
import { CardPromotion } from '../../components/CardPromotion';
import { cardsPromotion } from '../../utils/cardsPromotion';
import { useNavigation, useRoute } from '@react-navigation/native';

import {
  Container,
  ContainerLogo,
  ContainerTitle,
  Header,
  Logo,
  Slogan,
  Title,
  ContainerButton,
} from './styles';

export function Dashboard() {
  const theme = useTheme();
  const { navigate, goBack } = useNavigation<any>();

  function handleScreenRegister() {
    navigate('Registro');
  }

  return (
    <Container>
      <Header>
        <ContainerLogo>
          <Logo source={require('../../images/logo_baoba.png')} />
        </ContainerLogo>

        <ContainerTitle>
          <Title>Clube Baobá</Title>
          <Slogan>
            Um clube de ofertas, sorteios e saúde.{'\n'}Faça o seu Cadastro
          </Slogan>

          <ContainerButton>
            <Button
              title="Aqui"
              color={theme.colors.shape}
              onPress={() => {}}
            />
          </ContainerButton>
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
