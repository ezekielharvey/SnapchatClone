import React from 'react';
import { View, Text } from 'react-native';

import HomeScreen from '../screens/HomeScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Home"
    >
      <Stack.Screen component={OnboardingScreen} name="Onboarding" />
      <Stack.Screen component={HomeScreen} name="Home" />
      <Stack.Screen component={ProfileScreen} name="Profile" />
    </Stack.Navigator>
  );
};

export default HomeNavigator;