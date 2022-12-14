import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components';
import { Container, IconImage, Title } from './styles';

interface Props extends RectButtonProps {
  title: string;
  color?: string;
  onPress: () => void;
  light?: boolean;
  icon?: string;
}

export function Button({ title, color, light, icon, onPress, ...rest }: Props) {
  const theme = useTheme();
  return (
    <Container
      color={color ? color : theme.colors.primary}
      onPress={onPress}
      {...rest}
    >
      {/* {icon !== '' ? <IconImage source={require(`../../assets/${icon}`)} />} */}
      <Title light={light}>{title}</Title>
    </Container>
  );
}
