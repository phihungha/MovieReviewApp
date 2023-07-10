import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useFragment} from 'react-relay';
import {graphql} from 'relay-runtime';
import {UserWatchedOverviewList$key} from './__generated__/UserWatchedOverviewList.graphql';
import {WatchedMovieListItem} from '../../../components/Items/WatchedMovieListItem';

const UserWatchedOverviewListFragment = graphql`
  fragment UserWatchedOverviewList on User {
    viewedMovies(first: 3) {
      edges {
        node {
          id
          ...WatchedMovieListItem
        }
      }
    }
  }
`;

export interface UserWatchedOverviewListProps {
  user: UserWatchedOverviewList$key | null;
}

export function UserWatchedOverviewList({user}: UserWatchedOverviewListProps) {
  const data = useFragment(UserWatchedOverviewListFragment, user);

  return (
    <View style={styles.container}>
      {data?.viewedMovies.edges.map(i => (
        <WatchedMovieListItem key={i?.node.id} movie={i?.node ?? null} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
});
