import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Avatar} from '@rneui/themed';
import {TextLink} from '../../../components/Buttons/TextLink';
import {BigTitleText} from '../../../components/Text/BigTitleText';
import {TitleText} from '../../../components/Text/TitleText';
import {OnSelectedName, ChangeNameDialog} from '../dialogs/ChangeNameDialog';
import {ActionCb} from '../../../types/ActionCb';

interface ManageAccountProfilePictureProps {
  imageUri?: string;
  nameValue: string;
  onSelectedName: OnSelectedName;
  onSelectedImage: ActionCb;
}

/**
 * @using display the profile picture in ManageAccountInfo Screen
 * @param {string} imageUri uri of image
 * @param {string} nameValue name of user
 * @param {OnSelectedName} onSelectedName action clicked when accept changing name from dialog (change name)
 * @param {ActionCb} onSelectedImage action clicked on Edit (change image)
 */
export function ManageAccountProfilePictureDisplay(
  props: ManageAccountProfilePictureProps,
): JSX.Element {
  const uri = 'https://uifaces.co/our-content/donated/6MWH9Xi_.jpg';
  return (
    <View style={styles.container}>
      <View style={styles.titleLine}>
        <BigTitleText>Profile Picture</BigTitleText>
        <TextLink text="" textLink="EDIT" onClicked={props.onSelectedImage} />
      </View>

      <View style={styles.avatarContainer}>
        <Avatar
          size={128}
          rounded
          source={{uri: props.imageUri ? props.imageUri : uri}}
        />

        <TitleText>{props.nameValue}</TitleText>

        <ChangeNameDialog
          openBtnTitle="Change name"
          onSelectedName={props.onSelectedName}
        />
      </View>
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
  avatarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
});
