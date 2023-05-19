import React from 'react';
import {Dialog} from '@rneui/themed';
import {StyleSheet} from 'react-native';
import colors from '../styles/colors';
import {fontSizes, fonts} from '../styles/typography';
import {ActionCb} from '../types/ActionCb';

export interface DialogButtonProps {
  onPress: ActionCb;
}

export function OkDialogButton(props: DialogButtonProps) {
  return (
    <Dialog.Button
      title="OK"
      buttonStyle={styles.yesDialogButton}
      titleStyle={styles.subTextDialog}
      onPress={props.onPress}
    />
  );
}

export function CancelDialogButton(props: DialogButtonProps) {
  return (
    <Dialog.Button
      title="CANCEL"
      buttonStyle={styles.noDialogButton}
      titleStyle={styles.subTextDialog}
      onPress={props.onPress}
    />
  );
}

const styles = StyleSheet.create({
  yesDialogButton: {
    borderRadius: 12,
    backgroundColor: colors.primary,
    paddingVertical: 4,
    paddingHorizontal: 32,
  },
  noDialogButton: {
    borderRadius: 12,
    backgroundColor: 'none',
    borderWidth: 0.5,
    borderColor: colors.white,
    paddingVertical: 4,
    paddingHorizontal: 32,
  },
  titleTextDialog: {
    color: colors.white,
    fontFamily: fonts.primaryBold,
    fontSize: fontSizes.lg,
    textAlign: 'left',
  },
  subTextDialog: {
    color: colors.white,
    fontFamily: fonts.primary,
    fontSize: fontSizes.md,
    textAlign: 'left',
  },
});
