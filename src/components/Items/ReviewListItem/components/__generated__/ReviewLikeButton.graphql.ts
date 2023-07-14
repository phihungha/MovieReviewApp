/**
 * @generated SignedSource<<325b9767607ddb4eeef6a080e3dab69f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ReviewLikeButton$data = {
  readonly author: {
    readonly id: string;
  };
  readonly id: string;
  readonly isThankedByViewer: boolean | null;
  readonly thankCount: number;
  readonly " $fragmentType": "ReviewLikeButton";
};
export type ReviewLikeButton$key = {
  readonly " $data"?: ReviewLikeButton$data;
  readonly " $fragmentSpreads": FragmentRefs<"ReviewLikeButton">;
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
  "name": "ReviewLikeButton",
  "selections": [
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "concreteType": "User",
      "kind": "LinkedField",
      "name": "author",
      "plural": false,
      "selections": [
        (v0/*: any*/)
      ],
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
})();

(node as any).hash = "4ea5a05074ebfcfadea7f4227e77eea0";

export default node;
