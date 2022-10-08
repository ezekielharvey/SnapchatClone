import React from 'react';
import { View, Text } from 'react-native';

import ChatScreen from '../screens/ChatScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const ChatNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Chat"
    >
      <Stack.Screen component={ChatScreen} name="Chat" />
      <Stack.Screen component={OnboardingScreen} name="Onboarding" />
    </Stack.Navigator>
  );
};

export default ChatNavigator;
