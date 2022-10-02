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
  return (
    <Container {...rest}>
      <ContainerImageProduct>
        <ImageProduct source={{ uri: data.image }} />
      </ContainerImageProduct>

      <ContainerProductDescription>
        <ProductName>{data.name}</ProductName>
        <ProductPrice>R$ {data.price}</ProductPrice>
      </ContainerProductDescription>
    </Container>
  );
}
