/**
 * @generated SignedSource<<56b43ccc7518bf2a1cbf59231d45d0d9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type UserType = "Critic" | "Regular" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type ReviewInfoDisplay$data = {
  readonly authorType: UserType;
  readonly content: string;
  readonly postTime: any;
  readonly score: number;
  readonly title: string;
  readonly " $fragmentType": "ReviewInfoDisplay";
};
export type ReviewInfoDisplay$key = {
  readonly " $data"?: ReviewInfoDisplay$data;
  readonly " $fragmentSpreads": FragmentRefs<"ReviewInfoDisplay">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ReviewInfoDisplay",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "title",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "content",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "postTime",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "score",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "authorType",
      "storageKey": null
    }
  ],
  "type": "Review",
  "abstractKey": null
};

(node as any).hash = "3f424e69082d2c4ae9a86ff6e473fabb";

export default node;
