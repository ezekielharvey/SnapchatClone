import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import SubThumbnail from './SubCard';

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

const Subscriptions = () => {
  const renderItem = ({ item }) => {
    return <SubThumbnail sub={item.sub} time={item.time} image={item.image} />;
  };

  return (
    <View className="mt-4">
      <TouchableOpacity>
        <View className="flex-row items-center">
          <Text style={{ fontSize: 18 }} className="font-semibold pl-2">
            Subscriptions
          </Text>
          <Ionicons name="chevron-forward" color="#BAC0C7" size={15} />
        </View>
      </TouchableOpacity>
      <View>
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          horizontal
          showsHorizontalScrollIndicator={false}
          ListHeaderComponent={<View style={{width: 4}} />}
          ListFooterComponent={<View style={{width: 4}} />}
        />
      </View>
    </View>
  );
};

export default Subscriptions;
