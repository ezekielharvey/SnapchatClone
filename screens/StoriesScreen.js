import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import Header from '../components/Header';
import ItemSeparatorComponent from '../components/ItemSeparatorComponent';
import FriendsStories from '../components/FriendsStories';
import Subscriptions from '../components/Subscriptions';
import ForYou from '../components/ForYou';
import { StatusBar } from 'expo-status-bar';

const StoriesScreen = () => {
  return (
    <>
      <StatusBar style="dark" />
      <SafeAreaView className="bg-white flex-1">
        <Header
          title="Stories"
          name="ellipsis-horizontal"
          color="#F1F5F9"
          iconColor="#4E565F"
        />
        <ItemSeparatorComponent color='#F1F5F9' />
        <ScrollView showsVerticalScrollIndicator={false}>
          <FriendsStories />
          <Subscriptions />
          <ForYou />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default StoriesScreen;
