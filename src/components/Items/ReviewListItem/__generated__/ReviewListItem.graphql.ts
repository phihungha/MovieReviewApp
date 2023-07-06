/**
 * @generated SignedSource<<30b593252fac30fc786134292fefc06c>>
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
  readonly id: string;
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
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
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

(node as any).hash = "d90f559130cf25126f2f7b88466cf5fe";

export default node;
