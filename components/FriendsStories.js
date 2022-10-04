import { View, Text, FlatList } from 'react-native';
import React from 'react';
import { useFonts } from 'expo-font';
import ItemSeparatorComponent from './ItemSeparatorComponent';
import Story from './Story';

const FriendsStories = () => {
  const [loaded] = useFonts({
    Montserrat: require('../assets/fonts/Montserrat-Regular.ttf'),
  });
  if (!loaded) {
    return null;
  }

  const DATA = [
    {
      id: 123,
      name: 'Ezekiel H.',
      image: 'https://picsum.photos/600',
    },
    {
      id: 234,
      name: 'Naruto U.',
      image: 'https://picsum.photos/600',
    },
    {
      id: 345,
      name: 'Itachi U.',
      image: 'https://picsum.photos/600',
    },
    {
      id: 456,
      name: 'Sasuke U.',
      image: 'https://picsum.photos/600',
    },
    {
      id: 567,
      name: 'Kakashi H.',
      image: 'https://picsum.photos/600',
    },
    {
      id: 678,
      name: 'Sakura H.',
      image: 'https://picsum.photos/600',
    },
    {
      id: 789,
      name: 'Hinata H.',
      image: 'https://picsum.photos/600',
    },
    {
      id: 890,
      name: 'Yamato U.',
      image: 'https://picsum.photos/600',
    },
    {
      id: 901,
      name: 'Sai F.',
      image: 'https://picsum.photos/600',
    },
    {
      id: 222,
      name: 'Madara U.',
      image: 'https://picsum.photos/600',
    },
    {
      id: 343,
      name: 'Pervy S.',
      image: 'https://picsum.photos/600',
    },
  ];

  const renderItem = ({item}) => {
    return (
      <Story 
        name={item.name}
        image={item.image}
      />
    );
  };

  return (
    <View className='mt-2'>
      <Text style={{ fontSize: 18 }} className="font-semibold pl-2">
        Friends
      </Text>
      <View className='pl-2 pt-2'>
        <FlatList
          data={DATA}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default FriendsStories;
