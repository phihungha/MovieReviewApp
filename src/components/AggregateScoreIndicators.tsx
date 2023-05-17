import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TitleText} from './TitleText';
import {Text} from '@rneui/themed';
import {styles} from '../styles/styles';
import {fontSizes, fonts} from '../styles/typography';
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../styles/colors';

interface AggregateScoreIndicatorProps {
  aggregateScore: number;
  reviewsCount: number;
}

/**
 *  The aggregate score by critic user
 *  props:
 *    aggregateScore: the reviews score want to display
 *    reviewsCount: the reviews count want to display
 *  using:  <CriticAggregateScoreIndicator
          aggregateScore={8.3}
          reviewsCount={211}></CriticAggregateScoreIndicator>
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
        <Text style={aggregateScoreStyles.textScore}>
          {props.aggregateScore}
        </Text>
      </View>

      <TitleText>Critic score</TitleText>
      {props.reviewsCount <= 1 ? (
        <Text style={[aggregateScoreStyles.colorLightGrey]}>
          {props.reviewsCount} review
        </Text>
      ) : (
        <Text style={[aggregateScoreStyles.colorLightGrey]}>
          {props.reviewsCount} reviews
        </Text>
      )}
    </View>
  );
}

/**
 *  The aggregate score by regular user
 *  props:
 *    aggregateScore: the reviews score want to display
 *    reviewsCount: the reviews count want to display
 *  using:  <UserAggregateScoreIndicator
          aggregateScore={8.3}
          reviewsCount={211}></UserAggregateScoreIndicator>
 */
export function UserAggregateScoreIndicator(
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
          {props.aggregateScore}
        </Text>
        <Icon name="star" style={[aggregateScoreStyles.item2]} />
      </View>

      <TitleText>User score</TitleText>
      {props.reviewsCount <= 1 ? (
        <Text style={[aggregateScoreStyles.colorLightGrey]}>
          {props.reviewsCount} review
        </Text>
      ) : (
        <Text style={[aggregateScoreStyles.colorLightGrey]}>
          {props.reviewsCount} reviews
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
