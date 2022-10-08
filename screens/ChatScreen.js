import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, SafeAreaView, FlatList } from 'react-native';
import ChatCard from '../components/ChatCard';
import Header from '../components/Header';
import ItemSeparatorComponent from '../components/ItemSeparatorComponent';

const MessagesScreen = ({ navigation }) => {
  const DATA = [
    {
      id: 123,
      name: 'Ezekiel H.',
      streak: 12,
    },
    {
      id: 234,
      name: 'Naruto U.',
      streak: 28,
    },
    {
      id: 345,
      name: 'Itachi U.',
      streak: 57,
    },
    {
      id: 456,
      name: 'Sasuke U.',
      streak: 100,
    },
    {
      id: 567,
      name: 'Kakashi H.',
      streak: 366,
    },
    {
      id: 678,
      name: 'Sakura H.',
      streak: 564,
    },
    {
      id: 789,
      name: 'Hinata H.',
      streak: 1238,
    },
    {
      id: 890,
      name: 'Yamato U.',
      streak: 154,
    },
    {
      id: 901,
      name: 'Sai F.',
      streak: 2,
    },
    {
      id: 222,
      name: 'Madara U.',
      streak: 68,
    },
    {
      id: 343,
      name: 'Pervy S.',
      streak: 5,
    },
  ];

  const renderItem = ({ item }) => {
    return (
    <ChatCard 
      name={item.name}
      streak={item.streak}
    />
    );
  };

  return (
    <SafeAreaView style={{flex: 1}} className='bg-white'>
      <StatusBar style='dark' />
      <Header title="Chat" name="chatbox-ellipses" color='#F1F5F9' iconColor='#4E565F' logout={() => navigation.navigate('Onboarding')} />
      <View className='mt-7'>
        <FlatList
          data={DATA}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          ItemSeparatorComponent={() => {return(<ItemSeparatorComponent color='#F9F9F9'/>)}}
          ListFooterComponent={<View style={{height: 50}} />}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default MessagesScreen;
