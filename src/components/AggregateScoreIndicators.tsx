import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TitleText} from './TitleText';
import {Text} from '@rneui/themed';
import {styles} from '../styles/styles';
import {Image} from 'react-native';
import {fontSizes, fonts} from '../styles/typography';
import {AggregateScoreIndicatorProps} from '../props/AggregateScoreIndicatorProps';

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
  const uri = '../assets/icons/ic_critic_score.png';
  return (
    <View
      style={[
        styles.containerMediumBlackCorner,
        aggregateScoreStyles.column,
        aggregateScoreStyles.right,
      ]}>
      <View style={[aggregateScoreStyles.container]}>
        <Image
          source={require(uri)}
          style={[aggregateScoreStyles.item, styles.marginEnd4]}
        />
        <Text style={aggregateScoreStyles.textScore}>
          {props.aggregateScore}
        </Text>
      </View>

      <TitleText>Critic score</TitleText>
      {props.reviewsCount <= 1 ? (
        <Text style={[styles.colorLightGrey]}>{props.reviewsCount} review</Text>
      ) : (
        <Text style={[styles.colorLightGrey]}>
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
  const uri = '../assets/icons/ic_user_score.png';
  return (
    <View
      style={[
        styles.containerMediumBlackCorner,
        aggregateScoreStyles.column,
        aggregateScoreStyles.left,
      ]}>
      <View style={[aggregateScoreStyles.container]}>
        <Text style={[aggregateScoreStyles.textScore, styles.marginEnd4]}>
          {props.aggregateScore}
        </Text>
        <Image source={require(uri)} style={[aggregateScoreStyles.item]} />
      </View>

      <TitleText>Critic score</TitleText>
      {props.reviewsCount <= 1 ? (
        <Text style={[styles.colorLightGrey]}>{props.reviewsCount} review</Text>
      ) : (
        <Text style={[styles.colorLightGrey]}>
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
    textAlign: 'center',
    alignItems: 'flex-start',
    width: 'auto',
    height: 'auto',
  },
  item: {
    width: 32,
    height: 32,
  },
  textScore: {
    fontFamily: fonts.primary_bold,
    fontSize: fontSizes.xl,
  },
});
