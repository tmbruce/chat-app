import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ThreadScreen from '../screens/ThreadScreen';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ThreadScreen" component={ThreadScreen} />
    </Stack.Navigator>
  );
};

export {MainStackNavigator};

//TODO:
// Additional setup for android required:
// https://reactnavigation.org/docs/getting-started#installing-dependencies-into-a-bare-react-native-project
// 'Add the highlighted code to the body of MainActivity Class'
