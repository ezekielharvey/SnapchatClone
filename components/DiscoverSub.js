import React from 'react';
import { View, Text, FlatList } from 'react-native';
import DiscoverSubCard from './DiscoverSubCard';

const data = [
  {
    id: 1,
    sub: 'Elon Musk: Tesla',
    time: '2h ago',
    image: 'https://picsum.photos/600',
  },
  {
    id: 2,
    sub: 'Cryptocurrency Bitcoin',
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
];

const DiscoverSub = () => {
  const renderItem = ({ item }) => {
    return (
      <DiscoverSubCard image={item.image} sub={item.sub} time={item.time} />
    );
  };

  return (
    <View>
      <Text className="font-semibold text-white left-2 mt-2 text-lg">
        Discover Subscriptions
      </Text>
      <View className="left-1">
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <Text className="font-semibold text-white left-2 mt-2 text-lg">
        Trending Now
      </Text>
      <View className="left-1">
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <Text className="font-semibold text-white left-2 mt-2 text-lg">
        Popular on Snapchat
      </Text>
      <View className='left-1'>
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default DiscoverSub;
