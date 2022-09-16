import React from 'react';
import { ButtonEye, Container, Icon, InputArea, TextPassword } from './styles';

export class InputPassWord extends React.Component {
  render() {
    return (
      <Container>
        <InputArea>
          <TextPassword />

          <ButtonEye>
            <Icon size={20} name="eye" />
          </ButtonEye>
        </InputArea>
      </Container>
    );
  }
}
