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
      <View style={styles.contentContainer}>
        <Input
          keyboardType="numeric"
          label="Min score"
          value={options.minScore?.toString()}
          onChangeText={i => {
            const value = Math.max(minScore, Math.min(maxScore, Number(i)));
            updateOption('minScore', +value);
          }}
          renderErrorMessage={false}
          inputContainerStyle={{backgroundColor: colors.darkBlack}}
        />
        <Input
          keyboardType="numeric"
          label="Max score"
          value={options.maxScore?.toString()}
          onChangeText={i => {
            const value = Math.max(minScore, Math.min(maxScore, Number(i)));
            updateOption('maxScore', +value);
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
          containerStyle={{zIndex: 100}}
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
          containerStyle={{zIndex: 1}}
          dropDownContainerStyle={styles.DropDownPicker_dropDownContainerStyle}
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
    gap: 12,
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
});
