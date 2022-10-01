import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import {
  Container,
  ContainerImageProduct,
  ContainerProductDescription,
  ImageProduct,
  ProductName,
  ProductPrice,
} from './styles';
import { ProductsProps } from '../../DTO/ProductsDTO';

interface Props extends RectButtonProps {
  data: ProductsProps;
}

export function CardProducts({ data, ...rest }: Props) {
  const newPrice = data.price.toString().replace('.', ',');
  const name2 = data.name.toLowerCase();
  const nameFormated = name2[0].toLocaleUpperCase() + name2.substring(1);

  return (
    <Container {...rest}>
      <ContainerImageProduct>
        <ImageProduct source={{ uri: data.image }} />
      </ContainerImageProduct>

      <ContainerProductDescription>
        <ProductName>{nameFormated}</ProductName>
        <ProductPrice>R$ {newPrice}</ProductPrice>
      </ContainerProductDescription>
    </Container>
  );
}
