import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SectionText} from '../Text/SectionText';
import {RegularText} from '../Text/RegularText';
import colors from '../../styles/colors';

export function CommentInfoDisplay(): JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.padding}>
        <SectionText>Name</SectionText>
      </View>

      <View style={styles.padding}>
        <RegularText>
          Lorem ipsum dolor sit amunt ut l, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor
          sit........
        </RegularText>
      </View>

      <View style={styles.rowTime}>
        <View style={styles.right}>
          <RegularText>11:23 AM</RegularText>
        </View>
        <View style={styles.left}>
          <RegularText>April 24, 2023</RegularText>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    padding: 5,
    borderRadius: 5,
    paddingTop: 1,
    backgroundColor: colors.mediumBlack,
  },
  rowTime: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    padding: 5,
  },
  right: {
    paddingRight: 10,
    paddingVertical: 2,
    paddingLeft: 1,
  },
  left: {
    paddingRight: 1,
    paddingVertical: 2,
    paddingLeft: 10,
  },
  padding: {
    padding: 2,
  },
});
