import React, { useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { View, TouchableOpacity, SafeAreaView, Text } from 'react-native';

const HomeScreen = () => {
  const [contacts, setContacts] = useState([]);

  const renderItem = ({ item }) => <View>{item.name}</View>;

  function renderContent() {
    if (!contacts.length) {
      return (
        <SafeAreaView
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text>Home Screen</Text>
        </SafeAreaView>
      );
    } else {
      return (
        <SafeAreaView>
          <FlatList
            data={contacts}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </SafeAreaView>
      );
    }
  }
  return renderContent();
};

export default HomeScreen;
