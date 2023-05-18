import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {fontSizes, fonts} from '../styles/typography';
import colors from '../styles/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Text} from '@rneui/themed';
import React from 'react';
import {TitleText} from './TitleText';
import {styles} from '../styles/styles';

interface IconAggregateScoreProps {
  iconName: string;
  score: number;
  reviewCount: number;
  titleText: string;
  isCriticUser: boolean;
  style?: StyleProp<ViewStyle>;
}

/**
 * Generic aggregate score button.
 * @param {string} iconName Icon name
 * @param {number} score score value
 * @param {number} reviewCount Count value
 * @param {string} titleText title of label
 * @param {boolean} isCriticUser True if component is the score of Critic user
 * @param {StyleProp<ViewStyle>} style Style
 * @example
 * <CommentButton count={120} />
 */
export function IconAggregateScore(props: IconAggregateScoreProps) {
  return (
    <View
      style={[
        styles.containerMediumBlackCorner,
        aggregateScoreStyles.column,
        props.isCriticUser
          ? aggregateScoreStyles.right
          : aggregateScoreStyles.left,
        props.style,
      ]}>
      <View
        style={[
          aggregateScoreStyles.container,
          props.isCriticUser ? aggregateScoreStyles.directionCritic : {},
        ]}>
        <Text
          style={[
            aggregateScoreStyles.textScore,
            props.isCriticUser
              ? aggregateScoreStyles.marginStart4
              : aggregateScoreStyles.marginEnd4,
          ]}>
          {props.score}
        </Text>
        <Icon
          name={props.iconName}
          style={[
            props.isCriticUser
              ? aggregateScoreStyles.itemCriticUser
              : aggregateScoreStyles.itemRegularUser,
          ]}
        />
      </View>

      <TitleText>{props.titleText}</TitleText>

      <Text style={[aggregateScoreStyles.colorLightGrey]}>
        {props.reviewCount <= 1
          ? props.reviewCount + ' review'
          : props.reviewCount + ' reviews'}
      </Text>
    </View>
  );
}

const aggregateScoreStyles = StyleSheet.create({
  directionCritic: {
    flexDirection: 'row-reverse',
  },
  right: {
    paddingLeft: '16%',
    alignItems: 'flex-end',
  },
  left: {
    paddingRight: '16%',
    alignItems: 'flex-start',
  },
  column: {
    flexDirection: 'column',
  },
  container: {
    flexDirection: 'row',

    justifyContent: 'center',
    alignItems: 'center',
    width: 'auto',
    height: 'auto',
  },
  itemRegularUser: {
    fontSize: fontSizes.xl2,
    color: colors.blueStar,
  },
  itemCriticUser: {
    fontSize: fontSizes.xl2,
    color: colors.yellowStar,
  },
  textScore: {
    fontFamily: fonts.primary_bold,
    fontSize: fontSizes.xl,
    paddingTop: 10,
  },
  marginEnd4: {
    marginEnd: 4,
  },
  marginStart4: {
    marginStart: 4,
  },
  colorLightGrey: {
    color: colors.lightGrey,
  },
});
