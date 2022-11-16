import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  TextInput,
  KeyboardAvoidingView,
  FlatList,
  Keyboard,
} from 'react-native';
import React, { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import ItemSeparatorComponent from '../components/ItemSeparatorComponent';
import MessageCard from '../components/MessageCard';
import { auth, db, messageCollection } from '../firebase';
import { useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import { useFonts } from 'expo-font';

const MessagesScreen = ({ navigation, route }) => {
  const [msgInput, setMsgInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [loaded] = useFonts({
    Montserrat: require('../assets/fonts/Montserrat-Regular.ttf'),
  });

  const sendMsg = () => {
    Keyboard.dismiss();

    messageCollection
      .doc(auth.currentUser.email)
      .collection('messages')
      .add({
        id: uuid(),
        timestamp: new Date(),
        message: msgInput,
        fullName: auth.currentUser.displayName,
        email: auth.currentUser.email,
        photoURL: auth.currentUser.photoURL,
        room: [auth.currentUser.email, route.params.email]
      })
      .then(() => {
        messageCollection
          .doc(route.params.email)
          .collection('messages')
          .add({
            id: uuid(),
            timestamp: new Date(),
            message: msgInput,
            displayName: auth.currentUser.displayName,
            email: auth.currentUser.email,
            photoURL: auth.currentUser.photoURL,
            room: [auth.currentUser.email, route.params.email]
          });
      })
      .then(() => setMsgInput(''))
      .catch(error => alert(error.message));
  };

  useEffect(() => {
    const subscriber = messageCollection
      .doc(auth.currentUser.email)
      .collection('messages')
      .where('room', 'array-contains', route.params.email)
      .orderBy('timestamp', 'asc')
      .onSnapshot(querySnapshot => {
        const allSentMessages = [];
        querySnapshot.forEach(documentSnapshot => {
          allSentMessages.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });
        setMessages(allSentMessages);
      });
    return () => subscriber();
  }, [messageCollection]);

  const renderItem = ({ item }) => {
    return (
      <>
        {item.email === auth.currentUser.email ? (
          <View key={item.id} className="ml-2">
            <Text className="text-red-600 font-bold">Me</Text>
            <View className="w-96 border-l-2 border-red-600">
              <Text className="ml-1 py-1 font-medium text-base">{item.message}</Text>
            </View>
          </View>
        ) : (
          <View key={item.id} className="ml-2">
            <Text className="text-blue-600 font-bold">{item.displayName}</Text>
            <View className="w-96 border-l-2 border-blue-600">
              <Text className="ml-1 py-1 font-medium text-base">{item.message}</Text>
            </View>
          </View>
        )}
      </>
    );
  };

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
            className="ml-2 mr-4"
            onPress={() => navigation.navigate('Chat')}
          >
            <Ionicons name="chevron-forward" color="black" size={30} />
          </TouchableOpacity>
          <TouchableOpacity className="bg-[#F1F5F9] rounded-r-full">
            <Ionicons
              style={{ padding: 5, paddingHorizontal: 18 }}
              name="videocam"
              color="black"
              size={21}
            />
          </TouchableOpacity>
          <View className="mr-0.5">
            <TouchableOpacity className="bg-[#F1F5F9] rounded-l-full">
              <Ionicons
                style={{ padding: 6.5, paddingHorizontal: 20 }}
                name="call"
                color="black"
                size={18}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ItemSeparatorComponent color="#f9f9f9" />
      {/* <View className="bg-[#f9f9f9] flex-1"></View> */}
      <FlatList
        data={messages}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        ItemSeparatorComponent={() => {
          return <View className="h-2"></View>;
        }}
        ListFooterComponent={<View style={{ height: 65 }} />}
      />
      <KeyboardAvoidingView
        style={{ flex: 1, flexDirection: 'column-reverse' }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <View className="flex-row bg-white h-14 w-screen  bottom-0 border-t-0.5 border-gray-300 items-center">
          <View className="bg-[#DADDE8] w-10 h-10 rounded-full p-1 items-center justify-center ml-2">
            <Ionicons name="camera" size={28} color="#1E3542" />
          </View>
          <View className="bg-[#DADDE8] w-60 h-10 ml-2 rounded-full justify-center px-3 flex-1">
            <TextInput
              placeholder="Send a chat"
              placeholderTextColor={'gray'}
              keyboardAppearance="dark"
              returnKeyType="send"
              value={msgInput}
              onChangeText={text => setMsgInput(text)}
              onSubmitEditing={sendMsg}
            />
          </View>
          <View className="ml-2">
            <Ionicons name="happy-outline" size={30} color="#1E3542" />
          </View>
          <View className="ml-2">
            <Ionicons name="image-outline" size={30} color="#1E3542" />
          </View>
          <View className="mx-2">
            <Ionicons name="rocket-outline" size={30} color="#1E3542" />
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default MessagesScreen;
