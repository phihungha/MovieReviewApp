import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TitleText} from '../Text/TitleText';
import {RegularText} from '../Text/RegularText';
import {CriticReviewScoreIndicator} from './CriticReviewScoreIndicator';
import {RegularReviewScoreIndicator} from './RegularReviewScoreIndicator';
import {graphql} from 'relay-runtime';
import {useFragment} from 'react-relay';
import {MoviePoster} from './MoviePoster';
import {MovieInfoDisplay$key} from './__generated__/MovieInfoDisplay.graphql';

const MovieInfoDisplayFragment = graphql`
  fragment MovieInfoDisplay on Movie {
    posterUrl
    title
    releaseDate
    criticScore
    regularScore
  }
`;

interface MovieInfoDisplayProps {
  movie: MovieInfoDisplay$key | null;
}

export function MovieInfoDisplay({
  movie,
}: MovieInfoDisplayProps): React.JSX.Element {
  const data = useFragment(MovieInfoDisplayFragment, movie);

  return (
    <View style={styles.container}>
      <MoviePoster style={styles.moviePoster} imageUrl={data?.posterUrl} />
      <View style={styles.infoContainer}>
        <TitleText>{data?.title ?? 'N/A'}</TitleText>
        <RegularText>{new Date(data?.releaseDate).getFullYear()}</RegularText>
        <View style={styles.scoreContainer}>
          <CriticReviewScoreIndicator score={data?.criticScore} />
          <RegularReviewScoreIndicator score={data?.regularScore} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  moviePoster: {
    width: 80,
  },
  infoContainer: {
    gap: 5,
  },
  scoreContainer: {
    flexDirection: 'row',
    gap: 32,
  },
});
