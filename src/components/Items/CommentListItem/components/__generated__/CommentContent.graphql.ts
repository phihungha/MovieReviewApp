/**
 * @generated SignedSource<<9379482483d9f557e0605e707ed8cc64>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CommentContent$data = {
  readonly content: string;
  readonly " $fragmentType": "CommentContent";
};
export type CommentContent$key = {
  readonly " $data"?: CommentContent$data;
  readonly " $fragmentSpreads": FragmentRefs<"CommentContent">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CommentContent",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "content",
      "storageKey": null
    }
  ],
  "type": "Comment",
  "abstractKey": null
};

(node as any).hash = "1d9f54460b158f4bf1aee4f3ae84e756";

export default node;
