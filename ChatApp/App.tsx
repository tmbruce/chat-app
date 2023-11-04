import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {MainStackNavigator} from './navigation/AppNavigator';

import {store} from './redux/store';
import {Provider} from 'react-redux';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainStackNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
