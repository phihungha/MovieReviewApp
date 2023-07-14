import React from 'react';
import {OnChangedCb} from '../../../types/OnChangedCb';
import {StyleSheet, View} from 'react-native';
import {Input} from '@rneui/themed';
import {ReviewScoreInput} from './ReviewScoreInput';
import validator from 'validator';

export interface ReviewEditorProps {
  title: string;
  onTitleChanged: OnChangedCb<string>;
  externalUrl?: string;
  onExternalUrlChanged: OnChangedCb<string | undefined>;
  content: string;
  onContentChanged: OnChangedCb<string>;
  score: number;
  onScoreChanged: OnChangedCb<number>;
  displayError?: boolean;
}

export function ReviewEditor(props: ReviewEditorProps) {
  return (
    <View style={styles.container}>
      <ReviewScoreInput
        score={props.score}
        onScoreChanged={props.onScoreChanged}
      />
      <Input
        value={props.title}
        onChangeText={props.onTitleChanged}
        errorMessage={
          props.displayError && props.title === ''
            ? 'Title cannot be empty'
            : undefined
        }
        placeholder="Enter a title..."
        label="Title"
      />
      <Input
        value={props.externalUrl}
        onChangeText={i => props.onExternalUrlChanged(i === '' ? undefined : i)}
        errorMessage={
          props.displayError &&
          props.externalUrl &&
          !validator.isURL(props.externalUrl)
            ? 'Invalid URL'
            : undefined
        }
        placeholder="Enter a URL to an external webpage..."
        label="External URL"
      />
      <Input
        value={props.content}
        onChangeText={props.onContentChanged}
        placeholder="Enter what you think about this film..."
        errorMessage={
          props.displayError && props.content === ''
            ? 'Content cannot be empty'
            : undefined
        }
        label="Content"
        inputStyle={styles.contentInputContainer}
        style={styles.contentInput}
        multiline
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 20,
  },
  contentInput: {
    textAlignVertical: 'top',
  },
  contentInputContainer: {
    height: 130,
  },
});
