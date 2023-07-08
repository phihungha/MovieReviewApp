import React from 'react';
import {graphql} from 'relay-runtime';
import {CommentList$key} from './__generated__/CommentList.graphql';
import {usePaginationFragment} from 'react-relay';
import {VerticalList} from '../../../components/Lists/VerticalList';
import {CommentListItem} from '../../../components/Items/CommentListItem/CommentListItem';
import {StyleSheet, View} from 'react-native';

const CommentListFragment = graphql`
  fragment CommentList on Review
  @argumentDefinitions(
    cursor: {type: "ID"}
    count: {type: "Int", defaultValue: 8}
  )
  @refetchable(queryName: "CommentListRefetchQuery") {
    comments(after: $cursor, first: $count)
      @connection(key: "CommentListFragment_comments") {
      edges {
        node {
          id
          ...CommentListItem
        }
      }
    }
  }
`;

export interface CommentListProps {
  review: CommentList$key | null;
  ListHeaderComponent?:
    | React.ComponentType<any>
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | null;
}

export function CommentList(props: CommentListProps) {
  const {data, loadNext, isLoadingNext} = usePaginationFragment(
    CommentListFragment,
    props.review,
  );
  return (
    <View>
      <VerticalList
        ListHeaderComponent={props.ListHeaderComponent}
        data={data?.comments.edges}
        isLoading={isLoadingNext}
        onEndReached={() => loadNext(8)}
        keyExtractor={item => item?.node.id ?? '0'}
        contentContainerStyle={styles.container}
        renderItem={({item}) => (
          <CommentListItem comment={item?.node ?? null} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 12,
  },
});
