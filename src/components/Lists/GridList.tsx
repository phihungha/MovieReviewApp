import React, {ReactNode} from 'react';
import {FlatList, FlatListProps, StyleSheet, Text, View} from 'react-native';
import {VerticalListItemSeparator} from '../ListItemSeparators/MovieListItemSeparators';
import {StandardLoadingIcon} from '../Display/StandardLoadingIcon';
import {fontSizes} from '../../styles/typography';
import colors from '../../styles/colors';

export type GridListProps = FlatListProps<any> & {
  isLoading?: boolean;
  emptyContent?: ReactNode;
};

export function GridList(props: GridListProps): JSX.Element {
  if (!props.data || props.data.length === 0) {
    return (
      <View style={styles.container}>
        {props.emptyContent ? (
          props.emptyContent
        ) : (
          <Text style={styles.emptyMessage}>There is nothing here!</Text>
        )}
      </View>
    );
  }

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
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyMessage: {
    fontSize: fontSizes.xl,
    color: colors.lightGrey,
  },
});
