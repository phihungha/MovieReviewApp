import React from 'react';
import {graphql} from 'relay-runtime';
import {RegularText} from '../../../components/Text/RegularText';
import {GenreListItem$key} from './__generated__/GenreListItem.graphql';
import {useFragment} from 'react-relay';
import {StyleSheet} from 'react-native';
import colors from '../../../styles/colors';

const GenreListItemFragment = graphql`
  fragment GenreListItem on Genre {
    name
  }
`;

export interface GenreListItemProps {
  genre: GenreListItem$key | null;
}

export function GenreListItem({genre}: GenreListItemProps): React.JSX.Element {
  const data = useFragment(GenreListItemFragment, genre);
  return <RegularText style={styles.text}>{data?.name ?? 'N/A'}</RegularText>;
}

const styles = StyleSheet.create({
  text: {
    backgroundColor: colors.mediumBlack,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },
});
