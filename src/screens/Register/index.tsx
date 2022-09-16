import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
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

interface FormData {
  name: string;
  phone: string;
  email: string;
  cpf: string;
  password: string;
  birthday: Date;
}

export function Register() {
  const [date, setDate] = useState(new Date().toString());
  const [cpf, setCpf] = useState('000.000.000-00');
  const [phone, setPhone] = useState('');
  const theme = useTheme();

  const schema = yup.object().shape({
    name: yup.string().required('Nome é obrigatório'),
    email: yup.string().email().required(),
    phone: yup
      .string()
      .required('Telefone obrigatório')
      .min(8, 'Telefone precisa ter no mínimo 9 caracteres'),
    password: yup
      .string()
      .notRequired()
      .min(6, 'A senha deve ter pelo menos 6 caracteres'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Passwords must match'),
    cpf: yup
      .string()
      .required()
      .test('test-invalid-cpf', 'cpf inválido', (cpf) => isValidCPF(cpf)),
  });

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function handleRegister(form: FormData) {
    const newClient = {
      name: form.name,
      phone: form.phone,
      email: form.email,
      cpf: form.cpf,
      password: form.password,
      birthday: date,
    };
  }

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

  return (
    <Container>
      <Header>
        <Title>Registro</Title>
      </Header>

      <ContainerForm>
        <KeyboardAvoidingView
          contentContainerStyle={{
            bottom: 0,
            left: 0,
            flexDirection: 'row',
            padding: 10,
            alignContent: 'center',
            justifyContent: 'space-between',
            borderTopColor: '#FFF',
            borderTopWidth: 1,
          }}
          behavior="position"
          enabled
        >
          <Form>
            <Input name="name" placeholder="Nome" />

            <Label>Telefone</Label>
            <TextInputMasked
              type={'cel-phone'}
              options={{
                maskType: 'BRL',
                withDDD: true,
                dddMask: '(99) ',
              }}
              value={phone}
              onChangeText={(text) => setPhone(text)}
            />

            <Label>CPF:</Label>
            <TextInputMasked
              type={'cpf'}
              value={cpf}
              onChangeText={(text) => setCpf(text)}
            />

            <Label>Data de Aniversário:</Label>
            <TextInputMasked
              type={'datetime'}
              options={{
                format: 'DD/MM/YYYY',
              }}
              value={date}
              onChangeText={(text) => console.log(text)}
            />

            <Input name="email" placeholder="Email" />

            <Input name="password" placeholder="Senha" />

            <Input name="confirmPassword" placeholder="Repita a Senha" />

            <Button title="Enviar" onPress={handleSubmit(handleRegister)} />
          </Form>
        </KeyboardAvoidingView>
      </ContainerForm>
    </Container>
  );
}
