import 'react-native-gesture-handler';
import 'react-native-get-random-values'
import { View } from 'react-native';
import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import AuthNavigator from './navigation/AuthNavigator';
import { useState } from 'react';
import { auth } from './firebase';
import HomeNavigator from './navigation/HomeNavigator';


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
