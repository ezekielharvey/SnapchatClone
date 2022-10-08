import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { auth } from '../firebase';

const ProfileScreen = ({ navigation }) => {
  const handleLogOut = () => {
    auth.signOut().then(() => {
      navigation.replace('Login');
    }).catch(error => alert(error.message))
  };

  return (
    <SafeAreaView className="items-center justify-center flex-1">
      <Text>Email: {auth.currentUser?.email}</Text>
      <View className="top-4 w-full items-center">
        <TouchableOpacity
          onPress={handleLogOut}
          className="bg-[#21AEFF] w-3/4 items-center rounded-full"
        >
          <Text className="text-white p-3 text-lg font-bold">Log Out</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;
