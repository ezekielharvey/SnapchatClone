import React from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import useStatusBar from '../hooks/useStatusBar';

const OnboardingScreen = ({ navigation }) => {
  useStatusBar('dark-content');
  return (
    <View className="flex-1 bg-[#F6F90E] justify-center">
      <View className="items-center justify-center bottom-44">
        <Image
          source={require('../assets/snapchat.png')}
          className="h-24 w-24"
          style={{ resizeMode: 'contain' }}
        />
      </View>
      <View className="absolute bottom-0">
        <TouchableHighlight
          underlayColor="white"
          className="h-20 w-screen bg-[#E02657] items-center justify-center"
          onPress={() => navigation.navigate('Login')}
        >
          <Text className="text-white font-bold text-2xl">LOG IN</Text>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor="white"
          className="h-20 w-screen bg-[#23B6F9] items-center justify-center"
          onPress={() => navigation.navigate('Register')}
        >
          <Text className="text-white font-bold text-2xl">SIGN UP</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

export default OnboardingScreen;
