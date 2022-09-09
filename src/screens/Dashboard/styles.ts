import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(200)}px;
  background-color: green;
`;

export const ContainerLogo = styled.View`
  width: 100%;
  height: ${RFValue(100)}px;
  align-items: center;
  justify-content: center;
  padding-top: 40px;
`;

export const Logo = styled.Image`
  width: ${RFValue(250)}px;
  height: ${RFValue(50)}px;
  border-radius: 10px;
`;

export const ContainerTitle = styled.View`
  width: 100%;
  height: ${RFValue(100)}px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.shape};
`;

export const Slogan = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(15)}px;
`;

export const Page = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.shape};
`;

export const ContainerProducts = styled.View`
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
