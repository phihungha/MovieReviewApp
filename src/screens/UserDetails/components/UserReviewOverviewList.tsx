import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useFragment} from 'react-relay';
import {graphql} from 'relay-runtime';
import {UserReviewOverviewList$key} from './__generated__/UserReviewOverviewList.graphql';
import {ReviewListItem} from '../../../components/Items/ReviewListItem/ReviewListItem';

const UserReviewOverviewListFragment = graphql`
  fragment UserReviewOverviewList on User {
    reviews(first: 3) {
      edges {
        node {
          id
          ...ReviewListItem
        }
      }
    }
  }
`;

export interface UserReviewOverviewListProps {
  user: UserReviewOverviewList$key | null;
}

export function UserReviewOverviewList({user}: UserReviewOverviewListProps) {
  const data = useFragment(UserReviewOverviewListFragment, user);

  return (
    <View style={styles.container}>
      {data?.reviews.edges.map(i => (
        <ReviewListItem key={i?.node.id} review={i?.node ?? null} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
});
