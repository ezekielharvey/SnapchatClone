import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import Header from '../components/Header';
import Ionicons from '@expo/vector-icons/Ionicons';
import DiscoverSub from '../components/DiscoverSub';
import ItemSeparatorComponent from '../components/ItemSeparatorComponent';
import useStatusBar from '../hooks/useStatusBar';

const DiscoverScreen = () => {
  const [notified, setNotified] = useState(false);

  useStatusBar('light-content')

  const handleNotified = () => {
    notified ? setNotified : false;
  };
  return (
    <>
      <SafeAreaView className="bg-black flex-1">
        <Header
          title="Discover"
          textColor="white"
          name="ellipsis-horizontal"
          color="#343433"
          disabled={true}
          opacity={0}
          iconColor="white"
        />
        <ItemSeparatorComponent color='#222' />
        <ScrollView showsVerticalScrollIndicator={false} >
          <View className="flex-row">
            <Text
              style={{ fontSize: 18 }}
              className="mt-6 left-2 text-white font-semibold"
            >
              Happening Now
            </Text>
            <TouchableOpacity
              className="absolute mt-5 right-4 bg-[#4E565F] rounded-full"
              onPress={handleNotified}
            >
              <Ionicons
                style={{ padding: 5 }}
                name="notifications"
                color="white"
                size={25}
              />
            </TouchableOpacity>
          </View>
          <Text className="left-2 top-2 text-zinc-500 font-semibold">
            Monday, October 3
          </Text>
          <TouchableOpacity
            style={{ height: 80, width: '97%' }}
            className="bg-[#4E565F] rounded-lg mt-6 self-center justify-center"
          >
            <View className="flex-row">
              <View className="left-3 h-16 w-16 items-center justify-center border-2 rounded-full border-[#f0ff1c]">
                <Image
                  source={{
                    uri: 'https://picsum.photos/600',
                  }}
                  className="h-14 w-14 rounded-full border-2 border-[#4E565F]"
                />
              </View>
              <Text
                style={{ fontSize: 16 }}
                className="left-6 font-semibold text-white"
              >
                <Ionicons name="cloudy" size={14} /> Weather ·{' '}
                <Text className="text-xs text-gray-300 font-bold">
                  Local News
                </Text>
              </Text>
              <Text
                style={{ marginLeft: 4 }}
                className="left-40 text-zinc-400 font-semibold text-xs"
              >
                1h
              </Text>
              <Text className="absolute left-20 ml-2 mt-6 font-semibold text-gray-200 text-md">
                Today's high is 44° with a low of 39°.
              </Text>
              <Text className="absolute left-20 ml-2 mt-11 font-semibold text-gray-200 text-md">
                Tap for your personalized forecast.
              </Text>
            </View>
          </TouchableOpacity>
          <DiscoverSub />
          <View className='h-4'/>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default DiscoverScreen;
