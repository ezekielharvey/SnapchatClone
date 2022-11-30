import React from 'react';
import { View, Image } from 'react-native';
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
  const [mapRegion, setMapRegion] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync();
      setLocation(location);

      setMapRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0421,
        longitudeDelta: 0.0922,
      });
    })();
  }, []);

  if (errorMsg) {
    console.log(errorMsg);
  } else if (location) {
    console.log(location);
  }

  return (
    <View className="flex-1 bg-black">
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
      <MapView initialRegion={mapRegion} style={{ flex: 1 }}>
        <Marker coordinate={mapRegion} title='Me'>
          <View className='w-16 h-16 rounded-full items-center justify-center'>
            <View className='w-16 h-16 rounded-full bg-black z-50 opacity-70' />
            <Image 
              source={{
                uri: 'https://picsum.photos/600'
              }}
              className='h-14 w-14 rounded-full z-50 absolute'
            />
          </View>
        </Marker>
      </MapView>
      <MapButtons />
    </View>
  );
};

export default MapScreen;
