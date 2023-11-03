import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {StackParamList} from '../types/navigationTypes';

import ThreadScreen from '../screens/ThreadScreen';

const Stack = createStackNavigator<StackParamList>();

const MainStackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ThreadScreen" component={ThreadScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export {MainStackNavigator};

//TODO:
// Additional setup for android required:
// https://reactnavigation.org/docs/getting-started#installing-dependencies-into-a-bare-react-native-project
// 'Add the highlighted code to the body of MainActivity Class'
