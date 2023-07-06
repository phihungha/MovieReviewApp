import React from 'react';
import {StyleSheet, View} from 'react-native';
import {CreateReviewInfoDetail} from './CreateReviewInfoDetail';
import {CreateReviewRating, OnRating} from './CreateReviewRating';
import {RegularText} from '../../../components/Text/RegularText';
import colors from '../../../styles/colors';

interface CreateReviewInfoDisplayProps {
  imageUri?: string;
  movieName: string;
  movieYear: number;
  criticScore: number;
  userScore: number;
  genres: string;
  onRating: OnRating;
}

/**
 * @using display detail info and rating of the movie for CreateReviewScreen
 * @param {string} imageUri uri of image
 * @param {string} movieName name of movie
 * @param {number} movieYear movie's release year
 * @param {number} criticScore score of critic user
 * @param {number} userScore score of regular user
 * @param {string} genres genres of movie
 * @param {OnRating} onRating action when rating
 */
export function CreateReviewInfoDisplay(
  props: CreateReviewInfoDisplayProps,
): JSX.Element {
  return (
    <View style={styles.container}>
      <CreateReviewInfoDetail
        movieName={props.movieName}
        movieYear={props.movieYear}
        criticScore={props.criticScore}
        userScore={props.userScore}
        imageUri={props.imageUri}
      />

      <View style={styles.textContainer}>
        <RegularText style={{color: colors.lightGrey}}>Genre: </RegularText>
        <RegularText>{props.genres}</RegularText>
      </View>

      <CreateReviewRating onRating={props.onRating} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    width: '100%',
    gap: 8,

    paddingHorizontal: 32,
  },
  textContainer: {
    flexDirection: 'row',
  },
});
