import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types';

import Threads from '../screens/Threads';
import ThreadScreen from '../screens/ThreadScreen';

// import {useTranslation} from 'react-i18next';

const Stack = createNativeStackNavigator<RootStackParamList>();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Threads"
        component={Threads}
        options={{
          title: 'Messages',
          headerLargeTitle: true,
        }}
      />
      <Stack.Screen
        name="ThreadScreen"
        component={ThreadScreen}
        options={({route}) => ({
          headerTitle: route.params.threadName as string,
          threadName: route.params.threadName as string,
        })}
      />
    </Stack.Navigator>
  );
};

export {MainStackNavigator};

// TODO:
// Additional setup for android required:
// https://reactnavigation.org/docs/getting-started#installing-dependencies-into-a-bare-react-native-project
// 'Add the highlighted code to the body of MainActivity Class'
