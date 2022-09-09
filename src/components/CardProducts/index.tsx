import React from 'react';
import {
  Container,
  ContainerImageProduct,
  ContainerProductDescription,
  ImageProduct,
  ProductName,
  ProductPrice,
} from './styles';

interface Props {
  image: string;
  name: string;
  price: number;
}
export function CardProducts({ image, name, price }: Props) {
  const newPrice = price.toString().replace('.', ',');

  return (
    <Container>
      <ContainerImageProduct>
        <ImageProduct source={{ uri: image }} />
      </ContainerImageProduct>

      <ContainerProductDescription>
        <ProductName>{name}</ProductName>
        <ProductPrice>R$ {newPrice}</ProductPrice>
      </ContainerProductDescription>
    </Container>
  );
}
