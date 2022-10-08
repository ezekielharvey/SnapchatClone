import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppNavigator from './navigation/AppNavigator';
import { useFonts } from 'expo-font';
import OnboardingScreen from './screens/OnboardingScreen';
import AuthNavigator from './navigation/AuthNavigator';
import { useEffect, useState } from 'react';
import { auth } from './firebase';
import HomeNavigator from './navigation/HomeNavigator';

const Stack = createNativeStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    Montserrat: require('./assets/fonts/Montserrat-Regular.ttf'),
  });
  if (!loaded) {
    return null;
  }

  return (
    <View className="flex-1">
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {!auth.user ? (
            <Stack.Screen name="Feed" component={AuthNavigator} />
          ) : (
            <Stack.Screen name="HomeFeed" component={HomeNavigator} />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
