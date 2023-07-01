import {Avatar} from '@rneui/themed';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TitleText} from '../Text/TitleText';
import {RegularText} from '../Text/RegularText';
import colors from '../../styles/colors';
import {CriticReviewScoreIndicator} from './CriticReviewScoreIndicator';
import {RegularReviewScoreIndicator} from './RegularReviewScoreIndicator';

interface CreateReviewInfoDetailProps {
  imageUri?: string;
  movieName: string;
  movieYear: number;
  criticScore: number;
  userScore: number;
}

/**
 * @using display the info detail of the movie for CreateReviewScreen
 * @param {string} imageUri uri of image
 * @param {string} movieName name of movie
 * @param {number} movieYear movie's release year
 * @param {number} criticScore score of critic user
 * @param {number} userScore score of regular user
 */
export function CreateReviewInfoDetail(
  props: CreateReviewInfoDetailProps,
): JSX.Element {
  const uri = 'https://uifaces.co/our-content/donated/6MWH9Xi_.jpg';
  return (
    <View style={styles.infoContainer}>
      <Avatar
        size={96}
        avatarStyle={{borderRadius: 16}}
        source={{uri: props.imageUri ? props.imageUri : uri}}
      />

      <View style={styles.detailsContainer}>
        <TitleText>{props.movieName}</TitleText>
        <RegularText style={{color: colors.lightGrey}}>
          {props.movieYear}
        </RegularText>
        <View style={styles.scoreContainer}>
          <CriticReviewScoreIndicator score={props.criticScore} />
          <RegularReviewScoreIndicator score={props.userScore} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    gap: 20,
  },
  detailsContainer: {},
  scoreContainer: {
    flexDirection: 'row',
    gap: 32,
  },
});
