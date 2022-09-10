import React, { useState } from 'react';
import uuid from 'react-native-uuid';
import { FlatList, ScrollView } from 'react-native';
import { CardProducts } from '../../components/CardProducts';
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
  ScrollViewProducts,
} from './styles';
//gerar pdf
import { printToFileAsync } from 'expo-print';
import { shareAsync } from 'expo-sharing';

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
  const products = [
    {
      id: uuid.v4(),
      image:
        'https://baobabrasil.com.br/wp-content/uploads/2022/06/vinagrete-flocos.jpg',
      name: 'Vinagrete em Flocos',
      price: 6.99,
    },
    {
      id: uuid.v4(),
      image:
        'https://baobabrasil.com.br/wp-content/uploads/2022/06/ameixa-com-caroco.jpg',
      name: 'Ameixa Seca com Caroço',
      price: 7.99,
    },
    {
      id: uuid.v4(),
      image:
        'https://baobabrasil.com.br/wp-content/uploads/2022/06/farelo-de-aveia.jpg',
      name: 'Farelo de Aveia',
      price: 1.49,
    },
    {
      id: uuid.v4(),
      image:
        'https://baobabrasil.com.br/wp-content/uploads/2022/06/anis-estrelado.jpg',
      name: 'Anis Estrelados',
      price: 27.99,
    },
    {
      id: uuid.v4(),
      image:
        'https://baobabrasil.com.br/wp-content/uploads/2022/06/anis-estrelado.jpg',
      name: 'Anis Estrelados',
      price: 27.99,
    },
    {
      id: uuid.v4(),
      image:
        'https://baobabrasil.com.br/wp-content/uploads/2022/06/anis-estrelado.jpg',
      name: 'Anis Estrelados',
      price: 27.99,
    },
  ];

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

      <ContainerProducts>
        <ScrollViewProducts
          contentContainerStyle={{
            flexDirection: 'row',
            flexWrap: 'wrap',
          }}
        >
          {products.map((product) => {
            return (
              <CardProducts
                image={product.image}
                name={product.name}
                price={product.price}
              />
            );
          })}
        </ScrollViewProducts>

        {/* <FlatList
          data={products}
          numColumns={2}
          horizontal={false}
          columnWrapperStyle={{
            flex: 1,
            justifyContent: 'space-around',
            marginBottom: 15,
          }}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <CardProducts
              image={item.image}
              name={item.name}
              price={item.price}
            />
          )}
        /> */}
      </ContainerProducts>

      {/* <ContainerPrint>
        <Input
          value={name}
          placeholder="Name"
          onChangeText={(value) => setName(value)}
        />
        <ButtonPrint title="Generate PDF" onPress={generetePdf} />
      </ContainerPrint> */}
    </Container>
  );
}
