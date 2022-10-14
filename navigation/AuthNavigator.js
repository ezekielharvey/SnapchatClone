import { View, Text } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from '../screens/OnboardingScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ForgotPassword from '../screens/ForgotPassword';
import AppNavigator from './AppNavigator';
import BirthdayScreen from '../screens/BirthdayScreen';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Onboading"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen component={OnboardingScreen} name="Onboarding" />
      <Stack.Screen component={LoginScreen} name="Login" />
      <Stack.Screen component={ForgotPassword} name="Forgot" />
      <Stack.Screen component={AppNavigator} name="App" />
      <Stack.Screen component={RegisterScreen} name="Register" />
      <Stack.Screen component={BirthdayScreen} name="Birthday" />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
