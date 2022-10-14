import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppNavigator from './navigation/AppNavigator';
import { useFonts } from 'expo-font';
import OnboardingScreen from './screens/OnboardingScreen';
import AuthNavigator from './navigation/AuthNavigator';
import { useEffect, useState } from 'react';
import { auth } from './firebase';
import HomeNavigator from './navigation/HomeNavigator';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { OverlayProvider } from 'stream-chat-expo';
import { StreamChat } from 'stream-chat';

const client = StreamChat.getInstance(API_KEY);
const API_KEY = 'ug6wjthurcst';

const Stack = createNativeStackNavigator();

const ref = createNavigationContainerRef();

export default function App() {
  const [routeName, setRouteName] = useState();
  const [loaded] = useFonts({
    Montserrat: require('./assets/fonts/Montserrat-Regular.ttf'),
  });
  if (!loaded) {
    return null;
  }

  return (
    <View className="flex-1">
      <NavigationContainer
        ref={ref}
        onReady={() => {
          setRouteName(ref.getCurrentRoute().name);
        }}
        onStateChange={async () => {
          const previousRouteName = routeName;
          const currentRouteName = ref.getCurrentRoute().name;
          setRouteName(currentRouteName);
        }}
      >
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {!auth.user ? (
            <Stack.Screen name="Feed" component={AuthNavigator} />
          ) : (
            <Stack.Screen
              name="HomeFeed"
              component={HomeNavigator}
              routeName={routeName}
            />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
