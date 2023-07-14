/**
 * @generated SignedSource<<e34446a91ddba0a38fe9438f70abb093>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RegularAggregateScoreIndicator$data = {
  readonly regularReviewCount: number;
  readonly regularScore: number | null;
  readonly " $fragmentType": "RegularAggregateScoreIndicator";
};
export type RegularAggregateScoreIndicator$key = {
  readonly " $data"?: RegularAggregateScoreIndicator$data;
  readonly " $fragmentSpreads": FragmentRefs<"RegularAggregateScoreIndicator">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RegularAggregateScoreIndicator",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "regularScore",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "regularReviewCount",
      "storageKey": null
    }
  ],
  "type": "Movie",
  "abstractKey": null
};

(node as any).hash = "b49835dcb672fffa8a0eea9cc6a1dc3a";

export default node;
