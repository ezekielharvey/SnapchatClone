import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput,
  StyleSheet,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useFonts } from 'expo-font';
import { auth, db, usersCollection } from '../firebase';

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [imageURL, setImageURL] = useState('');

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        const uid = userCredentials.user.uid;
        const data = {
          id: uid,
          fullName,
          email,
          password,
        };
        const usersRef = usersCollection;
        usersRef
          .doc(user.email)
          .set(data)
          .then(() => {
            navigation.navigate('App', { user: data });
          })
          .catch(error => {
            alert(error);
          });
        user.updateProfile({
          displayName: fullName,
        });
        console.log(user.fullName);
      })
      .catch(error => alert(error.message));
  };
  const [loaded] = useFonts({
    Montserrat: require('../assets/fonts/Montserrat-Regular.ttf'),
  });
  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaView className="bg-white flex-1">
      <View className="top-4 left-4">
        <TouchableOpacity onPress={() => navigation.navigate('Onboarding')}>
          <Ionicons name="chevron-back" size={35} color="#21AEFF" />
        </TouchableOpacity>
      </View>
      <KeyboardAvoidingView>
        <View className="items-center top-10">
          <Text className="text-xl">What's your email?</Text>
        </View>

        <View className="self-center top-20 w-3/4">
          <View className="mb-4">
            <Text className="text-gray-400 text-xs font-bold mb-1">FULL NAME</Text>
            <TextInput
              className="w-full border-b-2 border-gray-200 py-2"
              value={fullName}
              onChangeText={text => setFullName(text)}
              autoCapitalize={false}
              spellCheck={false}
              autoCorrect={false}
            />
          </View>
          <View className="mb-4">
            <Text className="text-gray-400 text-xs font-bold mb-1">EMAIL</Text>
            <TextInput
              className="w-full border-b-2 border-gray-200 py-2"
              value={email}
              onChangeText={text => setEmail(text)}
              autoCapitalize={false}
              spellCheck={false}
              autoCorrect={false}

            />
          </View>
          <View>
            <Text className="text-gray-400 text-xs font-bold mb-1">
              PASSWORD
            </Text>
            <TextInput
              className="w-full border-b-2 border-gray-200 py-2"
              value={password}
              onChangeText={text => setPassword(text)}
              secureTextEntry
            />
          </View>
          <View className="mt-2">
            <Text className="text-gray-500">
              By tapping Sign Up {'&'} Accept, you acknowledge that you have
              read <Text className="text-[#21AEFF]">Privacy Policy</Text> and
              agree to the{' '}
              <Text onPressIn={styles.textTouch} className="text-[#21AEFF]">
                Terms of Service
              </Text>
              .
            </Text>
          </View>
          <View className="items-center mt-40">
            <TouchableOpacity
              onPress={handleSignUp}
              className="bg-[#21AEFF] w-3/4 items-center rounded-full"
            >
              <Text className="text-white p-3 text-lg font-bold">
                Sign Up {'&'} Accept
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textTouch: {
    opacity: 0.5,
  },
});

export default RegisterScreen;
