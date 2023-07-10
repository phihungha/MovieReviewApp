/**
 * @generated SignedSource<<7bda499427ef9fd75c64f63cad266dd7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type WatchedMovieListItem$data = {
  readonly id: string;
  readonly posterUrl: string | null;
  readonly releaseDate: any;
  readonly title: string;
  readonly " $fragmentType": "WatchedMovieListItem";
};
export type WatchedMovieListItem$key = {
  readonly " $data"?: WatchedMovieListItem$data;
  readonly " $fragmentSpreads": FragmentRefs<"WatchedMovieListItem">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "WatchedMovieListItem",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
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
      "name": "posterUrl",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "releaseDate",
      "storageKey": null
    }
  ],
  "type": "Movie",
  "abstractKey": null
};

(node as any).hash = "c31e6351ec6843a674ce68a5754c865c";

export default node;
