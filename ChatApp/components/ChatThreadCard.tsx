import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {ChatThreadCard} from '../types';

interface Props {
  chatThread: ChatThreadCard;
}

const ChatThreadCard: React.FC<Props> = ({chatThread}) => {
  const navigation = useNavigation();

  const navigateToThread = () => {
    if (!chatThread.threadId) {
      return;
    }
    navigation.navigate('ThreadScreen', {threadId});
  };

  return (
    <View>
      <TouchableOpacity onPress={navigateToThread}>
        <View>
          <Text>{chatThread.name}</Text>
          <Text>{chatThread.message}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ChatThreadCard;

//TODO:
// Figure out what is happening with the navigation.navigate()
