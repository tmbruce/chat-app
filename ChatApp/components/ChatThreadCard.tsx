import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {StackNavigation} from '../types';

import {ChatThreadCard as ChatThreadCardType} from '../types';

interface Props {
  chatThread: ChatThreadCardType;
}

const ChatThreadCard: React.FC<Props> = ({chatThread}) => {
  const navigation = useNavigation<StackNavigation>();

  const navigateToThread = () => {
    if (!chatThread.threadId) {
      return;
    }
    navigation.navigate('ThreadScreen', {
      threadId: chatThread.threadId as string,
      threadName: chatThread.name as string,
      message: chatThread.message as string,
    });
  };

  return (
    <View>
      <TouchableOpacity onPress={navigateToThread}>
        <View>
          <Text style={styles.chatThreadContainer}>{chatThread.name}</Text>
          <Text>{chatThread.message}</Text>
          <Text>{chatThread.date}</Text>
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
