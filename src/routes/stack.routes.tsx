import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useTheme } from 'styled-components';
import { Platform } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { Dashboard } from '../screens/Dashboard';

import { Register } from '../screens/Register';
import { Products } from '../screens/Products';
import { ProductDetail } from '../screens/ProducDetail';

const { Navigator, Screen } = createNativeStackNavigator();

export function StackRoutes() {
  const theme = useTheme();
  return (
    <Navigator
      initialRouteName="DashBoard"
      screenOptions={{ headerShown: false }}
    >
      <Screen name="Register" component={Register} />
      <Screen name="Products" component={Products} />
      <Screen name="Product" component={ProductDetail} />
      <Screen name="DashBoard" component={Dashboard} />
    </Navigator>
  );
}
