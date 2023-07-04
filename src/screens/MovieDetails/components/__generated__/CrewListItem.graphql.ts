/**
 * @generated SignedSource<<0658d476e560143d33e879d72c2dc777>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CrewListItem$data = {
  readonly avatarUrl: string | null;
  readonly name: string;
  readonly " $fragmentType": "CrewListItem";
};
export type CrewListItem$key = {
  readonly " $data"?: CrewListItem$data;
  readonly " $fragmentSpreads": FragmentRefs<"CrewListItem">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CrewListItem",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "avatarUrl",
      "storageKey": null
    }
  ],
  "type": "CrewMember",
  "abstractKey": null
};

(node as any).hash = "8f7cd1efd9a340de392f4a2b617ed59c";

export default node;
