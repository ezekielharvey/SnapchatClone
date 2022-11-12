import React, { useCallback, useRef, useMemo, createRef } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { auth } from '../firebase';
import Ionicons from '@expo/vector-icons/Ionicons';

const BottomSheetComponent = ({ navigation }) => {
  // hooks
  const sheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ['25%', '50%', '75%'], []);

  // callbacks
  const handleSheetChange = useCallback(index => {
    console.log('handleSheetChange', index);
  }, []);
  const handleSnapPress = useCallback(index => {
    sheetRef.current?.snapToIndex(index);
  }, []);
  const handleClosePress = useCallback(() => {
    sheetRef.current?.close();
  }, []);

  const handleLogOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace('Login');
      })
      .catch(error => alert(error.message));
  };

  // render
  return (
    <View className="flex-1 w-screen">
      {/* <Button title="Snap To 90%" onPress={() => handleSnapPress(2)} />
      <Button title="Snap To 50%" onPress={() => handleSnapPress(1)} />
      <Button title="Snap To 25%" onPress={() => handleSnapPress(0)} />
      <Button title="Close" onPress={() => handleClosePress()} /> */}
      <View className="absolute z-50 top-10 left-4">
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Ionicons name="chevron-back-outline" color="#21AEFF" size={40} />
        </TouchableOpacity>
      </View>
      <ImageBackground
        source={{
          uri: 'https://picsum.photos/3000/3000',
        }}
        className="flex-1"
      />
      <BottomSheet
        ref={sheetRef}
        snapPoints={snapPoints}
        onChange={handleSheetChange}
      >
        <BottomSheetView>
          <View className="top-4 w-full items-center">
            <Text className="font-bold self-center">
              Email: {auth.currentUser?.email}
            </Text>
            <TouchableOpacity
              onPress={handleLogOut}
              className="bg-[#21AEFF] w-3/4 items-center rounded-full"
            >
              <Text className="text-white p-3 text-lg font-bold">Log Out</Text>
            </TouchableOpacity>
          </View>
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 200,
  },
});

export default BottomSheetComponent;
