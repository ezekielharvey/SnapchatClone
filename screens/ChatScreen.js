import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState, useSyncExternalStore } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import ChatCard from '../components/ChatCard';
import Header from '../components/Header';
import ItemSeparatorComponent from '../components/ItemSeparatorComponent';
import { auth, db, messageCollection } from '../firebase';
import useStatusBar from '../hooks/useStatusBar';

const MessagesScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useStatusBar('dark-content')

  useEffect(() => {
    const subscriber = db.collection('users').where('email', '!=', auth.currentUser.email).onSnapshot(querySnapshot => {
      const users = [];
      querySnapshot.forEach(documentSnapshot => {
        users.push({
          ...documentSnapshot.data(),
          key: documentSnapshot.id,
        });
      });
      setUsers(users);
      setLoading(false);
    });
    return () => subscriber();
  }, []);

  if (loading) {
    return <ActivityIndicator />;
  }

  const renderItem = ({ item }) => {
    return (
      <ChatCard
        name={item.email}
        streak={item.streak}
        onPress={() => navigation.navigate('Messages', { email: item.email, name: 'test', uid: item.uid })}
      />
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }} className="bg-white">
      <Header
        title="Chat"
        name="chatbox-ellipses"
        color="#F1F5F9"
        iconColor="#4E565F"
        logout={() => navigation.navigate('Onboarding')}
      />
      <View className="mt-7">
        <FlatList
          data={users}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          ItemSeparatorComponent={() => {
            return <ItemSeparatorComponent color="#F9F9F9" />;
          }}
          ListFooterComponent={<View style={{ height: 50 }} />}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default MessagesScreen;
