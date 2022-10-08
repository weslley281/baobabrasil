import React, { useState } from 'react';
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from 'react-native';
import { Button } from '../../components/Button';

import { useTheme } from 'styled-components';

import {
  Container,
  ContainerForm,
  Form,
  Header,
  Input,
  TextInputMasked,
  Title,
} from './styles';

import { api } from '../../services/api';
import { useNavigation } from '@react-navigation/core';

interface FormData {
  name: string;
  phone: string;
  email: string;
  cpf: string;
  password: string;
  birthday: Date;
}

export function Register() {
  const navigation: any = useNavigation();
  const [date, setDate] = useState('');
  const [cpf, setCpf] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const theme = useTheme();
  const [sucess, setSucess] = useState(false);

  async function handleRegister() {
    setSucess(true);

    try {
      const obj = {
        name: name,
        phone: phone,
        date: date,
        email: email,
        cpf: cpf,
        password: password,
      };

      await api.post('clients/save_clients.php', obj);

      setName('');
      setPhone('');
      setDate('');
      setEmail('');
      setCpf('');
      setPassword('');
    } catch (error) {
      Alert.alert('Ops', 'Alguma coisa deu errado, tente novamente.');
      setSucess(false);
    }
  }

  return (
    <KeyboardAvoidingView behavior="height" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Header>
            <Title>Registro</Title>
          </Header>

          <ContainerForm>
            <Form>
              <Input
                name="name"
                placeholder="Nome"
                onChangeText={(text) => setName(text)}
              />

              <TextInputMasked
                placeholder="Telefone"
                type={'cel-phone'}
                options={{
                  maskType: 'BRL',
                  withDDD: true,
                  dddMask: '(99) ',
                }}
                value={phone}
                onChangeText={(text) => setPhone(text)}
              />

              <TextInputMasked
                placeholder="CPF"
                type={'cpf'}
                value={cpf}
                onChangeText={(text) => setCpf(text)}
              />

              <TextInputMasked
                placeholder="Data de Aniversário"
                type={'datetime'}
                options={{
                  format: 'DD/MM/YYYY',
                }}
                value={date}
                onChangeText={(text) => console.log(text)}
              />

              <Input
                name="email"
                placeholder="Email"
                onChangeText={(text) => setEmail(text)}
              />

              <Input name="confirmPassword" placeholder="Repita a Senha" />

              <Button
                title="Enviar"
                light
                onPress={() => {
                  setSucess(true);
                  handleRegister().then(() => {
                    setTimeout(() => {
                      setSucess(false);
                    }, 1500);
                  });
                }}
              />
            </Form>
          </ContainerForm>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
