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
export function CardProduct({ image, name, price }: Props) {
  return (
    <Container>
      <ContainerImageProduct>
        <ImageProduct source={{ uri: image }} />
      </ContainerImageProduct>

      <ContainerProductDescription>
        <ProductName>{name}</ProductName>
        <ProductPrice>R$ {price}</ProductPrice>
      </ContainerProductDescription>
    </Container>
  );
}
