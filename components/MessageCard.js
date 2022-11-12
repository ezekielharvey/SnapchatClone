import { View, Text } from 'react-native';
import React from 'react';

const MessageCard = ({ name, message }) => {
  return (
    <View className='ml-2'>
      <Text className='text-red-600 font-bold'>{name}</Text>
      <View className='w-96 border-l-2 border-red-600'>
        <Text className='ml-1 py-1'>{message}</Text>
      </View>
    </View>
  );
};

export default MessageCard;
