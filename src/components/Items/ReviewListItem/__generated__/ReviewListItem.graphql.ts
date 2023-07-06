/**
 * @generated SignedSource<<4c32acbe5de0cce22ff0b47af3ff5a37>>
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
  readonly " $fragmentSpreads": FragmentRefs<"ReviewCommentButton" | "ReviewInfoDisplay" | "ReviewLikeButton">;
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
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ReviewLikeButton"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "ReviewCommentButton"
    }
  ],
  "type": "Review",
  "abstractKey": null
};

(node as any).hash = "b24b735379e2f64e7d968f39e86ef6df";

export default node;
