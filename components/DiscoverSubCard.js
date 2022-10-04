import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const DiscoverSubCard = ({ image, sub, time }) => {
  return (
    <View className="px-1 pt-3 mr-1">
      <TouchableOpacity>
        <Image
          source={{
            uri: image,
          }}
          className="rounded-md"
          style={{ height: 200, width: 150 }}
        />
        <Text className="absolute bottom-7 left-2 right-1 font-bold text-white">
          {sub}
        </Text>
        <Text className="absolute bottom-2 left-2 right-1 text-zinc-400 text-xs">
          {time}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default DiscoverSubCard;
