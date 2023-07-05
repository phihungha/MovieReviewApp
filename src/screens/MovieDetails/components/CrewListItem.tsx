import React from 'react';
import {VerticalProfileDisplay} from '../../../components/Display/VerticalProfileDisplay';
import {graphql} from 'relay-runtime';
import {useFragment} from 'react-relay';
import {CrewListItem$key} from './__generated__/CrewListItem.graphql';

const CrewListItemFragment = graphql`
  fragment CrewListItem on WorkCredit {
    crew {
      name
      avatarUrl
    }
    role
  }
`;

export interface CrewListItemProps {
  crewMember: CrewListItem$key;
}

/**
 * Item for a list of non-actor crew members working on a film.
 */
export function CrewListItem({
  crewMember,
}: CrewListItemProps): React.JSX.Element {
  const data = useFragment(CrewListItemFragment, crewMember);
  return (
    <VerticalProfileDisplay
      imageUrl={data.crew.avatarUrl}
      name={data.crew.name}
      role={data.role}
    />
  );
}
