import React, {Suspense, useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {CommentList} from './components/CommentList';
import {graphql} from 'relay-runtime';
import {PreloadedQueriesContext} from '../../relay/PreloadedQueriesContext';
import {usePreloadedQuery} from 'react-relay';
import {ReviewDetailsQuery$data} from './__generated__/ReviewDetailsQuery.graphql';
import {ReviewListItem} from '../../components/Items/ReviewListItem/ReviewListItem';
import {CommentCreator} from './components/CommentCreator';
import {StandardLoadingIcon} from '../../components/Display/StandardLoadingIcon';
import {MovieInfoDisplay} from '../../components/Display/MovieInfoDisplay';

export const ReviewDetailsQuery = graphql`
  query ReviewDetailsQuery($id: ID!) {
    review(id: $id) {
      movie {
        ...MovieInfoDisplay
      }
      ...ReviewListItem
      ...CommentList
    }
  }
`;

export function ReviewDetailsScreen(): React.JSX.Element {
  const preloadedQueries = useContext(PreloadedQueriesContext);

  if (!preloadedQueries?.ReviewDetails.queryRef) {
    return <></>;
  }

  return <ReviewDetailsScreenWithData />;
}

export function ReviewDetailsScreenWithData(): React.JSX.Element {
  const preloadedQueries = useContext(PreloadedQueriesContext);
  const data = usePreloadedQuery(
    ReviewDetailsQuery,
    preloadedQueries!.ReviewDetails.queryRef!,
  );
  const review = data.review;

  return (
    <View style={styles.container}>
      <Suspense fallback={<StandardLoadingIcon />}>
        <CommentList
          review={review}
          ListHeaderComponent={<ListHeader data={data} />}
        />
      </Suspense>
    </View>
  );
}

function ListHeader({
  data,
}: {
  data: ReviewDetailsQuery$data;
}): React.JSX.Element {
  return (
    <View style={styles.headerContainer}>
      <MovieInfoDisplay
        movie={data.review?.movie ?? null}
        displayScore={true}
      />
      <ReviewListItem canEdit={true} onPress={null} review={data.review} />
      <CommentCreator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  headerContainer: {
    gap: 20,
    paddingVertical: 12,
  },
});
