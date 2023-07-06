/**
 * @generated SignedSource<<c999bbf629bf58d836c9a25c446c68a8>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ReviewLikeButton$data = {
  readonly isThankedByViewer: boolean | null;
  readonly thankCount: number;
  readonly " $fragmentType": "ReviewLikeButton";
};
export type ReviewLikeButton$key = {
  readonly " $data"?: ReviewLikeButton$data;
  readonly " $fragmentSpreads": FragmentRefs<"ReviewLikeButton">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ReviewLikeButton",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "thankCount",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "isThankedByViewer",
      "storageKey": null
    }
  ],
  "type": "Review",
  "abstractKey": null
};

(node as any).hash = "e300d5292b772a9def6b537b078e524d";

export default node;
