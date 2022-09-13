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
  const name2 = name.toLowerCase();
  const nameFormated = name2[0].toLocaleUpperCase() + name2.substring(1);

  return (
    <Container>
      <ContainerImageProduct>
        <ImageProduct source={{ uri: image }} />
      </ContainerImageProduct>

      <ContainerProductDescription>
        <ProductName>{nameFormated}</ProductName>
        <ProductPrice>R$ {newPrice}</ProductPrice>
      </ContainerProductDescription>
    </Container>
  );
}
