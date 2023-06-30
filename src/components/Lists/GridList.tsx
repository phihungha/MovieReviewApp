import {
  ActivityIndicator,
  FlatList,
  FlatListProps,
  StyleSheet,
} from 'react-native';
import {VerticalMovieListItemSeparator} from '../ListItemSeparators/MovieListItemSeparators';

export type GridListProps = FlatListProps<any> & {isLoading?: boolean};

export function GridList(props: GridListProps) {
  return (
    <FlatList
      ListHeaderComponent={props.ListHeaderComponent}
      columnWrapperStyle={styles.gridRow}
      numColumns={2}
      ItemSeparatorComponent={VerticalMovieListItemSeparator}
      ListFooterComponent={
        <ActivityIndicator hidesWhenStopped animating={props.isLoading} />
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
