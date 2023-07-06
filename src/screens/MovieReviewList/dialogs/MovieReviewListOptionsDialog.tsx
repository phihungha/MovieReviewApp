import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {GenericDialog} from '../../../dialogs/GenericDialog';
import {useState} from 'react';
import {Input} from '@rneui/themed';
import {CustomButtonCb} from '../../../types/CustomButtonCb';
import {
  ReviewSortBy,
  SortDirection,
} from '../components/__generated__/CriticReviewListRefetchQuery.graphql';

export interface MovieReviewListOptions {
  minScore?: number;
  maxScore?: number;
  sortBy: ReviewSortBy;
  sortDirection: SortDirection;
}

type MovieReviewListOptionsKey = keyof MovieReviewListOptions;

export interface MovieReviewListOptionsDialogProps {
  options: MovieReviewListOptions;
  onOptionsChanged?: (selectedOptions: MovieReviewListOptions) => void;
  customOpenButton?: CustomButtonCb;
}

export function MovieReviewListOptionsDialog(
  props: MovieReviewListOptionsDialogProps,
): React.JSX.Element {
  const [options, setOptions] = useState<MovieReviewListOptions>(props.options);

  function updateOption(
    optionName: MovieReviewListOptionsKey,
    newValue: string | number,
  ): void {
    setOptions(o => getUpdatedOptions(o, optionName, newValue));
  }

  return (
    <GenericDialog
      title="Options"
      onOk={() => props.onOptionsChanged?.(options)}
      containerStyle={styles.mainContainer}
      customOpenButton={props.customOpenButton}>
      <ScrollView>
        <Input
          label="Min score"
          value={options.minScore?.toString()}
          onChangeText={i => updateOption('minScore', +i)}
        />
        <Input
          label="Max score"
          value={options.maxScore?.toString()}
          onChangeText={i => updateOption('maxScore', +i)}
        />
        <Input
          label="Sort by"
          value={options.sortBy}
          onChangeText={i => updateOption('sortBy', i)}
        />
        <Input
          label="Sort direction"
          value={options.sortDirection}
          onChangeText={i => updateOption('sortDirection', i)}
        />
      </ScrollView>
    </GenericDialog>
  );
}

function getUpdatedOptions(
  oldOptions: MovieReviewListOptions,
  optionName: MovieReviewListOptionsKey,
  newValue?: string | number,
): MovieReviewListOptions {
  if (typeof newValue === 'number' && isNaN(newValue)) {
    return oldOptions;
  }
  return {...oldOptions, [optionName]: newValue};
}

const styles = StyleSheet.create({
  mainContainer: {
    height: 450,
  },
});
