import {Text} from '@rneui/themed';
import React from 'react';
import {Image} from 'react-native';
import {StyleSheet, View} from 'react-native';
import {styles} from '../styles/styles';
import {TextProps} from '../props/TextProps';

/**
 *  The score review by critic user
 *  props:
 *    body: the reviews score want to display
 *  using:  <CriticReviewScoreIndicator>4.5</CriticReviewScoreIndicator>;
 */
export function CriticReviewScoreIndicator(props: TextProps): JSX.Element {
  const uri = '../assets/icons/ic_critic_score.png';
  return (
    <View style={[reviewScoreStyles.container]}>
      <Image
        source={require(uri)}
        style={[reviewScoreStyles.item, styles.marginEnd4]}
      />

      <Text style={styles.colorLightGrey}>{props.children}</Text>
    </View>
  );
}

/** The score review by regular user
 *  props:
 *    body: the reviews score want to display
 *  using:  <UserReviewScoreIndicator>4.5</UserReviewScoreIndicator>;
 */
export function UserReviewScoreIndicator(props: TextProps): JSX.Element {
  const uri = '../assets/icons/ic_user_score.png';
  return (
    <View style={[reviewScoreStyles.container]}>
      <Image
        source={require(uri)}
        style={[reviewScoreStyles.item, styles.marginEnd4]}
      />

      <Text style={[styles.colorLightGrey]}>{props.children}</Text>
    </View>
  );
}

const reviewScoreStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'flex-start',
    width: 'auto',
    height: 'auto',
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  item: {
    width: 16,
    height: 16,
  },
});
