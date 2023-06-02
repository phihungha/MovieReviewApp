import React from 'react';
import {StyleSheet, View} from 'react-native';
import {CriticReviewScoreIndicator} from '../Display/CriticReviewScoreIndicator';
import {LikeButton} from '../Buttons/LikeButton';
import {CommentButton} from '../Buttons/CommentButton';
import {SectionText} from '../Text/SectionText';
import {SubtitleText} from '../Text/SubtitleText';
import {RegularText} from '../Text/RegularText';
import colors from '../../styles/colors';

export function ReviewListItem(): JSX.Element {
  return (
    <View style={styles.container}>
      <View style={{padding: 2}}>
        <SectionText>Review title</SectionText>
      </View>

      <View style={styles.rowTime}>
        <View style={styles.right}>
          <SubtitleText>11:23 AM</SubtitleText>
        </View>
        <View style={styles.left}>
          <SubtitleText>April 24, 2023</SubtitleText>
        </View>
      </View>

      <View style={styles.padding}>
        <CriticReviewScoreIndicator score={8.3} />
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
          <LikeButton
            onPress={() => console.log('test')}
            isActive={true}
            count={120}
          />
        </View>
        <View style={styles.left}>
          <CommentButton onPress={() => console.log('test')} count={120} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    borderRadius: 5,
    paddingTop: 1,
    backgroundColor: colors.mediumBlack,
  },
  rowTime: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
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
