import React, { useEffect, useState, useCallback } from 'react';
import {
  Container,
  Form,
  Header,
  Input,
  LoadContainer,
  Ordination,
  Title,
} from './styles';
import { ActivityIndicator, FlatList, Modal } from 'react-native';
// import { products } from '../../utils/products';
import { CategorySelectButton } from '../../components/CategorySelectButton';
import { CardProducts } from '../../components/CardProducts';
import { CategorySelect } from '../CategorySelect';
import api from '../../services/api';
import { useFocusEffect } from '@react-navigation/native';
import { useTheme } from 'styled-components';
import axios from 'axios';

export function Products() {
  const theme = useTheme();
  const [products, setProducts] = useState<any>([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const [searchText, setSearchText] = useState('');
  const [cagoryModalOpen, setCagoryModalOpen] = useState(false);
  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categorias',
  });
  const [listProducts, setListProducts] = useState(products);

  async function loadData() {
    // axios
    //   .get('https://baobabrasil.com.br/apiBaoba/products/product_list.php')
    //   .then((response) => {
    //     this.setProducts({ data: response.data });
    //     setIsLoading(false);
    //   })
    //   .catch(() => {
    //     console.log('Error retrieving data');
    //   });

    try {
      setIsLoading(true);
      const response = await api.get(`products/product_list.php`);

      if (products.length >= response.data.totalItems) return;

      setProducts([...products, ...response.data.resultado]);
      setPage(page + 1);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  //fetches transactions at the moment the application loads
  useEffect(() => {
    loadData();
  }, []);

  //fetches transactions when the application is loaded
  useFocusEffect(
    useCallback(() => {
      loadData();
    }, [])
  );

  function handleOpenSelectCategoryModal() {
    setCagoryModalOpen(true);
  }

  function handleCloseSelectCategoryModal() {
    setCagoryModalOpen(false);
  }

  const handleOrderList = () => {
    let newListProducts = [...products];

    newListProducts.sort((a, b) =>
      a.name > b.name ? 1 : b.name > a.name ? -1 : 0
    );

    setListProducts(newListProducts);
  };

  useEffect(() => {
    console.log(category.key);
    if (category.key === 'category') {
      setListProducts(products);
      console.log('primeira execução');
    } else if (category.name === 'todos') {
      setListProducts(products);
    } else {
      setListProducts(
        products.filter((item) => item.category.toLowerCase() === category.key)
      );
    }
  }, [category]);

  //busca por texto
  useEffect(() => {
    if (searchText === '') {
      setListProducts(products);
    } else {
      setListProducts(
        products.filter(
          (item) =>
            item.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1
        )
      );
    }
  }, [searchText]);

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

        <Ordination onPress={handleOrderList}>
          <Title>Exibir Todos</Title>
        </Ordination>
      </Form>

      {isLoading ? (
        <LoadContainer>
          <ActivityIndicator color={theme.colors.primary} size="large" />
        </LoadContainer>
      ) : (
        <>
          <FlatList
            data={listProducts}
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
            renderItem={({ item }) => (
              <CardProducts
                image={item.image}
                name={item.name}
                price={item.price}
              />
            )}
            showsVerticalScrollIndicator={false}
          />
        </>
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
