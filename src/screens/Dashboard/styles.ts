import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { FlatList, FlatListProps } from 'react-native';
import {
  getBottomSpace,
  getStatusBarHeight,
} from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(200)}px;
  background-color: ${({ theme }) => theme.colors.primary};
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
  /* width: 100%;
  align-items: center;
  background-color: blue; */
`;

export const ProductsList = styled(FlatList).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    marginTop: 15,
    marginLeft: 12,
    paddingBottom: getBottomSpace(),
    alignItems: 'center',
    justifyContent: 'center',
  },
})``;

export const ContainerPrint = styled.View`
  width: 100%;
  height: 80px;
  align-items: center;
  justify-content: center;
`;

export const ButtonPrint = styled.Button`
  color: ${({ theme }) => theme.colors.primary};
`;

export const ScrollViewProducts = styled.ScrollView``;

export const Form = styled.View`
  width: 100%;
  padding: 24px;
  justify-content: space-between;
`;

export const Input = styled.TextInput`
  margin-top: 10px;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  width: 100%;
  height: ${RFValue(50)}px;
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.text_dark};
  padding: 3px 10px 3px 10px;
  margin-bottom: 5px;
`;

export const Ordination = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  height: ${RFValue(40)}px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;
