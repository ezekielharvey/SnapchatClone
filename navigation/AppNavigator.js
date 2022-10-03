import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import MessagesScreen from '../screens/ChatScreen';
import StoriesScreen from '../screens/StoriesScreen';
import DiscoverScreen from '../screens/DiscoverScreen';
import MapScreen from '../screens/MapScreen';
import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size }) => {
          let iconName;
          let color;

                if (route.name === 'Home') {
                  iconName = focused ? 'camera-outline' : 'camera-outline';
                  color = focused ? '#FFFC00' : '#6f7173'
                } else if (route.name === 'Chat') {
                  iconName = focused ? 'chatbox-outline' : 'chatbox-outline';
                  color = focused ? '#23B6FF' : '#6f7173'
                } else if (route.name === 'Map') {
                  iconName = focused ? 'location-outline' : 'location-outline';
                  color = focused ? '#39CA8E' : '#6f7173'
                } else if (route.name === 'Stories') {
                  iconName = focused ? 'people-outline' : 'people-outline';
                  color = focused ? '#CC4AFB' : '#6f7173'
                } else if (route.name === 'Discover') {
                  iconName = focused ? 'play-outline' : 'play-outline';
                  color = focused ? '#E21A33' : '#6f7173'
                }

                return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarStyle: { backgroundColor: '#000', borderTopColor:'transparent'},
        position: 'absolute',
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveBackgroundColor: 'transparent',
      })}
    >
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Chat" component={MessagesScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Stories" component={StoriesScreen} />
      <Tab.Screen name="Discover" component={DiscoverScreen} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
