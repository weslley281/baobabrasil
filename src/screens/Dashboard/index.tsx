import React, { useState } from 'react';
import { CardProduct } from '../../components/CardProducts';
import {
  ButtonPrint,
  Container,
  ContainerLogo,
  ContainerPrint,
  ContainerProducts,
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

interface Props {
  products: any;
}

export function Dashboard() {
  let [name, setName] = useState();
  let [content, setConteny] = useState<Props[]>([]);
  const html = `
  <html>
    <body>
      <p>${content}</p>
    </body>
  </html>
  `;
  let generetePdf = async () => {
    const file = await printToFileAsync({
      html: html,
      base64: false,
    });

    await shareAsync(file.uri);
  };

  const products = (
    <ContainerProducts>
      <CardProduct
        image="https://baobabrasil.com.br/wp-content/uploads/2022/06/vinagrete-flocos.jpg"
        name="Vinagrete em Flocos"
        price={6.99}
      />
      <CardProduct
        image="https://baobabrasil.com.br/wp-content/uploads/2022/06/vinagrete-flocos.jpg"
        name="Vinagrete em Flocos"
        price={6.99}
      />
      <CardProduct
        image="https://baobabrasil.com.br/wp-content/uploads/2022/06/vinagrete-flocos.jpg"
        name="Vinagrete em Flocos"
        price={6.99}
      />
      <CardProduct
        image="https://baobabrasil.com.br/wp-content/uploads/2022/06/vinagrete-flocos.jpg"
        name="Vinagrete em Flocos"
        price={6.99}
      />
    </ContainerProducts>
  );

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

      {products}

      <ContainerPrint>
        <Input
          value={name}
          placeholder="Name"
          onChangeText={(value) => setName(value)}
        />
        <ButtonPrint title="Generate PDF" onPress={generetePdf} />
      </ContainerPrint>
    </Container>
  );
}
