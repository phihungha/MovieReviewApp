import {Text} from '@rneui/themed';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {fontSizes} from '../styles/typography';
import colors from '../styles/colors';

interface ReviewScoreIndicatorProps {
  score: number;
}

/**
 * Displays review score of a critic.
 * @param {number} score Score value
 * @example
 * <CriticReviewScoreIndicator score={4.5} />
 */
export function CriticReviewScoreIndicator(
  props: ReviewScoreIndicatorProps,
): JSX.Element {
  return (
    <View style={[reviewScoreStyles.container]}>
      <Icon
        name="star"
        style={[reviewScoreStyles.item, reviewScoreStyles.marginEnd4]}
      />

      <Text
        style={[reviewScoreStyles.colorLightGrey, reviewScoreStyles.textScore]}>
        {props.score}
      </Text>
    </View>
  );
}

/**
 * Displays review score of a regular user.
 * @param {number} score Score value
 * @example
 * <UserReviewScoreIndicator score={4.5} />
 */
export function RegularReviewScoreIndicator(
  props: ReviewScoreIndicatorProps,
): JSX.Element {
  return (
    <View style={[reviewScoreStyles.container]}>
      <Icon
        name="star"
        style={[reviewScoreStyles.item2, reviewScoreStyles.marginEnd4]}
      />

      <Text
        style={[reviewScoreStyles.colorLightGrey, reviewScoreStyles.textScore]}>
        {props.score}
      </Text>
    </View>
  );
}

const reviewScoreStyles = StyleSheet.create({
  container: {
    textAlign: 'center',
    flexDirection: 'row',

    justifyContent: 'center',
    alignItems: 'center',
    width: 'auto',
    height: 'auto',
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  item: {
    fontSize: fontSizes.lg,
    color: colors.yellowStar,
  },
  item2: {
    fontSize: fontSizes.lg,
    color: colors.blueStar,
  },
  textScore: {
    paddingTop: 4,
  },
  marginEnd4: {
    marginEnd: 4,
  },
  colorLightGrey: {
    color: colors.lightGrey,
  },
});
