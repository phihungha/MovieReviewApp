import React from 'react';
import {OnChangedCb} from '../../../types/OnChangedCb';
import {StyleSheet, View} from 'react-native';
import {Input} from '@rneui/themed';
import {ReviewScoreInput} from './ReviewScoreInput';

export interface ReviewEditorProps {
  title: string;
  onTitleChanged: OnChangedCb<string>;
  externalUrl?: string;
  onExternalUrlChanged: OnChangedCb<string | undefined>;
  content: string;
  onContentChanged: OnChangedCb<string>;
  score: number;
  onScoreChanged: OnChangedCb<number>;
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
        placeholder="Enter a title..."
        label="Title"
        renderErrorMessage={false}
      />

      <Input
        value={props.externalUrl}
        onChangeText={i => props.onExternalUrlChanged(i === '' ? undefined : i)}
        placeholder="Enter a URL to an external webpage..."
        label="External URL"
        renderErrorMessage={false}
      />

      <Input
        value={props.content}
        onChangeText={props.onContentChanged}
        placeholder="Enter what you think about this film..."
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
