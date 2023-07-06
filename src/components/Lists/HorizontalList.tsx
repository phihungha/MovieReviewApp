import React from 'react';
import {FlatList, FlatListProps, StyleSheet} from 'react-native';
import {HorizontalListItemSeparator} from '../ListItemSeparators/MovieListItemSeparators';
import {StandardLoadingIcon} from '../Display/StandardLoadingIcon';

export type HorizontalListProps = FlatListProps<any> & {isLoading?: boolean};

export function HorizontalList(props: HorizontalListProps): JSX.Element {
  return (
    <FlatList
      style={styles.list}
      ListHeaderComponent={props.ListHeaderComponent}
      horizontal
      ItemSeparatorComponent={HorizontalListItemSeparator}
      ListFooterComponent={
        <StandardLoadingIcon isLoading={props.isLoading ?? false} />
      }
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    flexGrow: 0,
  },
});
