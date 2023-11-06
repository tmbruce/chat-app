import React from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';

import ChatThreadCard from '../components/ChatThreadCard';
import {ChatThreadCard as ChatThreadCardType} from '../types';

const Threads = () => {
  const {threads} = useSelector((state: RootState) => state.threads);
  return (
    <SafeAreaView>
      <FlatList
        data={threads}
        keyExtractor={(item: ChatThreadCardType, _: number) =>
          item.threadId.toString()
        }
        renderItem={({item}) => <ChatThreadCard chatThread={item} />}
      />
    </SafeAreaView>
  );
};

export default Threads;
