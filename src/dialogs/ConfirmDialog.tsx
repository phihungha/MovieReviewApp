import React from 'react';
import {GenericDialog} from './GenericDialog';
import {ActionCb} from '../types/ActionCb';
import {View} from 'react-native';

export interface ConfirmDialogProps {
  onConfirm: ActionCb;
  openBtnTitle: string;
  title: string;
  message: string;
}

/**
 * Dialog to confirm something.
 * @param {string} openBtnTitle Title of dialog open button
 * @param {string} title Title
 * @param {string} message Message
 * @param {ActionCb} action Action when confirm
 * @example
 * <DeleteCommentDialog
 *   openBtnTitle='Open Dialog'
 *   action={() => console.log('action')} />
 */
export function ConfirmDialog(props: ConfirmDialogProps): JSX.Element {
  const yesPressed = () => props.onConfirm();

  return (
    <View>
      <GenericDialog
        openBtnTitle={props.openBtnTitle}
        title={props.title}
        message={props.message}
        onConfirm={yesPressed}
      />
    </View>
  );
}
