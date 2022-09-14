import React, { useEffect, useState } from 'react';

import { FlatList, ScrollView } from 'react-native';
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
  Logo,
  Page,
  Slogan,
  Title,
  ScrollViewProducts,
  Form,
  Input,
} from './styles';
//gerar pdf
import { printToFileAsync } from 'expo-print';
import { shareAsync } from 'expo-sharing';
import { CategorySelectButton } from '../../components/CategorySelectButton';

import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button } from '../../components/Button';

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

  return (
    <Container>
      <Header>
        <ContainerLogo>
          <Logo source={require('../../images/logo_baoba.png')} />
        </ContainerLogo>

        <ContainerTitle>
          <Title>Clube Baobá</Title>
          <Slogan>Um clube de ofertas, sorteios e saúde</Slogan>
          <Page>Faça o seu Cadastro</Page>
        </ContainerTitle>
      </Header>

      <Form>
        <Input placeholder="Nome" />
        <Input placeholder="Telefone" />
        <Input placeholder="Email" />
        <Input placeholder="CPF" />
        <Button title="Enviar" onPress={() => {}} />
      </Form>

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
