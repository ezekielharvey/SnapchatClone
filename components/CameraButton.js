import React from 'react'
import { View, Text, TouchableOpacity, TouchableHighlight } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons'

const CameraButton = () => {
  return (
    <View className='absolute bottom-10 self-center z-50 flex-row'>
      <TouchableOpacity
        className='h-24 w-24 rounded-full items-center justify-center z-50'
        onPress={console.log('Pressed')}
      >
        <Ionicons name='images-outline' color='white' size={35} />
      </TouchableOpacity>
      <TouchableOpacity
        className='border-8 border-white h-24 w-24 rounded-full items-center justify-center z-50'
        onPress={console.log('Pressed')}
      />
      <TouchableOpacity
        className='h-24 w-24 rounded-full items-center justify-center z-50'
        onPress={console.log('Pressed')}
      >
        <Ionicons name='happy-outline' color='white' size={40} /> 
      </TouchableOpacity>
      
    </View>
        
  )
}

export default CameraButton