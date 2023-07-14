/**
 * @generated SignedSource<<e0106ad653e2ff3bace37b9a0e3a3a4a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MovieInfoDisplay$data = {
  readonly criticScore: number | null;
  readonly posterUrl: string | null;
  readonly regularScore: number | null;
  readonly releaseDate: any;
  readonly title: string;
  readonly " $fragmentType": "MovieInfoDisplay";
};
export type MovieInfoDisplay$key = {
  readonly " $data"?: MovieInfoDisplay$data;
  readonly " $fragmentSpreads": FragmentRefs<"MovieInfoDisplay">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MovieInfoDisplay",
  "selections": [
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
      "name": "title",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "releaseDate",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "criticScore",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "regularScore",
      "storageKey": null
    }
  ],
  "type": "Movie",
  "abstractKey": null
};

(node as any).hash = "42f515e0edc6eed2e7de6e1ae408a317";

export default node;
