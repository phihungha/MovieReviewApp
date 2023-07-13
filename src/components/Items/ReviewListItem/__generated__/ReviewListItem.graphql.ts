/**
 * @generated SignedSource<<a0067249fcefbf6207d0573c79f0f931>>
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
  readonly isMine: boolean | null;
  readonly movie: {
    readonly " $fragmentSpreads": FragmentRefs<"MovieInfoDisplay">;
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
      "alias": null,
      "args": null,
      "concreteType": "Movie",
      "kind": "LinkedField",
      "name": "movie",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "MovieInfoDisplay"
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
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isMine",
      "storageKey": null
    }
  ],
  "type": "Review",
  "abstractKey": null
};

(node as any).hash = "767b160821385de6998982bad38181a1";

export default node;
