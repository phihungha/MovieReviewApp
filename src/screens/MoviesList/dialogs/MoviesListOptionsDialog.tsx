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
  options: MoviesListOptions;
  onOptionsChanged?: (selectedOptions: MoviesListOptions) => void;
  customOpenButton?: CustomButtonCb;
}

export function MoviesListOptionsDialog(
  props: MoviesListOptionsDialogProps,
): React.JSX.Element {
  const [options, setOptions] = useState<MoviesListOptions>(props.options);
  const minScore = 0;
  const maxScore = 10;
  const [sortByOpen, setSortByOpen] = useState(false);
  const [sortByItems, setSortByItems] = useState([
    {label: 'Comment Count', value: 'CommentCount'},
    {label: 'Post Time', value: 'PostTime'},
    {label: 'Score', value: 'Score'},
    {label: 'Thank Count', value: 'ThankCount'},
  ]);

  const [sortDirectionOpen, setSortDirectionOpen] = useState(false);
  const [sortDirectionItems, setSortDirectionItems] = useState([
    {label: 'Ascending', value: 'Asc'},
    {label: 'Descending', value: 'Desc'},
  ]);

  function updateOption(
    optionName: MovieListOptionsKey,
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
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Input
          keyboardType="numeric"
          label="Release year"
          value={options.releaseYear?.toString()}
          onChangeText={i => updateOption('releaseYear', +i)}
          renderErrorMessage={false}
          inputContainerStyle={{backgroundColor: colors.darkBlack}}
        />

        <Input
          keyboardType="numeric"
          label="Min critic score"
          value={options.minCriticScore?.toString()}
          onChangeText={i => {
            const value = Math.max(minScore, Math.min(maxScore, Number(i)));
            updateOption('minCriticScore', +value);
          }}
          renderErrorMessage={false}
          inputContainerStyle={{backgroundColor: colors.darkBlack}}
        />
        <Input
          keyboardType="numeric"
          label="Max critic score"
          value={options.maxCriticScore?.toString()}
          onChangeText={i => {
            const value = Math.max(minScore, Math.min(maxScore, Number(i)));
            updateOption('maxCriticScore', +value);
          }}
          renderErrorMessage={false}
          inputContainerStyle={{backgroundColor: colors.darkBlack}}
        />

        <Input
          keyboardType="numeric"
          label="Min user score"
          value={options.minRegularScore?.toString()}
          onChangeText={i => {
            const value = Math.max(minScore, Math.min(maxScore, Number(i)));
            updateOption('minRegularScore', +value);
          }}
          renderErrorMessage={false}
          inputContainerStyle={{backgroundColor: colors.darkBlack}}
        />
        <Input
          keyboardType="numeric"
          label="Max user score"
          value={options.maxRegularScore?.toString()}
          onChangeText={i => {
            const value = Math.max(minScore, Math.min(maxScore, Number(i)));
            updateOption('maxRegularScore', +value);
          }}
          renderErrorMessage={false}
          inputContainerStyle={{backgroundColor: colors.darkBlack}}
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
            updateOption('sortBy', i.value!);
          }}
          textStyle={styles.DropDownPicker_textStyle}
          style={styles.DropDownPicker_style}
          containerStyle={styles.belowDropdown}
          dropDownDirection="TOP"
          dropDownContainerStyle={styles.DropDownPicker_dropDownContainerStyle}
        />
        <DropDownPicker
          listMode="SCROLLVIEW"
          placeholder="Sort direction"
          open={sortDirectionOpen}
          value={options.sortDirection}
          items={sortDirectionItems}
          setOpen={setSortDirectionOpen}
          setValue={() => {}}
          setItems={setSortDirectionItems}
          onSelectItem={i => {
            updateOption('sortDirection', i.value!);
          }}
          textStyle={styles.DropDownPicker_textStyle}
          style={styles.DropDownPicker_style}
          containerStyle={styles.aboveDropdown}
          dropDownDirection="TOP"
          dropDownContainerStyle={styles.DropDownPicker_dropDownContainerStyle}
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
    height: 450,
  },
  contentContainer: {
    gap: 8,
  },
  DropDownPicker_textStyle: {
    color: colors.white,
  },
  DropDownPicker_style: {
    backgroundColor: colors.darkBlack,
    borderRadius: 12,
    borderColor: 'transparent',
  },
  DropDownPicker_dropDownContainerStyle: {
    backgroundColor: colors.darkBlack,
    borderColor: 'transparent',
    borderRadius: 12,
  },
  aboveDropdown: {zIndex: 10001},
  belowDropdown: {zIndex: 10000},
});
