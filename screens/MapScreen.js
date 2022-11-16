import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import MapView, { Marker } from 'react-native-maps';
import Header from '../components/Header';
import ItemSeparatorComponent from '../components/ItemSeparatorComponent';
import MapButtons from '../components/MapButtons';
import useStatusBar from '../hooks/useStatusBar';
import * as Location from 'expo-location';
import { useState } from 'react';
import { useEffect } from 'react';

const MapScreen = () => {
  useStatusBar('light-content');
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let { coords } = await Location.getCurrentPositionAsync({});
      setLocation(coords);
    })();
  }, [2000]);

  if (errorMsg) {
    console.log(errorMsg);
  } else if (location) {
    console.log(location);
  }

  return (
    <View className="flex-1 bg-black">
      <StatusBar style="light" />
      <View className=" z-50 mt-14 pt-1">
        <Header
          title="Map"
          textColor="white"
          name="settings-sharp"
          color="#343433"
          disabled={false}
          opacity={100}
          iconColor="white"
        />
        <ItemSeparatorComponent color="#222" />
      </View>
      <MapView
        initialRegion={{
          latitude: location ? location.latitude : 0,
          longitude: location ? location.longitude : 0,
          // latitudeDelta: 0.0922,
          // longitudeDelta: 0.0421,
        }}
        style={{ flex: 1 }}
      />
      <Marker
        coordinate={{
          latitude: location ? location.latitude : 0,
          longitude: location ? location.longitude : 0,
        }}
      />
      <MapButtons />
    </View>
  );
};

export default MapScreen;
