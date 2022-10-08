import React from 'react';

import {
  Container,
  ContainerPrice,
  Content,
  Header,
  HeaderContainer,
  ImageProduct,
  Price,
  Title,
} from './styles';

export function ProductDetail() {
  return (
    <Container>
      <Header>
        <HeaderContainer>
          <Title>Nome do Produto</Title>
          <ImageProduct />
        </HeaderContainer>
      </Header>

      <Content>
        <ContainerPrice>
          <Price>39,99</Price>
        </ContainerPrice>
      </Content>
    </Container>
  );
}
