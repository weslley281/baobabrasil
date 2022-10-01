import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { useTheme } from 'styled-components';
import { Platform } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { Dashboard } from '../screens/Dashboard';
import { Products } from '../screens/Products';
import { Register } from '../screens/Register';
import { ProductsTest } from '../screens/ProductsTest';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
  const theme = useTheme();
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.secondary,
        tabBarInactiveTintColor: theme.colors.text,
        tabBarLabelPosition: 'beside-icon',
        tabBarStyle: {
          height: 88,
          paddingVertical: Platform.OS === 'ios' ? 20 : 0,
        },
      }}
    >
      <Screen
        name="Teste"
        component={ProductsTest}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons
              name="emoji-food-beverage"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Screen
        name="Produtos"
        component={Products}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons
              name="emoji-food-beverage"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Screen
        name="Início"
        component={Dashboard}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
        }}
      />

      <Screen
        name="Registro"
        component={Register}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons
              name="supervised-user-circle"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Navigator>
  );
}
