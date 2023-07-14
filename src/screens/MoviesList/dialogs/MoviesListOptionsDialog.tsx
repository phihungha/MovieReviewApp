import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {GenericDialog} from '../../../dialogs/GenericDialog';
import {useState} from 'react';
import {Input} from '@rneui/themed';
import {CustomButtonCb} from '../../../types/CustomButtonCb';
import {
  MovieSortBy,
  SortDirection,
} from '../components/__generated__/AllMovieListRefetchQuery.graphql';
import DropDownPicker from 'react-native-dropdown-picker';
import colors from '../../../styles/colors';
import Snackbar from 'react-native-snackbar';

const MIN_SCORE = 0;
const MAX_SCORE = 10;

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
  options: MoviesListOptions;
  onOptionsChanged?: (selectedOptions: MoviesListOptions) => void;
  customOpenButton?: CustomButtonCb;
}

export function MoviesListOptionsDialog(
  props: MoviesListOptionsDialogProps,
): React.JSX.Element {
  const [options, setOptions] = useState<MoviesListOptions>(props.options);

  const [sortByOpen, setSortByOpen] = useState(false);
  const [sortByItems, setSortByItems] = useState([
    {label: 'Title', value: 'Title'},
    {label: 'Release date', value: 'ReleaseDate'},
    {label: 'Critic score', value: 'CriticScore'},
    {label: 'Regular score', value: 'RegularScore'},
    {label: 'Viewed user count', value: 'ViewedUserCount'},
  ]);

  const [sortDirectionOpen, setSortDirectionOpen] = useState(false);
  const [sortDirectionItems, setSortDirectionItems] = useState([
    {label: 'Ascending', value: 'Asc'},
    {label: 'Descending', value: 'Desc'},
  ]);

  function updateStrOption(
    optionName: MovieListOptionsKey,
    newValue: string,
  ): void {
    setOptions(o => getUpdatedOptions(o, optionName, newValue));
  }

  function updateNumberOption(
    optionName: MovieListOptionsKey,
    newValue: string,
  ): void {
    setOptions(o => getUpdatedNumberOptions(o, optionName, newValue));
  }

  function updateScoreOption(
    optionName: MovieListOptionsKey,
    newValue: string,
  ): void {
    setOptions(o => getUpdatedScoreOptions(o, optionName, newValue));
  }

  function onOk(): void {
    if (options.releaseYear && options.releaseYear < 1900) {
      return Snackbar.show({text: 'Invalid year'});
    }
    props.onOptionsChanged?.(options);
  }

  return (
    <GenericDialog
      title="Options"
      onOk={onOk}
      containerStyle={styles.mainContainer}
      customOpenButton={props.customOpenButton}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Input
          keyboardType="numeric"
          label="Release year"
          value={options.releaseYear?.toString()}
          onChangeText={i => updateNumberOption('releaseYear', i)}
          renderErrorMessage={false}
          inputContainerStyle={styles.inputContainer}
        />

        <Input
          keyboardType="numeric"
          label="Min critic score"
          value={options.minCriticScore?.toString()}
          onChangeText={i => updateScoreOption('minCriticScore', i)}
          renderErrorMessage={false}
          inputContainerStyle={styles.inputContainer}
        />
        <Input
          keyboardType="numeric"
          label="Max critic score"
          value={options.maxCriticScore?.toString()}
          onChangeText={i => updateScoreOption('maxCriticScore', i)}
          renderErrorMessage={false}
          inputContainerStyle={styles.inputContainer}
        />

        <Input
          keyboardType="numeric"
          label="Min user score"
          value={options.minRegularScore?.toString()}
          onChangeText={i => updateScoreOption('minRegularScore', i)}
          renderErrorMessage={false}
          inputContainerStyle={styles.inputContainer}
        />
        <Input
          keyboardType="numeric"
          label="Max user score"
          value={options.maxRegularScore?.toString()}
          onChangeText={i => updateScoreOption('maxRegularScore', i)}
          renderErrorMessage={false}
          inputContainerStyle={styles.inputContainer}
        />

        <DropDownPicker
          listMode="SCROLLVIEW"
          placeholder="Sort by"
          open={sortByOpen}
          value={options.sortBy}
          items={sortByItems}
          setOpen={setSortByOpen}
          setValue={() => {}}
          setItems={setSortByItems}
          onSelectItem={i => {
            updateStrOption('sortBy', i.value!);
          }}
          textStyle={styles.dropdownText}
          style={styles.dropdownContainer}
          containerStyle={styles.belowDropdown}
          dropDownDirection="TOP"
          dropDownContainerStyle={styles.dropdownContainer}
        />
        <DropDownPicker
          listMode="SCROLLVIEW"
          placeholder="Sort order"
          open={sortDirectionOpen}
          value={options.sortDirection}
          items={sortDirectionItems}
          setOpen={setSortDirectionOpen}
          setValue={() => {}}
          setItems={setSortDirectionItems}
          onSelectItem={i => {
            updateStrOption('sortDirection', i.value!);
          }}
          textStyle={styles.dropdownText}
          style={styles.dropdownContainer}
          containerStyle={styles.aboveDropdown}
          dropDownDirection="TOP"
          dropDownContainerStyle={styles.dropdownContainer}
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
  let value = newValue === '' ? undefined : newValue;
  return {...oldOptions, [optionName]: value};
}

function getUpdatedNumberOptions(
  oldOptions: MoviesListOptions,
  optionName: MovieListOptionsKey,
  newValue: string,
) {
  let value: number | undefined;
  if (newValue === '') {
    value = undefined;
  } else {
    value = +newValue;
    if (isNaN(value)) {
      value = undefined;
    }
  }

  return getUpdatedOptions(oldOptions, optionName, value);
}

function getUpdatedScoreOptions(
  oldOptions: MoviesListOptions,
  optionName: MovieListOptionsKey,
  newValue: string,
) {
  let value: number | undefined;
  if (newValue === '') {
    value = undefined;
  } else {
    value = +newValue;
    if (isNaN(value)) {
      value = undefined;
    } else {
      value = Math.max(MIN_SCORE, Math.min(MAX_SCORE, value));
    }
  }
  return getUpdatedOptions(oldOptions, optionName, value);
}

const styles = StyleSheet.create({
  mainContainer: {
    height: 550,
  },
  contentContainer: {
    paddingTop: 5,
    gap: 8,
  },
  inputContainer: {
    backgroundColor: colors.darkBlack,
  },
  dropdownText: {
    color: colors.white,
  },
  dropdownContainer: {
    backgroundColor: colors.darkBlack,
    borderColor: 'transparent',
    borderRadius: 12,
  },
  aboveDropdown: {zIndex: 10001},
  belowDropdown: {zIndex: 10000},
});
