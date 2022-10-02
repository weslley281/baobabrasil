import React from 'react';
import { ButtonEye, Container, Icon, InputArea, TextPassword } from './styles';

interface Props {
  text: string;
  setPassword: () => void;
}
export function handleChange({ text, setPassword }: Props) {
  function handleChangeText(text: string) {
    setPassword(text);
  }
}

export class InputPassWord extends React.Component {
  render({ text, setPassword }: Props) {
    return (
      <Container>
        <InputArea>
          <TextPassword onChangeText={() => handleChangeText(text)} />

          <ButtonEye>
            <Icon size={20} name="eye" />
          </ButtonEye>
        </InputArea>
      </Container>
    );
  }
}
