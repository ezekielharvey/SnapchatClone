import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { auth } from '../firebase';
import useStatusBar from '../hooks/useStatusBar';

const ForgotPassword = ({ navigation }) => {
  useStatusBar('dark-content');
  const [email, setEmail] = useState('');

  const resetPassword = () => {
    auth.sendPasswordResetEmail(email);
    navigation.navigate('Login');
  };

  return (
    <SafeAreaView>
      <View className="top-4 left-4">
        <TouchableOpacity onPress={() => navigation.navigate('Onboarding')}>
          <Ionicons name="chevron-back" size={35} color="#21AEFF" />
        </TouchableOpacity>
      </View>
      <View className="self-center mt-24">
        <Text className="font-bold text-xl">Enter Confirmation Code</Text>
      </View>
      <View className="self-center top-20 w-3/4">
        <View className="mb-4">
          <Text className="text-gray-400 text-xs font-bold mb-1">EMAIL</Text>
          <TextInput
            className="w-full border-b-2 border-gray-200 py-2"
            onChangeText={text => setEmail(text)}
            value={email}
            autoCapitalize={false}
            spellCheck={false}
            autoCorrect={false}
            returnKeyType="done"
          />
        </View>
        <View className="self-center w-full">
          <TouchableOpacity
            className="bg-[#21AEFF] w-3/4 items-center rounded-full self-center"
            onPress={resetPassword}
          >
            <Text className="p-3 text-lg font-bold text-white">Send</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ForgotPassword;
