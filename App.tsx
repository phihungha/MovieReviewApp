/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
import {Typography} from './src/styles';

const apiClient = new ApolloClient({
  uri: 'localhost:3000/',
  cache: new InMemoryCache(),
});

function App(): JSX.Element {
  return (
    <ApolloProvider client={apiClient}>
      <NavigationContainer>
        <SafeAreaView>
          <Text style={styles.titleText}>Hello World</Text>
        </SafeAreaView>
      </NavigationContainer>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  titleText: {
    ...Typography.heading.title,
  },
});

export default App;
