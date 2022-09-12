import React, { useState } from 'react';
import { Modal, Keyboard, Alert } from 'react-native';
import { products } from '../../utils/products';
import { FlatList } from 'react-native';
import { CardProducts } from '../../components/CardProducts';
import { CategorySelect } from '../CategorySelect';
import {
  ButtonPrint,
  Container,
  ContainerLogo,
  ContainerPrint,
  ContainerProducts,
  ProductsList,
  ContainerTitle,
  Header,
  Input,
  Logo,
  Page,
  Slogan,
  Title,
} from './styles';
//gerar pdf
import { printToFileAsync } from 'expo-print';
import { shareAsync } from 'expo-sharing';
import { CategorySelectButton } from '../../components/CategorySelectButton';

interface Props {
  image: string;
  name: string;
  price: number;
  id: string;
}

export function Dashboard() {
  //   let [content, setConteny] = useState<Props[]>([]);
  //   const html = `
  //   <html>
  //     <body>
  //       <p>${content}</p>
  //     </body>
  //   </html>
  //   `;
  //   let generetePdf = async () => {
  //     const file = await printToFileAsync({
  //       html: html,
  //       base64: false,
  //     });

  //     await shareAsync(file.uri);
  //   };
  const [cagoryModalOpen, setCagoryModalOpen] = useState(false);
  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria',
  });

  function handleOpenSelectCategoryModal() {
    setCagoryModalOpen(true);
  }

  function handleCloseSelectCategoryModal() {
    setCagoryModalOpen(false);
  }

  return (
    <Container>
      <Header>
        <ContainerLogo>
          <Logo source={require('../../images/logo_baoba.png')} />
        </ContainerLogo>

        <ContainerTitle>
          <Title>Clube Baobá</Title>
          <Slogan>Um clube de ofertas, sorteios e saúde</Slogan>
          <Page>Catálogo de Produtos</Page>
        </ContainerTitle>
      </Header>

      <CategorySelectButton
        onPress={handleOpenSelectCategoryModal}
        title={category.name}
      />

      {/* <ProductsList
          data={products}
          numColumns={2}
          renderItem={({ item }) => (
            <CardProducts
              image={item.image}
              name={item.name}
              price={item.price}
            />
          )}
        /> */}
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
        renderItem={({ item }) => (
          <CardProducts
            image={item.image}
            name={item.name}
            price={item.price}
          />
        )}
        showsVerticalScrollIndicator={false}
      />

      {/* <ContainerPrint>
        <Input
          value={name}
          placeholder="Name"
          onChangeText={(value) => setName(value)}
        />
        <ButtonPrint title="Generate PDF" onPress={generetePdf} />
      </ContainerPrint> */}

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
