import React, { useState } from 'react';
import { Alert, KeyboardAvoidingView, Platform } from 'react-native';
import { Button } from '../../components/Button';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { useTheme } from 'styled-components';

import {
  Container,
  ContainerForm,
  Form,
  Header,
  Input,
  Label,
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

  function isValidCPF(cpf) {
    if (typeof cpf !== 'string') return false;
    cpf = cpf.replace(/[\s.-]*/gim, '');
    if (
      !cpf ||
      cpf.length != 11 ||
      cpf == '00000000000' ||
      cpf == '11111111111' ||
      cpf == '22222222222' ||
      cpf == '33333333333' ||
      cpf == '44444444444' ||
      cpf == '55555555555' ||
      cpf == '66666666666' ||
      cpf == '77777777777' ||
      cpf == '88888888888' ||
      cpf == '99999999999'
    ) {
      return false;
    }
    var soma = 0;
    var resto;
    for (var i = 1; i <= 9; i++)
      soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
    resto = (soma * 10) % 11;
    if (resto == 10 || resto == 11) resto = 0;
    if (resto != parseInt(cpf.substring(9, 10))) return false;
    soma = 0;
    for (var i = 1; i <= 10; i++)
      soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
    resto = (soma * 10) % 11;
    if (resto == 10 || resto == 11) resto = 0;
    if (resto != parseInt(cpf.substring(10, 11))) return false;
    return true;
  }

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
  );
}
