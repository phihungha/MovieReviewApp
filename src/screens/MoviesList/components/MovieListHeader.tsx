import {useCallback} from 'react';
import {HeaderButton} from '../../../components/Buttons/HeaderButton';
import {ListScreenHeader} from '../../../components/Headers/ListScreenHeader';
import {HeaderSearchBar} from '../../../components/Inputs/HeaderSearchBar';
import {ActionCb} from '../../../types/ActionCb';
import React from 'react';
import {
  MoviesListOptions,
  MoviesListOptionsDialog,
} from '../dialogs/MoviesListOptionsDialog';

export interface MovieListHeaderProps {
  search: string;
  setSearch: (i: string) => void;
  options: MoviesListOptions;
  setOptions: (i: MoviesListOptions) => void;
}

export function MovieListHeader(props: MovieListHeaderProps) {
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
        placeholder="Search movies..."
      />
      <MoviesListOptionsDialog
        options={props.options}
        onOptionsChanged={i => props.setOptions(i)}
        customOpenButton={onPress => headerBtn(onPress)}
      />
    </ListScreenHeader>
  );
}
