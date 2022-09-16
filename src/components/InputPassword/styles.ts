import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ContainerIcon = styled.View``;

export const InputArea = styled.View`
  flex-direction: row;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 5px;
  height: ${RFValue(50)}px;
  align-items: center;
`;

export const TextPassword = styled.TextInput`
  margin-top: 10px;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  width: 85%;
  height: ${RFValue(50)}px;

  color: ${({ theme }) => theme.colors.text_dark};
  padding: 3px 10px 3px 10px;
  margin-bottom: 5px;
`;

export const Icon = styled(MaterialCommunityIcons)``;

export const ButtonEye = styled.TouchableOpacity`
  height: ${RFValue(50)}px;
  width: 15%;
  align-items: center;
  justify-content: center;
`;
