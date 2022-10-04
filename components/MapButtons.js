import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';

const MapButtons = () => {
  return (
    <View className="absolute left-32 pl-1.5 bottom-0 z-50 flex-row">
      <TouchableOpacity>
        <Image
          source={{
            uri: 'https://picsum.photos/600',
          }}
          className="h-20 w-20 rounded-full border-8 border-white right-3/4 bottom-5"
        />
        <View className="rounded-full bottom-7 right-20 ml-2.5 z-50 bg-white w-auto h-6 items-center justify-center">
          <Text className="text-black font-bold mt-0.5 p-1 bottom-0.5">My Bitmoji</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          source={{
            uri: 'https://picsum.photos/600',
          }}
          className="h-20 w-20 rounded-full border-8 border-white left-3/4 bottom-5"
        />
        <View className="rounded-full right-2 bottom-7 left-16 mr-2.5 z-50 bg-white w-auto h-6 items-center justify-center">
          <Text className="text-black font-bold mt-0.5">Friends</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default MapButtons;
