/**
 * @generated SignedSource<<22ebfb737ea93c3488babd534f4e6d41>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ReviewInfoDisplay$data = {
  readonly content: string;
  readonly postTime: any;
  readonly score: number;
  readonly title: string;
  readonly " $fragmentType": "ReviewInfoDisplay";
};
export type ReviewInfoDisplay$key = {
  readonly " $data"?: ReviewInfoDisplay$data;
  readonly " $fragmentSpreads": FragmentRefs<"ReviewInfoDisplay">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ReviewInfoDisplay",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "title",
      "storageKey": null
    },
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
      "kind": "ScalarField",
      "name": "postTime",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "score",
      "storageKey": null
    }
  ],
  "type": "Review",
  "abstractKey": null
};

(node as any).hash = "d3e5ccf0eaf8293105c544631e7b444a";

export default node;
