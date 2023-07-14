import React from 'react';
import {StyleSheet, View} from 'react-native';
import {GenericDialog} from '../../../dialogs/GenericDialog';
import {useState} from 'react';
import {Input} from '@rneui/themed';
import {CustomButtonCb} from '../../../types/CustomButtonCb';
import {
  ReviewSortBy,
  SortDirection,
} from '../components/__generated__/CriticReviewListRefetchQuery.graphql';
import DropDownPicker from 'react-native-dropdown-picker';
import colors from '../../../styles/colors';

const MIN_SCORE = 0;
const MAX_SCORE = 10;

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
    optionName: MovieReviewListOptionsKey,
    newValue: string,
  ): void {
    setOptions(o => getUpdatedOptions(o, optionName, newValue));
  }

  function updateScoreOption(
    optionName: MovieReviewListOptionsKey,
    newValue: string,
  ): void {
    setOptions(o => getUpdatedScoreOptions(o, optionName, newValue));
  }

  return (
    <GenericDialog
      title="Options"
      onOk={() => props.onOptionsChanged?.(options)}
      customOpenButton={props.customOpenButton}>
      <View style={styles.contentContainer}>
        <Input
          keyboardType="numeric"
          label="Min score"
          value={options.minScore?.toString()}
          onChangeText={i => updateScoreOption('minScore', i)}
          renderErrorMessage={false}
          inputContainerStyle={{backgroundColor: colors.darkBlack}}
        />
        <Input
          keyboardType="numeric"
          label="Max score"
          value={options.maxScore?.toString()}
          onChangeText={i => updateScoreOption('maxScore', i)}
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
          onSelectItem={i => updateOption('sortBy', i.value!)}
          textStyle={styles.dropdownText}
          style={styles.dropdownContainer}
          containerStyle={styles.aboveDropdown}
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
          onSelectItem={i => updateOption('sortDirection', i.value!)}
          textStyle={styles.dropdownText}
          style={styles.dropdownContainer}
          containerStyle={styles.belowDropdown}
          dropDownContainerStyle={styles.dropdownContainer}
        />
      </View>
    </GenericDialog>
  );
}

function getUpdatedOptions(
  oldOptions: MovieReviewListOptions,
  optionName: MovieReviewListOptionsKey,
  newValue?: string | number,
): MovieReviewListOptions {
  let value = newValue === '' ? undefined : newValue;
  return {...oldOptions, [optionName]: value};
}

function getUpdatedScoreOptions(
  oldOptions: MovieReviewListOptions,
  optionName: MovieReviewListOptionsKey,
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
  contentContainer: {
    gap: 12,
  },
  dropdownText: {
    color: colors.white,
  },
  dropdownContainer: {
    backgroundColor: colors.darkBlack,
    borderRadius: 12,
    borderColor: 'transparent',
  },
  aboveDropdown: {zIndex: 100},
  belowDropdown: {zIndex: 1},
});
