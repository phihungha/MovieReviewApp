/**
 * @generated SignedSource<<4cd54f7a6f66c7b84b160835fbd28cf7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ReviewOverview$data = {
  readonly criticReviews: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
        readonly " $fragmentSpreads": FragmentRefs<"ReviewListItem">;
      };
    } | null>;
  };
  readonly regularReviews: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
        readonly " $fragmentSpreads": FragmentRefs<"ReviewListItem">;
      };
    } | null>;
  };
  readonly " $fragmentType": "ReviewOverview";
};
export type ReviewOverview$key = {
  readonly " $data"?: ReviewOverview$data;
  readonly " $fragmentSpreads": FragmentRefs<"ReviewOverview">;
};

const node: ReaderFragment = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 3
  },
  {
    "kind": "Literal",
    "name": "sortBy",
    "value": "ThankCount"
  }
],
v1 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "ReviewEdge",
    "kind": "LinkedField",
    "name": "edges",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Review",
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
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
            "name": "ReviewListItem"
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ReviewOverview",
  "selections": [
    {
      "alias": null,
      "args": (v0/*: any*/),
      "concreteType": "ReviewConnection",
      "kind": "LinkedField",
      "name": "criticReviews",
      "plural": false,
      "selections": (v1/*: any*/),
      "storageKey": "criticReviews(first:3,sortBy:\"ThankCount\")"
    },
    {
      "alias": null,
      "args": (v0/*: any*/),
      "concreteType": "ReviewConnection",
      "kind": "LinkedField",
      "name": "regularReviews",
      "plural": false,
      "selections": (v1/*: any*/),
      "storageKey": "regularReviews(first:3,sortBy:\"ThankCount\")"
    }
  ],
  "type": "Movie",
  "abstractKey": null
};
})();

(node as any).hash = "fc6a831275d8b2315bd402ebc0b5fc3e";

export default node;
