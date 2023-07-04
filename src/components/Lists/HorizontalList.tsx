import React from 'react';
import {FlatList, FlatListProps} from 'react-native';
import {HorizontalMovieListItemSeparator} from '../ListItemSeparators/MovieListItemSeparators';
import {StandardLoadingIcon} from '../Display/StandardLoadingIcon';

export type HorizontalListProps = FlatListProps<any> & {isLoading?: boolean};

export function HorizontalList(props: HorizontalListProps): JSX.Element {
  return (
    <FlatList
      ListHeaderComponent={props.ListHeaderComponent}
      horizontal
      ItemSeparatorComponent={HorizontalMovieListItemSeparator}
      ListFooterComponent={<StandardLoadingIcon isLoading={props.isLoading} />}
      {...props}
    />
  );
}
