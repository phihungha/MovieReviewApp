/**
 * @generated SignedSource<<275d17aaf1a74e26f18d934b667ffa73>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ReviewLikeButton$data = {
  readonly id: string;
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
      "name": "id",
      "storageKey": null
    },
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

(node as any).hash = "4ca68bb4e42988678d44f33216c49c9a";

export default node;
