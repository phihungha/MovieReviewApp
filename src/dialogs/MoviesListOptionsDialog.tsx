import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {GenericDialog} from './GenericDialog';
import {useState} from 'react';
import {Input} from '@rneui/themed';
import type {
  SortDirection,
  MovieSortBy,
} from '../components/Lists/__generated__/AllMovieListRefetchQuery.graphql';
import {CustomButtonCb} from '../types/CustomButtonCb';
export type MoviesListSortDirection = 'Asc' | 'Desc';

export interface MoviesListOptions {
  releaseYear?: number;
  genres?: string[];
  minCriticScore?: number;
  maxCriticScore?: number;
  minRegularScore?: number;
  maxRegularScore?: number;
  sortBy: MovieSortBy;
  sortDirection: SortDirection;
}

type MovieListOptionsKey = keyof MoviesListOptions;

export interface MoviesListOptionsDialogProps {
  onOk?: (selectedOptions: MoviesListOptions) => void;
  customOpenButton?: CustomButtonCb;
}

export function MoviesListOptionsDialog(
  props: MoviesListOptionsDialogProps,
): React.JSX.Element {
  const [options, setOptions] = useState<MoviesListOptions>({
    sortBy: 'releaseDate',
    sortDirection: 'Desc',
  });

  function updateOption(
    optionName: MovieListOptionsKey,
    newValue: string | number,
  ): void {
    setOptions(o => getUpdatedOptions(o, optionName, newValue));
  }

  return (
    <GenericDialog
      title="Options"
      onOk={() => props.onOk?.(options)}
      containerStyle={styles.mainContainer}
      customOpenButton={props.customOpenButton}>
      <ScrollView>
        <Input
          label="Release year"
          value={options.releaseYear?.toString()}
          onChangeText={i => updateOption('releaseYear', +i)}
        />
        <Input
          label="Min critic score"
          value={options.minCriticScore?.toString()}
          onChangeText={i => updateOption('minCriticScore', +i)}
        />
        <Input
          label="Max critic score"
          value={options.maxCriticScore?.toString()}
          onChangeText={i => updateOption('maxCriticScore', +i)}
        />
        <Input
          label="Min user score"
          value={options.minRegularScore?.toString()}
          onChangeText={i => updateOption('minRegularScore', +i)}
        />
        <Input
          label="Max user score"
          value={options.maxRegularScore?.toString()}
          onChangeText={i => updateOption('maxRegularScore', +i)}
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
  oldOptions: MoviesListOptions,
  optionName: MovieListOptionsKey,
  newValue?: string | number,
): MoviesListOptions {
  if (typeof newValue === 'number' && isNaN(newValue)) {
    return oldOptions;
  }
  return {...oldOptions, [optionName]: newValue};
}

const styles = StyleSheet.create({
  mainContainer: {
    height: 200,
  },
});
