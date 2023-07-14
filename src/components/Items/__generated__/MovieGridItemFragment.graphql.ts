/**
 * @generated SignedSource<<47e7c7e59a367f9c2a84c371f6020ee6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MovieGridItemFragment$data = {
  readonly criticScore: number | null;
  readonly id: string;
  readonly posterUrl: string | null;
  readonly regularScore: number | null;
  readonly releaseDate: any;
  readonly title: string;
  readonly " $fragmentType": "MovieGridItemFragment";
};
export type MovieGridItemFragment$key = {
  readonly " $data"?: MovieGridItemFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"MovieGridItemFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MovieGridItemFragment",
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

(node as any).hash = "9ce05c9ce12717f4c94401015259193d";

export default node;
