/**
 * @generated SignedSource<<c25d5319f27254d2f86ea66f4292867d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ReviewListItem$data = {
  readonly author: {
    readonly " $fragmentSpreads": FragmentRefs<"HorizontalUserDisplay">;
  };
  readonly " $fragmentSpreads": FragmentRefs<"ReviewInfoDisplay">;
  readonly " $fragmentType": "ReviewListItem";
};
export type ReviewListItem$key = {
  readonly " $data"?: ReviewListItem$data;
  readonly " $fragmentSpreads": FragmentRefs<"ReviewListItem">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ReviewListItem",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ReviewInfoDisplay"
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "User",
      "kind": "LinkedField",
      "name": "author",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "HorizontalUserDisplay"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Review",
  "abstractKey": null
};

(node as any).hash = "07cbaba33f2e92f11a0834f24ac3e8cd";

export default node;
