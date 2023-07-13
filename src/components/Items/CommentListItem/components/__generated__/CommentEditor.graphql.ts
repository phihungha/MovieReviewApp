/**
 * @generated SignedSource<<a63e4f6405f04a509f4ba89656a7b393>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CommentEditor$data = {
  readonly author: {
    readonly avatarUrl: string | null;
    readonly id: string;
    readonly name: string;
  };
  readonly content: string;
  readonly id: string;
  readonly postTime: any;
  readonly " $fragmentType": "CommentEditor";
};
export type CommentEditor$key = {
  readonly " $data"?: CommentEditor$data;
  readonly " $fragmentSpreads": FragmentRefs<"CommentEditor">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CommentEditor",
  "selections": [
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "content",
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
        (v0/*: any*/),
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
      "name": "postTime",
      "storageKey": null
    }
  ],
  "type": "Comment",
  "abstractKey": null
};
})();

(node as any).hash = "7e0c5c952cf1830885dce3798e0fa636";

export default node;
