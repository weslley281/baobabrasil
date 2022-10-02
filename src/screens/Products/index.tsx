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
import { useIsFocused } from '@react-navigation/native';

interface ProductsProps {
  id: number;
  name: string;
  descriptiom: string;
  price: number;
  category: number;
  image: string;
}

export function Products() {
  const theme = useTheme();
  const isFocused = useIsFocused();
  const [products, setProducts] = useState<ProductsProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [searchText, setSearchText] = useState('');
  const [cagoryModalOpen, setCagoryModalOpen] = useState(false);
  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categorias',
  });
  const [searchProducts, setSearchProducts] = useState(products);

  function handleOpenSelectCategoryModal() {
    setCagoryModalOpen(true);
  }

  function handleCloseSelectCategoryModal() {
    setCagoryModalOpen(false);
  }

  async function listProducts() {
    try {
      setIsLoading(true);
      const response = await api.get(`products/product_list.php`);

      if (products.length >= response.data.totalItems) return;

      setProducts([...products, ...response.data.resultado]);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    listProducts();
  }, []);

  useEffect(() => {
    listProducts();
  }, [isFocused]);

  //busca por texto
  useEffect(() => {
    if (searchText === '') {
      setSearchProducts(products);
    } else {
      setSearchProducts(
        products.filter(
          (item) =>
            item.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1
        )
      );
    }
  }, [searchText]);

  //busca por categoria
  useEffect(() => {
    if (category.key === 'category') {
      setProducts(products);
    } else if (category.name === 'todos') {
      listProducts();
    } else {
      setProducts(
        products.filter((item) => item.category.toLowerCase() === category.key)
      );
    }
  }, [category]);

  return (
    <Container>
      <Header>
        <Title>Produtos</Title>
      </Header>

      <Form>
        <CategorySelectButton
          onPress={handleOpenSelectCategoryModal}
          title={category.name}
        />
        <Input
          placeholder="Pesquise pelo nome"
          onChangeText={(text) => setSearchText(text)}
        />
      </Form>
      {searchText === '' ? (
        isLoading ? (
          <Load />
        ) : (
          <ProductsList
            data={products}
            numColumns={2}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <CardProducts data={item} onPress={() => {}} />
            )}
          />
        )
      ) : (
        <ProductsList
          data={searchProducts}
          numColumns={2}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CardProducts data={item} onPress={() => {}} />
          )}
        />
      )}

      <Modal visible={cagoryModalOpen}>
        <CategorySelect
          category={category}
          setCategory={setCategory}
          setSearchText={setSearchText}
          closeSelectCategory={handleCloseSelectCategoryModal}
        />
      </Modal>
    </Container>
  );
}
