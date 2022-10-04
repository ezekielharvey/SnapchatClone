import { View, Text, FlatList } from 'react-native';
import React from 'react';
import ItemSeparatorComponent from './ItemSeparatorComponent';
import ForYouCard from './ForYouCard';

const data = [
  {
    id: 1,
    sub: 'Elon Musk: Tesla',
    time: '2h ago',
    image: 'https://picsum.photos/600',
  },
  {
    id: 2,
    sub: 'Cryptocurrency: Bitcoin',
    time: '5h ago',
    image: 'https://picsum.photos/600',
  },
  {
    id: 3,
    sub: 'Florida New: Hurricane Ian',
    time: '13h ago',
    image: 'https://picsum.photos/600',
  },
  {
    id: 4,
    sub: 'This Rapper Just Joined the Elite Lambo Club',
    time: 'Today',
    image: 'https://picsum.photos/600',
  },
  {
    id: 5,
    sub: 'Japanese Photography',
    time: 'Today',
    image: 'https://picsum.photos/600',
  },
  {
    id: 6,
    sub: 'How to Become a Billionaire',
    time: 'Yesterday',
    image: 'https://picsum.photos/600',
  },
];

const ForYou = () => {
  const renderItem = ({ item }) => {
    return <ForYouCard sub={item.sub} time={item.time} image={item.image} />;
  };

  return (
    <View className="mt-4">
      <Text style={{ fontSize: 18 }} className="font-semibold pl-2">
        For You
      </Text>
      <View className='pl-1'>
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          numColumns={2}
          ListFooterComponent={<View style={{height: 6}} />}
          scrollEnabled={false}
        />
      </View>
    </View>
  );
};

export default ForYou;
