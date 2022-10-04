import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Entypo from '@expo/vector-icons/Entypo';

const Header = ({ title, name, color, disabled, opacity, textColor, iconColor }) => {
  return (
    <View className="mt-2 ">
      <View className="flex-row items-center">
        <TouchableOpacity className="absolute left-2 h-12 w-12 rounded-full">
          <View className="flex-1">
            <Image
              source={{
                uri: 'https://picsum.photos/600',
              }}
              className="flex-1 rounded-full"
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          className="absolute left-16 h-12 w-12 rounded-full items-center justify-center"
          style={{ marginLeft: 3 }}
        >
          <View style={{ backgroundColor: color }} className="bg-slate-100 rounded-full items-center justify-center">
            <Ionicons
              style={{ margin: 12 }}
              name="search-outline"
              color={iconColor}
              size={24}
            />
          </View>
        </TouchableOpacity>
        <View className='items-center justify-center self-center flex-1'>
          <Text style={{color: textColor}} className="text-xl font-bold">{title}</Text>
        </View>
        <TouchableOpacity disabled={disabled} style={{opacity: opacity}} className="absolute right-16 h-12 w-12 rounded-full items-center justify-center">
          <View style={{ backgroundColor: color }} className="bg-slate-100 rounded-full items-center justify-center">
            <Ionicons
              style={{ margin: 10 }}
              name="person-add"
              color={iconColor}
              size={24}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity className="absolute right-2 h-12 w-12 rounded-full items-center justify-center">
          <View style={{ backgroundColor: color }} className="bg-slate-100 rounded-full items-center justify-center">
            <Ionicons
              style={{ margin: 10 }}
              name={name}
              color={iconColor}
              size={24}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
