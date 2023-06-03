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
        <RegularText>11:23 AM</RegularText>
      </View>

      <View style={styles.padding}>
        <RegularText>
          Lorem ipsum dolor sit amunt ut l, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor
          sit........
        </RegularText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    borderRadius: 5,
    paddingTop: 1,
    backgroundColor: colors.mediumBlack,
  },
  padding: {
    padding: 2,
  },
});
