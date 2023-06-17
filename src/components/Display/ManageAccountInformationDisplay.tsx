import React from 'react';
import {StyleSheet, View} from 'react-native';

import {BigTitleText} from '../Text/BigTitleText';
import {
  ManageBirthdayItem,
  ManageCountryItem,
  ManageFavoriteGenreItem,
  ManageTypeItem,
  OnSelectedManageInformation,
} from '../Items/ManageAccountInformationItem';
import colors from '../../styles/colors';

interface ManageAccountInformationProps {
  iconSize?: number;
  iconColor?: string;
  countryValue: string;
  typeValue: string;
  favoriteGenreValue: string;
  birthdayValue: string;
  onSelectedCountry: OnSelectedManageInformation;
  onSelectedType: OnSelectedManageInformation;
  onSelectedFavoriteGenre: OnSelectedManageInformation;
  onSelectedDate: OnSelectedManageInformation;
}

/**
 * @using display the profile picture in ManageAccountInfo Screen
 * @param {number} iconSize icon's size
 * @param {string} iconColor icon's color
 * @param {string} countryValue value want to show
 * @param {string} typeValue value want to show
 * @param {string} favoriteGenreValue value want to show
 * @param {string} birthdayValue value want to show
 * @param {OnSelectedManageInformation} onSelectedCountry action when selected another value
 * @param {OnSelectedManageInformation} onSelectedType action when selected another value
 * @param {OnSelectedManageInformation} onSelectedFavoriteGenre action when selected another value
 * @param {OnSelectedManageInformation} onSelectedDate action when selected another value
 */
export function ManageAccountInformationDisplay(
  props: ManageAccountInformationProps,
): JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.titleLine}>
        <BigTitleText>Information</BigTitleText>
      </View>
      <ManageBirthdayItem
        iconSize={24}
        iconColor={colors.white}
        value={props.birthdayValue}
        onSelected={props.onSelectedDate}
      />
      <ManageCountryItem
        iconSize={24}
        iconColor={colors.white}
        value={props.countryValue}
        onSelected={props.onSelectedCountry}
      />
      <ManageTypeItem
        iconSize={24}
        iconColor={colors.white}
        value={props.typeValue}
        onSelected={props.onSelectedType}
      />
      <ManageFavoriteGenreItem
        iconSize={24}
        iconColor={colors.white}
        value={props.favoriteGenreValue}
        onSelected={props.onSelectedFavoriteGenre}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    gap: 12,
  },
  titleLine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
