import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import ItemSeparatorComponent from '../components/ItemSeparatorComponent';
import { roundToNearestPixel } from 'nativewind';

const MessagesScreen = ({ navigation, route }) => {
  return (
    <SafeAreaView className="bg-white flex-1">
      <View className="flex-row items-center">
        <TouchableOpacity>
          <Image
            source={{
              uri: 'https://picsum.photos/600',
            }}
            className="h-12 w-12 rounded-full ml-6"
          />
        </TouchableOpacity>
        <Text className="ml-4 font-bold text-xl">{route.params.name}</Text>

        <View className="flex-row-reverse items-center flex-1 bg-white">
          <TouchableOpacity
            className="ml-5 mr-4"
            onPress={() => navigation.navigate('Chat')}
          >
            <Ionicons name="chevron-forward" color="black" size={30} />
          </TouchableOpacity>
          <TouchableOpacity className="bg-[#F1F5F9] rounded-r-full">
            <Ionicons
              style={{ padding: 5, paddingHorizontal: 18 }}
              name="videocam"
              color="black"
              size={25}
            />
          </TouchableOpacity>
          <View className="mr-0.5">
            <TouchableOpacity className="bg-[#F1F5F9] rounded-l-full">
              <Ionicons
                style={{ padding: 6.5, paddingHorizontal: 20 }}
                name="call"
                color="black"
                size={22}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ItemSeparatorComponent color="#f9f9f9" />
    </SafeAreaView>
  );
};

export default MessagesScreen;
