import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TitleText} from './TitleText';
import {Text} from '@rneui/themed';
import {styles} from '../styles/styles';
import {fontSizes, fonts} from '../styles/typography';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../styles/colors';

interface AggregateScoreIndicatorProps {
  score: number;
  reviewCount: number;
}

/**
 * Display critics' aggregate score and review count.
 * @param {number} score Aggregate score
 * @param {number} reviewCount Number of reviews
 * @example
 * <CriticAggregateScoreIndicator score={8.3} reviewCount={211} />
 */
export function CriticAggregateScoreIndicator(
  props: AggregateScoreIndicatorProps,
): JSX.Element {
  return (
    <View
      style={[
        styles.containerMediumBlackCorner,
        aggregateScoreStyles.column,
        aggregateScoreStyles.right,
      ]}>
      <View style={[aggregateScoreStyles.container]}>
        <Icon
          name="star"
          style={[aggregateScoreStyles.item, aggregateScoreStyles.marginEnd4]}
        />
        <Text style={aggregateScoreStyles.textScore}>{props.score}</Text>
      </View>

      <TitleText>Critic score</TitleText>
      {props.reviewCount <= 1 ? (
        <Text style={[aggregateScoreStyles.colorLightGrey]}>
          {props.reviewCount} review
        </Text>
      ) : (
        <Text style={[aggregateScoreStyles.colorLightGrey]}>
          {props.reviewCount} reviews
        </Text>
      )}
    </View>
  );
}

/**
 * Display regular users' aggregate score and review count.
 * @param {number} score Aggregate score
 * @param {number} reviewCount Number of reviews
 * @example
 * <RegularAggregateScoreIndicator score={8.3} reviewCount={211} />
 */
export function RegularAggregateScoreIndicator(
  props: AggregateScoreIndicatorProps,
): JSX.Element {
  return (
    <View
      style={[
        styles.containerMediumBlackCorner,
        aggregateScoreStyles.column,
        aggregateScoreStyles.left,
      ]}>
      <View style={[aggregateScoreStyles.container]}>
        <Text
          style={[
            aggregateScoreStyles.textScore,
            aggregateScoreStyles.marginEnd4,
          ]}>
          {props.score}
        </Text>
        <Icon name="star" style={[aggregateScoreStyles.item2]} />
      </View>

      <TitleText>User score</TitleText>
      {props.reviewCount <= 1 ? (
        <Text style={[aggregateScoreStyles.colorLightGrey]}>
          {props.reviewCount} review
        </Text>
      ) : (
        <Text style={[aggregateScoreStyles.colorLightGrey]}>
          {props.reviewCount} reviews
        </Text>
      )}
    </View>
  );
}

const aggregateScoreStyles = StyleSheet.create({
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
  item2: {
    fontSize: fontSizes.xl2,
    color: colors.blueStar,
  },
  item: {
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
  colorLightGrey: {
    color: colors.lightGrey,
  },
});
