import React from 'react';

import {ItemTitleOnly} from '../components/Items/BottomSheetListItem';
import {
  GenericBottomSheetHandleItemPressDialog,
  OnPressItem,
} from './GenericBottomSheetHandleItemPressDialog';

const list = [
  {id: 1, title: 'Critic'},
  {id: 2, title: 'Regular'},
];

interface ChooseFavoriteGenresDialogProps {
  onSelectedType: OnPressItem;
  iconColor?: string;
  iconSize?: number;
}

/**
 * @using display component as an icon and open bottomSheet to choose user type on clicked
 * @param {OnPressItem} onSelectedType Receive selection user type result
 * @param {string} iconColor icon's color
 * @param {number} iconSize icon's size
 */
export function ChooseTypeBottomSheet(
  props: ChooseFavoriteGenresDialogProps,
): JSX.Element {
  const onPressItem = (type: ItemTitleOnly) => {
    props.onSelectedType(type);
  };
  return (
    <GenericBottomSheetHandleItemPressDialog
      onPressItemBottomSheet={item => onPressItem(item)}
      listItem={list}
      iconName="account-tie"
      iconColor={props.iconColor}
      iconSize={props.iconSize}
    />
  );
}
