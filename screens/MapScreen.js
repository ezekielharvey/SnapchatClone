import React from 'react';
import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import MapView from 'react-native-maps';
import Header from '../components/Header';
import ItemSeparatorComponent from '../components/ItemSeparatorComponent';

const MapScreen = () => {
  return (
    <View className="flex-1 bg-black">
      <StatusBar style="light" />
      <View className=' z-50 mt-14 pt-1'>
        <Header
          title="Map"
          textColor="white"
          name="settings-sharp"
          color="#343433"
          disabled={false}
          opacity={100}
          iconColor="white"
        />
        <ItemSeparatorComponent color='#222'/>
      </View>
      <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={{ flex: 1 }}
      />
    </View>
  );
};

export default MapScreen;
