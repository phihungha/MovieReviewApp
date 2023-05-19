import {Text} from '@rneui/themed';
import React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {fontSizes, fonts} from '../styles/typography';
import colors from '../styles/colors';

interface ReviewScoreIndicatorsProps {
  score: number;
  style?: StyleProp<ViewStyle>;
}

export enum IconReviewSize {
  S,
  L,
}

interface ReviewScoreProps {
  iconName: string;
  score: number;
  isCriticUser: boolean;
  marginStart?: number;
  marginEnd?: number;
  size: IconReviewSize;
  isLeft: boolean;
  style?: StyleProp<ViewStyle>;
}

/**
 * Generic review score button.
 * @param {string} iconName Icon name
 * @param {number} score score value
 * @param {boolean} isCriticUser True if component is the score of Critic user
 * @param {marginStart} number margin start the text score value
 * @param {marginEnd} number margin end the text score value
 * @param {size} IconReviewSize icon size (S,L)
 * @param {isLeft} boolean True if component is set on the left
 * @param {StyleProp<ViewStyle>} style Style
 * @example
 *  <ReviewScoreIndicators
      iconName="star"
      score={props.score}
      isCriticUser={true}
      marginStart={4}
      marginEnd={4}
      size={IconReviewSize.S}
      isLeft={props.isLeft}  />
 */
export function ReviewScoreIndicators(props: ReviewScoreProps) {
  return (
    <View
      style={[
        reviewScoreStyles.container,
        props.isLeft ? {} : reviewScoreStyles.itemInTheRight,
        props.style,
      ]}>
      <Icon
        name={props.iconName}
        style={[
          props.size == IconReviewSize.S
            ? props.isCriticUser
              ? reviewScoreStyles.itemCriticUser
              : reviewScoreStyles.itemRegularUser
            : //else
            props.isCriticUser
            ? reviewScoreStyles.itemCriticUserBigSize
            : reviewScoreStyles.itemRegularUserBigSize,
        ]}
      />

      <Text
        style={[
          props.size == IconReviewSize.S
            ? reviewScoreStyles.textScore
            : reviewScoreStyles.textScoreBigSize,
          {marginStart: props.marginStart, marginEnd: props.marginEnd},
        ]}>
        {props.score}
      </Text>
    </View>
  );
}

/**
 * Displays review score of a critic.
 * @param {number} score Score value
 * @example
 * <CriticReviewScoreIndicator score={4.5} />
 */
export function CriticReviewScoreIndicator(
  props: ReviewScoreIndicatorsProps,
): JSX.Element {
  return (
    <ReviewScoreIndicators
      iconName="star"
      score={props.score}
      isCriticUser={true}
      style={props.style}
      marginStart={4}
      marginEnd={0}
      size={IconReviewSize.S}
      isLeft={true}
    />
  );
}

/**
 * Displays review score of a regular user.
 * @param {number} score Score value
 * @example
 * <UserReviewScoreIndicator score={4.5} />
 */
export function RegularReviewScoreIndicator(
  props: ReviewScoreIndicatorsProps,
): JSX.Element {
  return (
    <ReviewScoreIndicators
      iconName="star"
      score={props.score}
      isCriticUser={false}
      style={props.style}
      marginStart={4}
      marginEnd={0}
      size={IconReviewSize.S}
      isLeft={true}
    />
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
  },
  itemCriticUser: {
    fontSize: fontSizes.lg,
    color: colors.yellowStar,
  },
  itemRegularUser: {
    fontSize: fontSizes.lg,
    color: colors.blueStar,
  },
  textScore: {
    color: colors.lightGrey,
    paddingTop: 4,
  },
  itemInTheRight: {
    flexDirection: 'row-reverse',
  },
  itemRegularUserBigSize: {
    fontSize: fontSizes.xl2,
    color: colors.blueStar,
  },
  itemCriticUserBigSize: {
    fontSize: fontSizes.xl2,
    color: colors.yellowStar,
  },
  textScoreBigSize: {
    fontFamily: fonts.primary_bold,
    fontSize: fontSizes.xl,
    paddingTop: 10,
  },
});
