import React from 'react';
import { View, Text } from 'react-native';

import ChatScreen from '../screens/ChatScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MessagesScreen from '../screens/MessagesScreen';
import {CardStyleInterpolators, createStackNavigator} from '@react-navigation/stack'
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

const Stack = createStackNavigator();

const ChatNavigator = (props) => {
  const hide = props.routeName != "Messages"
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Chat"
    >
      <Stack.Screen component={ChatScreen} name="Chat" />
      <Stack.Screen component={MessagesScreen} name="Messages" />
      <Stack.Screen component={OnboardingScreen} name="Onboarding" />
    </Stack.Navigator>
  );
};

export default ChatNavigator;
