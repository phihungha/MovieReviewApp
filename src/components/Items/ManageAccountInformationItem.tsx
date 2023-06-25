import React from 'react';
import {StyleSheet, View} from 'react-native';

import {RegularText} from '../Text/RegularText';
import colors from '../../styles/colors';
import {countryList} from '../../dialogs/ChooseCountryBottomSheet';
import {ItemTitleOnly} from './BottomSheetListItem';
import {GenericBottomSheetHandleItemPressDialog} from '../../dialogs/GenericBottomSheetHandleItemPressDialog';
import {typeList} from '../../dialogs/ChooseTypeBottomSheet';
import {genreList} from '../../dialogs/ChooseFavoriteGenresBottomSheet';
import {DatePickerDialog} from '../../dialogs/DatePickerDialog';

export type OnSelectedManageInformation = (item: Date | ItemTitleOnly) => void;
interface ManageItemProps {
  title: string;
  value: string;
  rightIconComponent: React.ReactElement<{}>;
}

/**
 * @using general component for information item in ManageAccountInfo Screen
 * @param {string} title title
 * @param {string} value value want to show
 * @param {React.ReactElement<{}>} rightIconComponent the icon button in the right, it handle event to select many option
 */
export function ManageItem(props: ManageItemProps): JSX.Element {
  return (
    <View style={styles.container}>
      <RegularText>
        {props.title}: {props.value}
      </RegularText>
      {props.rightIconComponent}
    </View>
  );
}

interface ManageListItemProps {
  iconSize?: number;
  iconColor?: string;
  value: string;
  onSelected: OnSelectedManageInformation;
}

/**
 * @using item country for information display in ManageAccount Screen
 * @param {number} iconSize icon's size
 * @param {string} iconColor icon's color
 * @param {string} value value want to show
 * @param {OnSelectedManageInformation} onSelected the action when click on the icon button
 */
export function ManageCountryItem(props: ManageListItemProps): JSX.Element {
  return (
    <ManageItem
      title="Country"
      value={props.value}
      rightIconComponent={
        <GenericBottomSheetHandleItemPressDialog
          onPressItemBottomSheet={props.onSelected}
          listItem={countryList}
          iconName="earth"
          iconColor={props.iconColor}
          iconSize={props.iconSize}
        />
      }
    />
  );
}

/**
 * @using item type for information display in ManageAccount Screen
 * @param {number} iconSize icon's size
 * @param {string} iconColor icon's color
 * @param {string} value value want to show
 * @param {OnSelectedManageInformation} onSelected the action when click on the icon button
 */
export function ManageTypeItem(props: ManageListItemProps): JSX.Element {
  return (
    <ManageItem
      title="Type"
      value={props.value}
      rightIconComponent={
        <GenericBottomSheetHandleItemPressDialog
          onPressItemBottomSheet={props.onSelected}
          listItem={typeList}
          iconName="account-tie"
          iconColor={props.iconColor}
          iconSize={props.iconSize}
        />
      }
    />
  );
}

/**
 * @using item favorite genre for information display in ManageAccount Screen
 * @param {number} iconSize icon's size
 * @param {string} iconColor icon's color
 * @param {string} value value want to show
 * @param {OnSelectedManageInformation} onSelected the action when click on the icon button
 */
export function ManageFavoriteGenreItem(
  props: ManageListItemProps,
): JSX.Element {
  return (
    <ManageItem
      title="Favorite genre"
      value={props.value}
      rightIconComponent={
        <GenericBottomSheetHandleItemPressDialog
          onPressItemBottomSheet={props.onSelected}
          listItem={genreList}
          iconName="view-list"
          iconColor={props.iconColor}
          iconSize={props.iconSize}
        />
      }
    />
  );
}

/**
 * @using item birthday for information display in ManageAccount Screen
 * @param {number} iconSize icon's size
 * @param {string} iconColor icon's color
 * @param {string} value value want to show
 * @param {OnSelectedManageInformation} onSelected the action when click on the icon button
 */
export function ManageBirthdayItem(props: ManageListItemProps): JSX.Element {
  return (
    <ManageItem
      title="Birthday"
      value={props.value}
      rightIconComponent={
        <DatePickerDialog
          onSelectedDate={props.onSelected}
          iconColor={colors.white}
          iconSize={24}
        />
      }
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.mediumBlack,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 12,
  },
});
