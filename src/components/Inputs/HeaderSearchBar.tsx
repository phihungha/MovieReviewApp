import React from 'react';
import {SearchBarProps} from '@rneui/themed';
import {SearchBar} from '@rneui/themed';
import {StyleSheet} from 'react-native';

export function HeaderSearchBar(props: SearchBarProps): React.JSX.Element {
  return (
    <SearchBar
      containerStyle={[styles.container, props.containerStyle]}
      inputContainerStyle={styles.inputContainer}
      rightIcon={{color: 'white', name: 'search'}}
      placeholder={props.placeholder}
      value={props.value}
      onChangeText={props.onChangeText}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    borderRadius: 0,
    borderWidth: 0,
  },
  inputContainer: {
    borderRadius: 0,
    borderWidth: 0,
  },
});
