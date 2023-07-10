import React, {ReactNode} from 'react';
import {FlatList, FlatListProps, StyleSheet, View} from 'react-native';
import {HorizontalListItemSeparator} from '../ListItemSeparators/MovieListItemSeparators';
import {StandardLoadingIcon} from '../Display/StandardLoadingIcon';
import {fontSizes} from '../../styles/typography';
import colors from '../../styles/colors';
import {Text} from 'react-native';

export type HorizontalListProps = FlatListProps<any> & {
  isLoading?: boolean;
  emptyContent?: ReactNode;
};

export function HorizontalList(props: HorizontalListProps): JSX.Element {
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
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  emptyMessage: {
    fontSize: fontSizes.lg,
    color: colors.lightGrey,
  },
});
