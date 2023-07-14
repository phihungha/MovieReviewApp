/**
 * @generated SignedSource<<d7e03914ebb06b7bc9a293baa4a32a3e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type CrewWorkRole = "Composer" | "Director" | "DoP" | "Editor" | "Writer" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type CrewListItem$data = {
  readonly crew: {
    readonly avatarUrl: string | null;
    readonly name: string;
  };
  readonly role: CrewWorkRole;
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
      "concreteType": "CrewMember",
      "kind": "LinkedField",
      "name": "crew",
      "plural": false,
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
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "role",
      "storageKey": null
    }
  ],
  "type": "WorkCredit",
  "abstractKey": null
};

(node as any).hash = "d29a64d4121bbf1bbc060131d6ff20a8";

export default node;
