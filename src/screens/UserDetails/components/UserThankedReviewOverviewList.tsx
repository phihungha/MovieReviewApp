import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useFragment} from 'react-relay';
import {graphql} from 'relay-runtime';
import {ReviewListItem} from '../../../components/Items/ReviewListItem/ReviewListItem';
import {UserThankedReviewOverviewList$key} from './__generated__/UserThankedReviewOverviewList.graphql';

const UserThankedReviewOverviewListFragment = graphql`
  fragment UserThankedReviewOverviewList on User {
    reviewThanks(first: 3) {
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
  user: UserThankedReviewOverviewList$key | null;
}

export function UserThankedReviewOverviewList({
  user,
}: UserReviewOverviewListProps) {
  const data = useFragment(UserThankedReviewOverviewListFragment, user);

  return (
    <View style={styles.container}>
      {data?.reviewThanks.edges.map(i => (
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
