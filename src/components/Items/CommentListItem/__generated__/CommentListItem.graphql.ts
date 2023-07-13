/**
 * @generated SignedSource<<751d187748f570f3457538311a21e980>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CommentListItem$data = {
  readonly author: {
    readonly avatarUrl: string | null;
    readonly name: string;
  };
  readonly id: string;
  readonly isMine: boolean | null;
  readonly lastUpdateTime: any | null;
  readonly postTime: any;
  readonly " $fragmentSpreads": FragmentRefs<"CommentContent" | "CommentEditor">;
  readonly " $fragmentType": "CommentListItem";
};
export type CommentListItem$key = {
  readonly " $data"?: CommentListItem$data;
  readonly " $fragmentSpreads": FragmentRefs<"CommentListItem">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CommentListItem",
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
      "concreteType": "User",
      "kind": "LinkedField",
      "name": "author",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "avatarUrl",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "name",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isMine",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "postTime",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "lastUpdateTime",
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "CommentContent"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "CommentEditor"
    }
  ],
  "type": "Comment",
  "abstractKey": null
};

(node as any).hash = "60822a170e405a66b7ea0f4bdc8c8b5a";

export default node;
