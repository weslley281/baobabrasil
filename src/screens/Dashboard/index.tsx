import React from 'react';
import { CardProduct } from '../../components/CardProducts';
import {
  Container,
  ContainerLogo,
  ContainerProducts,
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
          <Page>Catálogo de Produtos</Page>
        </ContainerTitle>
      </Header>
      <ContainerProducts>
        <CardProduct
          image="https://baobabrasil.com.br/wp-content/uploads/2022/06/vinagrete-flocos.jpg"
          name="Vinagrete em Flocos"
          price={6.99}
        />
        <CardProduct
          image="https://baobabrasil.com.br/wp-content/uploads/2022/06/vinagrete-flocos.jpg"
          name="Vinagrete em Flocos"
          price={6.99}
        />
        <CardProduct
          image="https://baobabrasil.com.br/wp-content/uploads/2022/06/vinagrete-flocos.jpg"
          name="Vinagrete em Flocos"
          price={6.99}
        />
        <CardProduct
          image="https://baobabrasil.com.br/wp-content/uploads/2022/06/vinagrete-flocos.jpg"
          name="Vinagrete em Flocos"
          price={6.99}
        />
      </ContainerProducts>
    </Container>
  );
}
