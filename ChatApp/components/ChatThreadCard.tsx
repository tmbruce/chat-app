import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

import {StackParamList} from '../types/navigationTypes';
import {ChatThreadCard} from '../types';

interface Props {
  chatThread: ChatThreadCard;
}

export type StackNavigation = StackNavigationProp<StackParamList>;

const ChatThreadCard: React.FC<Props> = ({chatThread}) => {
  const navigation = useNavigation<StackNavigation>();

  const navigateToThread = () => {
    if (!chatThread.threadId) {
      return;
    }
    navigation.navigate('ThreadScreen', {
      threadId: chatThread.threadId,
      threadName: chatThread.name,
    });
  };

  return (
    <View>
      <TouchableOpacity onPress={navigateToThread}>
        <View>
          <Text style={styles.chatThreadContainer}>{chatThread.name}</Text>
          <Text>{chatThread.message}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  chatThreadContainer: {
    padding: 10,
    margin: 5,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  chatThreadName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  chatThreadMessage: {
    fontSize: 14,
  },
});

export default ChatThreadCard;

//TODO:
// Figure out what is happening with the navigation.navigate()
