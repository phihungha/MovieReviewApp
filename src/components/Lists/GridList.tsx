import React from 'react';
import {FlatList, FlatListProps, StyleSheet} from 'react-native';
import {VerticalListItemSeparator} from '../ListItemSeparators/MovieListItemSeparators';
import {StandardLoadingIcon} from '../Display/StandardLoadingIcon';

export type GridListProps = FlatListProps<any> & {isLoading?: boolean};

export function GridList(props: GridListProps): JSX.Element {
  return (
    <FlatList
      ListHeaderComponent={props.ListHeaderComponent}
      columnWrapperStyle={styles.gridRow}
      numColumns={2}
      ItemSeparatorComponent={VerticalListItemSeparator}
      ListFooterComponent={
        <StandardLoadingIcon isLoading={props.isLoading ?? false} />
      }
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  gridRow: {
    gap: 5,
    justifyContent: 'space-between',
  },
});
