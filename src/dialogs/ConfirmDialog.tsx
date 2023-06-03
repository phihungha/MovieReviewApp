import React from 'react';
import {GenericDialog} from './GenericDialog';
import {ActionCb} from '../types/ActionCb';
import {View} from 'react-native';

export interface ConfirmDialogProps {
  onOk: ActionCb;
  openBtnTitle: string;
  title: string;
  message: string;
}

/**
 * Dialog to confirm something.
 * @param {string} openBtnTitle Title of dialog open button
 * @param {string} title Title of the dialog
 * @param {string} message Message
 * @param {ActionCb} onOk Action on pressing Ok
 * @example
 * <DeleteCommentDialog
 *   openBtnTitle='Open Dialog'
 *   onOk={() => console.log('action')} />
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
      />
    </View>
  );
}
