/**
 * @generated SignedSource<<7d16ff0341fac2e2ac42a5d2bc55d8d4>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ReviewCommentButton$data = {
  readonly commentCount: number;
  readonly " $fragmentType": "ReviewCommentButton";
};
export type ReviewCommentButton$key = {
  readonly " $data"?: ReviewCommentButton$data;
  readonly " $fragmentSpreads": FragmentRefs<"ReviewCommentButton">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ReviewCommentButton",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "commentCount",
      "storageKey": null
    }
  ],
  "type": "Review",
  "abstractKey": null
};

(node as any).hash = "5075ca777ac69b634f1d691b1b39c2ed";

export default node;
