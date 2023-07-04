import React from 'react';
import {VerticalProfileDisplay} from '../../../components/Display/VerticalProfileDisplay';
import {graphql} from 'relay-runtime';
import {useFragment} from 'react-relay';
import {CrewListItem$key} from './__generated__/CrewListItem.graphql';

const CrewListItemFragment = graphql`
  fragment CrewListItem on CrewMember {
    name
    avatarUrl
  }
`;

export interface CrewListItemProps {
  crewMember: CrewListItem$key;
  roleName: string;
}

/**
 * Item for a list of non-actor crew members working on a film.
 */
export function CrewListItem({
  crewMember,
  roleName,
}: CrewListItemProps): JSX.Element {
  const data = useFragment(CrewListItemFragment, crewMember);
  return (
    <VerticalProfileDisplay
      imageUrl={data.avatarUrl}
      name={data.name}
      role={roleName}
    />
  );
}
