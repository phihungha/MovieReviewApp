/**
 * @generated SignedSource<<480061be396a26ceb5db9af1380406c8>>
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

(node as any).hash = "4bad64c95ccf7bcdd6d125c97435e885";

export default node;
