import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import ItemSeparatorComponent from '../components/ItemSeparatorComponent'
import FriendsStories from '../components/FriendsStories'
import Subscriptions from '../components/Subscriptions'
import ForYou from '../components/ForYou'

const StoriesScreen = () => {
  return (
    <SafeAreaView className='bg-white flex-1'>
      <Header 
        title='Stories'
        name='ellipsis-horizontal'
      />
      <ItemSeparatorComponent />
      <FriendsStories />
      <Subscriptions />
      <ForYou />
    </SafeAreaView>
  )
}

export default StoriesScreen