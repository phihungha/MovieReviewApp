import React from 'react';
import {ItemTitleOnly} from '../components/Items/BottomSheetListItem';
import {
  GenericBottomSheetHandleItemPressDialog,
  OnPressItem,
} from './GenericBottomSheetHandleItemPressDialog';

const list = [
  {id: 1, title: 'Country 1'},
  {id: 2, title: 'Country 2'},
  {id: 3, title: 'Country 3'},
  {id: 4, title: 'Country 4'},
  {id: 5, title: 'Country 5'},
  {id: 6, title: 'Country 6'},
  {id: 7, title: 'Country 7'},
  {id: 8, title: 'Country 8'},
  {id: 9, title: 'Country 9'},
];

interface ChooseCountryDialogProps {
  onSelectedCountry: OnPressItem;
  iconColor?: string;
  iconSize?: number;
}

/**
 * @using display component as an icon and open bottomSheet to choose country on clicked
 * @param {OnPressItem} onSelectedCountry Receive selection country result
 * @param {string} iconColor icon's color
 * @param {number} iconSize icon's size
 */
export function ChooseCountryBottomSheetDialog(
  props: ChooseCountryDialogProps,
): JSX.Element {
  const onPressItem = (country: ItemTitleOnly) => {
    props.onSelectedCountry(country);
  };
  return (
    <GenericBottomSheetHandleItemPressDialog
      onPressItemBottomSheet={item => onPressItem(item)}
      listItem={list}
      iconName="earth"
      iconColor={props.iconColor}
      iconSize={props.iconSize}
    />
  );
}
