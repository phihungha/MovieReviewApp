/**
 * @generated SignedSource<<1e15c84aa8f4fa33a6715f769b6a1b5a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ActorListItem$data = {
  readonly actor: {
    readonly avatarUrl: string | null;
    readonly name: string;
  };
  readonly characterName: string;
  readonly " $fragmentType": "ActorListItem";
};
export type ActorListItem$key = {
  readonly " $data"?: ActorListItem$data;
  readonly " $fragmentSpreads": FragmentRefs<"ActorListItem">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ActorListItem",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "CrewMember",
      "kind": "LinkedField",
      "name": "actor",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "avatarUrl",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "name",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "characterName",
      "storageKey": null
    }
  ],
  "type": "ActingCredit",
  "abstractKey": null
};

(node as any).hash = "1eaf0e603a314e4c382a4dad7274de32";

export default node;
