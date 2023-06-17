import React from 'react';
import {ItemTitleOnly} from '../components/Items/BottomSheetListItem';
import {
  GenericBottomSheetHandleItemPressDialog,
  OnPressItem,
} from './GenericBottomSheetHandleItemPressDialog';

export const genreList = [
  {id: 1, title: 'Genre 1'},
  {id: 2, title: 'Genre 2'},
  {id: 3, title: 'Genre 3'},
  {id: 4, title: 'Genre 4'},
  {id: 5, title: 'Genre 5'},
  {id: 6, title: 'Genre 6'},
  {id: 7, title: 'Genre 7'},
  {id: 8, title: 'Genre 8'},
  {id: 9, title: 'Genre 9'},
  {id: 10, title: 'Genre 10'},
  {id: 11, title: 'Genre 11'},
  {id: 12, title: 'Genre 12'},
  {id: 13, title: 'Genre 13'},
  {id: 14, title: 'Genre 14'},
  {id: 15, title: 'Genre 15'},
];

interface ChooseFavoriteGenresDialogProps {
  onSelectedGenre: OnPressItem;
  iconColor?: string;
  iconSize?: number;
}

/**
 * @using display component as an icon and open bottomSheet to choose favorite genre on clicked
 * @param {OnPressItem} onSelectedGenre Receive selection genre result
 * @param {string} iconColor icon's color
 * @param {number} iconSize icon's size
 */
export function ChooseFavoriteGenresBottomSheetDialog(
  props: ChooseFavoriteGenresDialogProps,
): JSX.Element {
  const onPressItem = (genre: ItemTitleOnly) => {
    props.onSelectedGenre(genre);
  };
  return (
    <GenericBottomSheetHandleItemPressDialog
      onPressItemBottomSheet={item => onPressItem(item)}
      listItem={genreList}
      iconName="view-list"
      iconColor={props.iconColor}
      iconSize={props.iconSize}
    />
  );
}
