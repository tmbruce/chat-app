import React from 'react';
import {View, Text} from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import {RootStackParamList} from "../types";

type Props = NativeStackScreenProps<RootStackParamList, 'ThreadScreen'>;
const ThreadScreen = ({route}: Props) => {
  return (
    <View>
      <Text>{route.params.threadId}</Text>
        <Text>{route.params.message}</Text>
    </View>
  );
};

export default ThreadScreen;
