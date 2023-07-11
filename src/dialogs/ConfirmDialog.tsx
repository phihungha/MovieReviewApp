import React from 'react';
import {GenericDialog} from './GenericDialog';
import {ActionCb} from '../types/ActionCb';
import {View} from 'react-native';
import {CustomButtonCb} from '../types/CustomButtonCb';

export interface ConfirmDialogProps {
  onOk: ActionCb;
  openBtnTitle: string;
  title: string;
  message: string;
  customOpenButton?: CustomButtonCb;
}

/**
 * Dialog to confirm something.
 * @param {string} openBtnTitle Title of dialog open button
 * @param {string} title Title of the dialog
 * @param {string} message Message
 * @param {ActionCb} onOk Action on pressing Ok
 */
export function ConfirmDialog(props: ConfirmDialogProps): JSX.Element {
  const yesPressed = () => props.onOk();

  return (
    <View>
      <GenericDialog
        openBtnTitle={props.openBtnTitle}
        title={props.title}
        message={props.message}
        onOk={yesPressed}
        customOpenButton={props.customOpenButton}
      />
    </View>
  );
}
