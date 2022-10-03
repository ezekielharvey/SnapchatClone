import { View, Text, Image } from 'react-native';
import React from 'react';

const Story = ({ name, image }) => {
  return (
    <View className="px-1.5 items-center">
      <View className='border-2 mb-1 rounded-full border-[#A05CCD]'>
        <Image
          source={{
            uri: image,
          }}
          className="h-20 w-20 rounded-full border-2 border-white"
        />
      </View>
      <Text className="font-bold text-sm">{name}</Text>
    </View>
  );
};

export default Story;
