import React, { useEffect, useState } from 'react';
import { Container, Form, Header, Input, Ordination, Title } from './styles';
import { FlatList, Modal } from 'react-native';
import { products } from '../../utils/products';
import { CategorySelectButton } from '../../components/CategorySelectButton';
import { CardProducts } from '../../components/CardProducts';
import { CategorySelect } from '../CategorySelect';

export function Products() {
  const [searchText, setSearchText] = useState('');
  const [cagoryModalOpen, setCagoryModalOpen] = useState(false);
  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categorias',
  });
  const [listProducts, setListProducts] = useState(products);

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
    if (category.name === 'category') {
      setListProducts(products);
    } else {
      setListProducts(
        products.filter((item) => item.category.toLowerCase() === category.key)
      );
    }
  }, [category]);

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
          <Title>Ordenar de A a Z</Title>
        </Ordination>
      </Form>

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

      <Modal visible={cagoryModalOpen}>
        <CategorySelect
          category={category}
          setCategory={setCategory}
          closeSelectCategory={handleCloseSelectCategoryModal}
        />
      </Modal>
    </Container>
  );
}
