import {Text} from '@rneui/themed';
import React from 'react';
import {Image} from 'react-native';
import {StyleSheet, View} from 'react-native';
import {styles} from '../styles/styles';
import {TextProps} from '../props/TextProps';

export function CriticReviewScoreIndicator(props: TextProps): JSX.Element {
  const uri = '../assets/icons/ic_critic_score.png';
  return (
    <View style={[reviewScoreStyles.container]}>
      <Image
        source={require(uri)}
        style={[reviewScoreStyles.item, styles.marginEnd8]}
      />

      <Text>{props.children}</Text>
    </View>
  );
}

export function UserReviewScoreIndicator(props: TextProps): JSX.Element {
  const uri = '../assets/icons/ic_user_score.png';
  return (
    <View style={[reviewScoreStyles.container]}>
      <Image
        source={require(uri)}
        style={[reviewScoreStyles.item, styles.marginEnd8]}
      />

      <Text>{props.children}</Text>
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
