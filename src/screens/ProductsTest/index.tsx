import React, { useEffect, useState, useCallback } from 'react';
import {
  Container,
  Form,
  Header,
  Input,
  LoadContainer,
  Ordination,
  ProductsList,
  Title,
} from './styles';
import { ActivityIndicator, FlatList, Modal } from 'react-native';
// import { products } from '../../utils/products';
import { CategorySelectButton } from '../../components/CategorySelectButton';
import { CardProducts } from '../../components/CardProducts';
import { CategorySelect } from '../CategorySelect';
import { api } from '../../services/api';
import { useFocusEffect } from '@react-navigation/native';
import { useTheme } from 'styled-components';
import { Load } from '../../components/Load';

interface ProductsProps {
  id: number;
  name: string;
  descriptiom: string;
  price: number;
  category: number;
  image: string;
}

export function ProductsTest() {
  const theme = useTheme();
  const [products, setProducts] = useState<ProductsProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await api.get('/products/product_list.php');
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
    console.log(products);
  }, []);

  // useEffect(() => {
  //   api
  //     .get('/products/product_list.php')
  //     .then((response) => setProducts(response.data))
  //     .catch((err) => {
  //       console.error('ops! ocorreu um erro' + err);
  //     });
  // }, []);

  return (
    <Container>
      <Header>
        <Title>Produtos</Title>
      </Header>

      {loading ? (
        <Load />
      ) : (
        <FlatList
          data={products}
          numColumns={2}
          horizontal={false}
          columnWrapperStyle={{
            flex: 1,
            justifyContent: 'space-around',
            marginBottom: 15,
            paddingTop: 10,
            paddingLeft: 10,
          }}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <CardProducts data={item} />}
          showsVerticalScrollIndicator={false}
        />
      )}
    </Container>
  );
}
