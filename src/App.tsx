/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {RelayEnvironmentProvider} from 'react-relay';
import environment from './relay/environment';

function App(): JSX.Element {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <NavigationContainer>
        <Text>Hello World</Text>
      </NavigationContainer>
    </RelayEnvironmentProvider>
  );
}

export default App;
