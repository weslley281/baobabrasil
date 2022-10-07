import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useTheme } from 'styled-components';
import { Platform } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { Dashboard } from '../screens/Dashboard';

import { Register } from '../screens/Register';
import { Products } from '../screens/Products';

const { Navigator, Screen } = createNativeStackNavigator();

export function StackRoutes2() {
  const theme = useTheme();
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Register" component={Register} />
      <Screen name="Register" component={Register} />
      <Screen name="Register" component={Register} />
    </Navigator>
  );
}
