import {ListScreenHeader} from '../../../components/Headers/ListScreenHeader';
import {HeaderSearchBar} from '../../../components/Inputs/HeaderSearchBar';
import React from 'react';
export interface UserListHeaderProps {
  search: string;
  setSearch: (i: string) => void;
}

export function UserListHeader(props: UserListHeaderProps) {
  return (
    <ListScreenHeader>
      <HeaderSearchBar
        value={props.search}
        onChangeText={i => props.setSearch(i)}
        placeholder="Search users..."
      />
    </ListScreenHeader>
  );
}
