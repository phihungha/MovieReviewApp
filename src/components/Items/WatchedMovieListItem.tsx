import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TitleText} from '../Text/TitleText';
import {RegularText} from '../Text/RegularText';
import colors from '../../styles/colors';
import {Image} from '@rneui/base';
import {graphql} from 'relay-runtime';
import {WatchedMovieListItem$key} from './__generated__/WatchedMovieListItem.graphql';
import {useFragment} from 'react-relay';

const WatchedMovieListItemFragment = graphql`
  fragment WatchedMovieListItem on Movie {
    id
    title
    posterUrl
    releaseDate
  }
`;

export interface WatchedMovieListItemProps {
  movie: WatchedMovieListItem$key | null;
}

/**
 * Item for a list of watched movies.
 */
export function WatchedMovieListItem({
  movie,
}: WatchedMovieListItemProps): JSX.Element {
  const data = useFragment(WatchedMovieListItemFragment, movie);

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={data?.posterUrl ? {uri: data.posterUrl} : {}}
      />
      <View style={styles.infoContainer}>
        <TitleText>{data?.title ?? 'N/A'}</TitleText>
        <RegularText>{new Date(data?.releaseDate).getFullYear()}</RegularText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    backgroundColor: colors.mediumBlack,
    width: '100%',
    marginHorizontal: 'auto',
  },
  image: {
    width: 80,
    aspectRatio: 0.67,
    borderRadius: 5,
    resizeMode: 'cover',
  },
  infoContainer: {
    paddingLeft: 15,
  },
});
