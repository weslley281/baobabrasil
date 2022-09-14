import React, { useState } from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { Button } from '../../components/Button';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import DateTimePicker from '@react-native-community/datetimepicker';

import { Container, Form, Header, Input, Label, Title } from './styles';
import RNDateTimePicker from '@react-native-community/datetimepicker';

interface FormData {
  name: string;
  phone: string;
  email: string;
  cpf: string;
  password: string;
  birthday: Date;
}

export function Register() {
  const [date, setDate] = useState(new Date());

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

  const changeDate = (event, selectedDate) => {
    if (event?.type === 'dismissed') {
      setDate(date);
      return;
    }
    setDate(selectedDate);
  };

  return (
    <Container>
      <Header>
        <Title>Registro</Title>
      </Header>
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
          <Input name="phone" placeholder="Telefone" />
          <Input name="email" placeholder="Email" />
          <Input name="cpf" placeholder="CPF" />
          <Input name="password" placeholder="Senha" />

          <Input name="confirmPassword" placeholder="Repita a Senha" />

          <Label>Data de Aniversário</Label>

          <RNDateTimePicker
            style={{
              height: 100,
            }}
            locale="pt-BR"
            themeVariant="light"
            minimumDate={new Date(1950, 0, 1)}
            maximumDate={new Date(2300, 10, 20)}
            value={date}
            mode="date"
            onChange={changeDate}
          />

          <Button title="Enviar" onPress={handleSubmit(handleRegister)} />
        </Form>
      </KeyboardAvoidingView>
    </Container>
  );
}
