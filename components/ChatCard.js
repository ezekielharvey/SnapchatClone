import React from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import Ionicons from '@expo/vector-icons/Ionicons'

const ChatCard = ({name, streak}) => {
  const [loaded] = useFonts({
    Montserrat: require('../assets/fonts/Montserrat-Regular.ttf'),
  })
  if (!loaded) {
    return null;
  }

  return (
    <TouchableOpacity>
      <View className='flex-row'>
        <View className="h-16 w-16 rounded-full bg-slate-100 ml-5">
          <Image
            source={{
              uri: 'https://picsum.photos/600',
            }}
            className="flex-1 rounded-full"
          />
        </View>
        <Text style={{ fontFamily: 'Montserrat', fontWeight: 'bold'}} className='ml-3 text-lg'>{name}</Text>
      </View>
      <View className='left-24 flex-row -mt-8'>
        <Ionicons name='chatbox-outline' color='#23b6ff' size={20} />
        <Text className='ml-1 mt-0.5 text-gray-400 text-xs'>Received · 2m · <Text className='text-black text-xs'>{streak}</Text>🔥</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ChatCard;
