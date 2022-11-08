import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ChatScreen from '../screens/ChatScreen';
import StoriesScreen from '../screens/StoriesScreen';
import DiscoverScreen from '../screens/DiscoverScreen';
import MapScreen from '../screens/MapScreen';
import Ionicons from '@expo/vector-icons/Ionicons';
import ChatNavigator from './ChatNavigator';
import HomeNavigator from './HomeNavigator';

const Tab = createBottomTabNavigator();

const AppNavigator = (props) => {
  const hide = props.routeName != "Messages"
  return (
    <Tab.Navigator
      initialRouteName="HomeNav"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size }) => {
          let iconName;
          let color;

                if (route.name === 'HomeNav') {
                  iconName = focused ? 'camera-outline' : 'camera-outline';
                  color = focused ? '#FFFC00' : '#6f7173'
                } else if (route.name === 'ChatNav') {
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
      <Tab.Screen name="ChatNav" component={ChatNavigator} />
      <Tab.Screen name="HomeNav" component={HomeNavigator} />
      <Tab.Screen name="Stories" component={StoriesScreen} />
      <Tab.Screen name="Discover" component={DiscoverScreen} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
