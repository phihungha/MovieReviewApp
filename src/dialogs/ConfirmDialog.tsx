import React from 'react';
import {GenericDialog} from './GenericDialog';
import {ActionCb} from '../types/ActionCb';
import {View} from 'react-native';
import {CustomButtonCb} from '../types/CustomButtonCb';

export interface ConfirmDialogProps {
  title: string;
  onOk?: ActionCb;
  message?: string;
  openBtnTitle?: string;
  customOpenButton?: CustomButtonCb;
}

/**
 * Dialog to confirm something.
 * @param {string} title Title of the dialog
 * @param {string?} message Message
 * @param {string?} openBtnTitle Title of dialog open button
 * @param {ActionCb?} onOk Action on pressing Ok
 * @param {CustomButtonCb} customOpenButton Custom open button
 */
export function ConfirmDialog(props: ConfirmDialogProps): JSX.Element {
  const yesPressed = () => props.onOk?.();

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
