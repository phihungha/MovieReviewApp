/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Typography, Colors} from './src/styles';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.appBackground}>
        <Text style={styles.titleText}>Hello World</Text>
      </SafeAreaView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  appBackground: {
    height: '100%',
    backgroundColor: Colors.background.app,
  },
  titleText: {
    ...Typography.heading.title,
  },
});

export default App;
