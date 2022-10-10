import { useRoute } from '@react-navigation/native';
import React from 'react';
import { ProductsProps } from '../../DTO/ProductsDTO';
import {
  Container,
  ContainerDescriptions,
  ContainerPrice,
  Content,
  Descriptions,
  Header,
  HeaderContainer,
  ImageProduct,
  Line,
  Price,
  Title,
} from './styles';

interface Params {
  product: ProductsProps;
  goBack: () => void;
}

export function ProductDetail() {
  const { params } = useRoute();
  const { product } = params as Params;
  return (
    <Container>
      <Header>
        <HeaderContainer>
          <Title>{product.name}</Title>
          <ImageProduct source={{ uri: product.image }} />
        </HeaderContainer>
      </Header>

      <Content>
        <ContainerPrice>
          <Price>R$ {product.price}</Price>
        </ContainerPrice>

        <Line />

        <ContainerDescriptions>
          <Descriptions>
            {product.descriptiom
              ? product.descriptiom
              : 'Haverá aqui um testo que descreverá esse produto, como o seu uso, igredientes e modo de preparo'}
          </Descriptions>
        </ContainerDescriptions>
      </Content>
    </Container>
  );
}
