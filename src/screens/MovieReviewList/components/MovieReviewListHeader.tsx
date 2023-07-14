import {useCallback} from 'react';
import {HeaderButton} from '../../../components/Buttons/HeaderButton';
import {ListScreenHeader} from '../../../components/Headers/ListScreenHeader';
import {HeaderSearchBar} from '../../../components/Inputs/HeaderSearchBar';
import {ActionCb} from '../../../types/ActionCb';
import React from 'react';

import {
  MovieReviewListOptions,
  MovieReviewListOptionsDialog,
} from '../dialogs/MovieReviewListOptionsDialog';

export interface MovieReviewListHeaderProps {
  search: string;
  setSearch: (i: string) => void;
  options: MovieReviewListOptions;
  setOptions: (i: MovieReviewListOptions) => void;
}

export function MovieReviewListHeader(props: MovieReviewListHeaderProps) {
  const headerBtn = useCallback(
    (onPress: ActionCb) => (
      <HeaderButton
        onPress={onPress}
        icon={{color: 'white', type: 'font-awesome', name: 'filter'}}
      />
    ),
    [],
  );

  return (
    <ListScreenHeader>
      <HeaderSearchBar
        value={props.search}
        onChangeText={i => props.setSearch(i)}
        placeholder="Search reviews..."
      />
      <MovieReviewListOptionsDialog
        options={props.options}
        onOptionsChanged={i => props.setOptions(i)}
        customOpenButton={onPress => headerBtn(onPress)}
      />
    </ListScreenHeader>
  );
}
