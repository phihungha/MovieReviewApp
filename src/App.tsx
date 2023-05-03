import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RelayEnvironmentProvider} from 'react-relay';
import environment from './relay/environment';
import {RootStackNavigator} from './navigators/RootStackNavigator';
import {SignUpScreen} from './screens/SignUp';
import {LoginScreen} from './screens/Login';
import {MainScreen} from './screens/Main';

function App(): JSX.Element {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <NavigationContainer>
        <RootStackNavigator.Navigator>
          <RootStackNavigator.Screen name="Login" component={LoginScreen} />
          <RootStackNavigator.Screen name="SignUp" component={SignUpScreen} />
          <RootStackNavigator.Screen name="Main" component={MainScreen} />
        </RootStackNavigator.Navigator>
      </NavigationContainer>
    </RelayEnvironmentProvider>
  );
}

export default App;
