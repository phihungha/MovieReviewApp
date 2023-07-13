/**
 * @generated SignedSource<<3701b93e46b713f67d718c49b1bf4fc0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PersonalReview$data = {
  readonly viewerReview: {
    readonly " $fragmentSpreads": FragmentRefs<"ReviewListItem">;
  } | null;
  readonly " $fragmentType": "PersonalReview";
};
export type PersonalReview$key = {
  readonly " $data"?: PersonalReview$data;
  readonly " $fragmentSpreads": FragmentRefs<"PersonalReview">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PersonalReview",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Review",
      "kind": "LinkedField",
      "name": "viewerReview",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "ReviewListItem"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Movie",
  "abstractKey": null
};

(node as any).hash = "95cb78ec266b2c8ef93ea883fc3be2d0";

export default node;
