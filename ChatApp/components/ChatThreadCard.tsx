import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Dimensions} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {StackNavigation} from '../types';

import {ChatThreadCard as ChatThreadCardType} from '../types';

import UserAvatar from 'react-native-user-avatar';
import window from '@react-navigation/native/lib/typescript/src/__mocks__/window';
interface Props {
  chatThread: ChatThreadCardType;
}

const windowWidth = Dimensions.get('window').width;

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
    <TouchableOpacity onPress={navigateToThread}>
      <View style={styles.chatThreadContainer}>
        <View style={styles.avatar}>
          <UserAvatar name={chatThread.name} size={60} bgColor="#AAA" />
        </View>
        <View style={styles.textContainer}>
          <View style={styles.dateName}>
            <Text style={styles.name}>{chatThread.name}</Text>
            <Text>{chatThread.date}</Text>
          </View>
          <Text style={styles.message} numberOfLines={2} ellipsizeMode={'tail'}>
            {chatThread.message}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  chatThreadContainer: {
    marginTop: 8,
    marginHorizontal: 8,
    backgroundColor: '#fff',
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    height: 80,
  },
  avatar: {
    marginHorizontal: 8,
    marginVertical: (80 - 60) / 2,
    width: 60,
    height: 60,
  },
  dateName: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: windowWidth - 108,
    marginTop: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  message: {
    fontSize: 14,
    color: '#555',
  },
});

export default ChatThreadCard;

// <View>
//   <TouchableOpacity onPress={navigateToThread}>
//     <View style={styles.chatThreadContainer}>
//       <View style={styles.avatar}></View>
//       <View style={styles.timeSpacer}>
//         <View style={styles.nameAndTime}>
//           <Text style={styles.chatThreadName}>{chatThread.name}</Text>
//           <Text>{chatThread.date}</Text>
//         </View>
//         <View style={styles.chatThreadMessage}>
//           <Text
//             style={styles.chatThreadMessage}
//             numberOfLines={2}
//             ellipsizeMode={'tail'}>
//             {chatThread.message}
//           </Text>
//         </View>
//       </View>
//     </View>
//   </TouchableOpacity>
// </View>
