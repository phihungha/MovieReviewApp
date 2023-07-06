/**
 * @generated SignedSource<<79859a40340e9c612b5445c44786f02c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type GenreListItem$data = {
  readonly name: string;
  readonly " $fragmentType": "GenreListItem";
};
export type GenreListItem$key = {
  readonly " $data"?: GenreListItem$data;
  readonly " $fragmentSpreads": FragmentRefs<"GenreListItem">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "GenreListItem",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    }
  ],
  "type": "Genre",
  "abstractKey": null
};

(node as any).hash = "2f3bb3eec38b36df8d30885c1223153b";

export default node;
