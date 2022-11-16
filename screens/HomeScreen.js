import { Camera, CameraType, requestCameraPermissionsAsync } from 'expo-camera';
import React, { useState, useEffect, useRef } from 'react';
import {
  Button,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import * as MediaLibrary from 'expo-media-library';
import useStatusBar from '../hooks/useStatusBar';

export default function HomeScreen({ navigation }) {
  useStatusBar('light-content');
  const [type, setType] = useState(CameraType.back);
  const [hasCameraPermission, setHasCameraPermission] =
    Camera.useCameraPermissions();
  const [image, setImage] = useState(null);
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef) {
      try {
        const data = await cameraRef.current.takePictureAsync();
        console.log(data);
        setImage(data.uri);
      } catch (e) {
        console.log(e);
      }
    }
  };

  const saveImage = async () => {
    if (image) {
      try {
        await MediaLibrary.createAssetAsync(image);
        alert('Picture saved! 🎉');
        setImage(null);
      } catch (e) {
        console.log(e);
      }
    }
  };

  if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>;
  }

  function toggleCameraType() {
    setType(current =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
    console.log('Flipped camera');
  }

  return (
    <View style={styles.container}>
      {!image ? (
        <Camera
          style={styles.camera}
          type={type}
          flashMode={flash}
          ref={cameraRef}
        >
          <View className="flex-row space-x-2">
            <TouchableOpacity
              className="h-14 w-14 rounded-full mt-12 left-5 opacity-75"
              onPress={() => navigation.navigate('Profile')}
            >
              <Image
                source={{
                  uri: 'https://picsum.photos/600',
                }}
                className="flex-1 overflow-hidden rounded-full"
              />
            </TouchableOpacity>

            <TouchableOpacity className="h-14 w-14 rounded-full mt-12 left-5 items-center justify-center">
              <Ionicons name="search-outline" color="white" size={30} />
            </TouchableOpacity>
          </View>
          <View className="absolute mt-12 right-14 h-14 w-14 rounded-full items-center justify-center">
            <TouchableOpacity>
              {/* <Ionicons name="repeat-outline" size={40} color="white" /> */}
              <Ionicons name="person-add" color="white" size={32} />
            </TouchableOpacity>
          </View>
          <View className="absolute mt-12 right-1 h-14 w-14 rounded-full items-center justify-center">
            <TouchableOpacity onPress={toggleCameraType}>
              <Ionicons name="camera-reverse-outline" color="white" size={40} />
            </TouchableOpacity>
          </View>
          <View className="absolute mt-24 right-1 h-14 w-14 rounded-full items-center justify-center">
            <TouchableOpacity
              onPress={() => {
                setFlash(
                  flash === Camera.Constants.FlashMode.off
                    ? Camera.Constants.FlashMode.on
                    : Camera.Constants.FlashMode.off
                );
              }}
            >
              <Ionicons
                name={
                  flash === Camera.Constants.FlashMode.off
                    ? 'flash-outline'
                    : 'flash'
                }
                color="white"
                size={40}
              />
            </TouchableOpacity>
          </View>
        </Camera>
      ) : (
        <Image
          style={styles.camera}
          source={{
            uri: image,
          }}
        />
      )}
      {image ? (
        <>
          <View className="absolute z-50 bottom-5 left-20 rounded-full">
            <TouchableOpacity onPress={() => setImage(null)}>
              <View className="flex-row items-center">
                <Ionicons name="refresh-outline" size={25} color="white" />
                <Text className="text-xl text-white font-bold">Re-take</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View className="absolute z-50 bottom-5 right-20">
            <TouchableOpacity onPress={saveImage}>
              <View className="flex-row items-center">
                <Ionicons name="download-outline" size={25} color="white" />
                <Text className="text-xl text-white font-bold">Save</Text>
              </View>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <View className="absolute bottom-10 self-center z-50 flex-row">
          <TouchableOpacity
            className="h-24 w-24 rounded-full items-center justify-center z-50"
            onPress={() => console.log('Pressed')}
          >
            <Ionicons name="images-outline" color="white" size={35} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={takePicture}
            className="border-8 border-white h-24 w-24 rounded-full items-center justify-center z-50"
          />
          <TouchableOpacity
            className="h-24 w-24 rounded-full items-center justify-center z-50"
            onPress={() => console.log('Pressed')}
          >
            <Ionicons name="happy-outline" color="white" size={40} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    // flexWrap: 1,
    // flexDirection: 'row',
    position: 'absolute',
    backgroundColor: 'transparent',
    right: '5%',
    top: '5%',
  },
  button: {
    flex: 1,
    alignSelf: 'flex-start',
    flexDirection: 'row-reverse',
    // alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});
