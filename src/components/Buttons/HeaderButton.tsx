import React from 'react';
import {Button, ButtonProps} from '@rneui/themed';
import {StyleSheet} from 'react-native';

export function HeaderButton(props: ButtonProps) {
  return (
    <Button
      containerStyle={styles.container}
      buttonStyle={styles.button}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    width: 40,
  },
  button: {
    backgroundColor: 'transparent',
    padding: 0,
    margin: 0,
  },
});
