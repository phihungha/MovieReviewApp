import React from 'react';
import {FlatList, FlatListProps} from 'react-native';
import {VerticalListItemSeparator} from '../ListItemSeparators/MovieListItemSeparators';
import {StandardLoadingIcon} from '../Display/StandardLoadingIcon';

export type VerticalListProps = FlatListProps<any> & {isLoading?: boolean};

export function VerticalList(props: VerticalListProps): JSX.Element {
  return (
    <FlatList
      ListHeaderComponent={props.ListHeaderComponent}
      ItemSeparatorComponent={VerticalListItemSeparator}
      ListFooterComponent={
        <StandardLoadingIcon isLoading={props.isLoading ?? false} />
      }
      {...props}
    />
  );
}
