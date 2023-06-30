import {ActivityIndicator, FlatList, FlatListProps} from 'react-native';
import {HorizontalMovieListItemSeparator} from '../ListItemSeparators/MovieListItemSeparators';

export type HorizontalListProps = FlatListProps<any> & {isLoading?: boolean};

export function HorizontalList(props: HorizontalListProps) {
  return (
    <FlatList
      ListHeaderComponent={props.ListHeaderComponent}
      horizontal
      ItemSeparatorComponent={HorizontalMovieListItemSeparator}
      ListFooterComponent={
        <ActivityIndicator hidesWhenStopped animating={props.isLoading} />
      }
      {...props}
    />
  );
}
