import { Camera, CameraType } from 'expo-camera';
import { useState } from 'react';
import { Button, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';
import CameraButton from '../components/CameraButton';

export default function App() {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>
          Grant permission to allow camera usage!
        </Text>
        <Button onPress={requestPermission} title="Grant Permission" />
      </View>
    );
  }

  function toggleCameraType() {
    setType(current =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
    console.log('Flipped camera')
  }

  return (
    <View style={styles.container}>
      <CameraButton />
      <Camera style={styles.camera} type={type}>
        <View className='flex-row space-x-2'>
          <TouchableOpacity className='h-14 w-14 rounded-full mt-14 left-5 opacity-75'>
            <Image 
              source={{
                uri: 'https://picsum.photos/600'
              }}
              className='flex-1 overflow-hidden rounded-full'
            />
          </TouchableOpacity>

          <TouchableOpacity className='h-14 w-14 rounded-full mt-14 left-5 items-center justify-center'>
            <Ionicons name='search-outline' color='white' size={30} />
          </TouchableOpacity>
        </View>
        <View className='absolute mt-14 right-1 h-14 w-14 rounded-full items-center justify-center'>
          <TouchableOpacity onPress={toggleCameraType}>
            {/* <Ionicons name="repeat-outline" size={40} color="white" /> */}
            <Ionicons name='camera-reverse-outline' color='white' size={40} />
          </TouchableOpacity>
        </View>
      </Camera>
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
    top: '5%'
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
