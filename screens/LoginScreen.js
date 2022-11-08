import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { auth } from '../firebase';
import { getDatabase, ref, onValue, set } from 'firebase/database';
import firebase from 'firebase';


const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.navigate('App');
      }
    });
    return unsubscribe;
  }, []);

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Logged in as:', user.email);
      })
      .catch(error => alert(error.message));
  };
  return (
    <SafeAreaView className="bg-white flex-1">
      <View className="top-4 left-4">
        <TouchableOpacity onPress={() => navigation.navigate('Onboarding')}>
          <Ionicons name="chevron-back" size={35} color="#21AEFF" />
        </TouchableOpacity>
      </View>
      <KeyboardAvoidingView>
        <View className="items-center top-10">
          <Text className="text-xl">Log In</Text>
        </View>
        <View className="self-center top-20 w-3/4">
          <View className="mb-4">
            <Text className="text-gray-400 text-xs font-bold mb-1">
              USERNAME OR EMAIL
            </Text>
            <TextInput
              className="w-full border-b-2 border-gray-200 py-2"
              onChangeText={text => setEmail(text)}
              value={email}
              autoCapitalize={false}
              spellCheck={false}
            />
          </View>
          <View>
            <Text className="text-gray-400 text-xs font-bold mb-1">
              PASSWORD
            </Text>
            <TextInput
              className="w-full border-b-2 border-gray-200 py-2"
              onChangeText={text => setPassword(text)}
              value={password}
              autoCapitalize={false}
              secureTextEntry
            />
          </View>
          <View className="mt-6 items-center">
            <TouchableOpacity onPress={() => navigation.navigate('Forgot')}>
              <Text className="text-[#21AEFF]">Forgot your password?</Text>
            </TouchableOpacity>
          </View>
          <View className="items-center mt-40">
            <TouchableOpacity
              onPress={handleLogin}
              className="bg-[#21AEFF] w-3/4 items-center rounded-full"
            >
              <Text className="text-white p-3 text-lg font-bold">Log In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;
