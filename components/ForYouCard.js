import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const ForYouCard = ({ image, sub, time }) => {
  return (
    <View className="px-1 pt-3">
      <TouchableOpacity>
        <Image
          source={{
            uri: image,
          }}
          className="rounded-md"
          style={{ height: 300, width: 202 }}
        />
        <Text className="absolute bottom-7 left-2 font-bold text-white">
          {sub}
        </Text>
        <Text className="absolute bottom-2 left-2  text-zinc-400 text-xs">
          {time}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default ForYouCard