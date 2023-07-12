/**
 * @generated SignedSource<<deb486fdabff1d7c1f7963166f5495e8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CreateReviewMovieInfo$data = {
  readonly criticScore: number | null;
  readonly posterUrl: string | null;
  readonly regularScore: number | null;
  readonly releaseDate: any;
  readonly title: string;
  readonly " $fragmentType": "CreateReviewMovieInfo";
};
export type CreateReviewMovieInfo$key = {
  readonly " $data"?: CreateReviewMovieInfo$data;
  readonly " $fragmentSpreads": FragmentRefs<"CreateReviewMovieInfo">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CreateReviewMovieInfo",
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

(node as any).hash = "66039412ad7bbd72da3fb3dd72691101";

export default node;
