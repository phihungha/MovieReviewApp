import React, {useState} from 'react';
import {GenericBottomSheetDialog} from './GenericBottomSheetDialog';
import {
  BottomSheetListItem,
  ItemData,
} from '../components/Items/BottomSheetListItem';

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
  {id: 10, title: 'Country 10'},
  {id: 11, title: 'Country 11'},
  {id: 12, title: 'Country 12'},
  {id: 13, title: 'Country 13'},
  {id: 14, title: 'Country 14'},
  {id: 15, title: 'Country 15'},
];

type OnSelectedCountry = (country: ItemData) => void;

interface ChooseCountryDialogProps {
  onSelectedCountry: OnSelectedCountry;
  iconColor?: string;
  iconSize?: number;
}

export function ChooseCountryBottomSheetDialog(
  props: ChooseCountryDialogProps,
): JSX.Element {
  const [visible, setVisible] = useState(false);
  const [selectItem, setSelectedItem] = useState({});

  const renderItem = ({item}: {item: ItemData}) => {
    return (
      <BottomSheetListItem
        item={item}
        onPressItem={() => onPressItem({item})}
      />
    );
  };
  const keyExtractor = (item: any) => {
    return item.title;
  };

  const closeDialog = () => {
    setVisible(false);
  };
  const openDialog = () => {
    setVisible(true);
  };
  const onBackdropPress = () => {
    closeDialog();
  };
  const onPressItem = ({item}: {item: ItemData}) => {
    setSelectedItem(item);
    console.log(selectItem);
    props.onSelectedCountry(item);
    closeDialog();
  };
  return (
    <GenericBottomSheetDialog
      iconName="earth"
      iconColor={props.iconColor}
      iconSize={props.iconSize}
      listItem={list}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      onPressIcon={openDialog}
      onBackdropPress={onBackdropPress}
      isVisible={visible}
    />
  );
}
