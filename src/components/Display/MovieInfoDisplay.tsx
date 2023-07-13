import React from 'react';
import {ImageStyle, StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {RegularText} from '../Text/RegularText';
import {CriticReviewScoreIndicator} from './CriticReviewScoreIndicator';
import {RegularReviewScoreIndicator} from './RegularReviewScoreIndicator';
import {graphql} from 'relay-runtime';
import {useFragment} from 'react-relay';
import {MoviePoster} from './MoviePoster';
import {MovieInfoDisplay$key} from './__generated__/MovieInfoDisplay.graphql';
import {SectionText} from '../Text/SectionText';

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
  displayScore?: boolean;
  infoContainerStyle?: StyleProp<ViewStyle>;
  moviePosterStyle?: StyleProp<ImageStyle>;
}

export function MovieInfoDisplay(
  props: MovieInfoDisplayProps,
): React.JSX.Element {
  const data = useFragment(MovieInfoDisplayFragment, props.movie);

  return (
    <View style={styles.container}>
      <MoviePoster
        style={[styles.moviePoster, props.moviePosterStyle]}
        imageUrl={data?.posterUrl}
      />
      <View style={[styles.infoContainer, props.infoContainerStyle]}>
        <SectionText>{data?.title ?? 'N/A'}</SectionText>
        <RegularText>{new Date(data?.releaseDate).getFullYear()}</RegularText>
        {props.displayScore && (
          <View style={styles.scoreContainer}>
            <CriticReviewScoreIndicator score={data?.criticScore} />
            <RegularReviewScoreIndicator score={data?.regularScore} />
          </View>
        )}
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
