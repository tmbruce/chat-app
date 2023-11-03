import React from 'react';
// import {createStackNavigator} from '@react-navigation/stack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {StackParamList} from '../types/navigationTypes';

import ThreadScreen from '../screens/ThreadScreen';

// const Stack = createStackNavigator<StackParamList>();
const Stack = createNativeStackNavigator<StackParamList>();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ThreadScreen"
        component={ThreadScreen}
        options={{
          title: 'Messages',
          headerLargeTitle: true,
        }}
      />
    </Stack.Navigator>
  );
};

export {MainStackNavigator};

//TODO:
// Additional setup for android required:
// https://reactnavigation.org/docs/getting-started#installing-dependencies-into-a-bare-react-native-project
// 'Add the highlighted code to the body of MainActivity Class'
