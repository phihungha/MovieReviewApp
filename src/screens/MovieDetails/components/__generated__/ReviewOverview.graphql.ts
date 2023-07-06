/**
 * @generated SignedSource<<94bb12141dc2e0ea23ce5f65dc08096a>>
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
  readonly id: string;
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
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = [
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
v2 = [
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
          (v0/*: any*/),
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
    (v0/*: any*/),
    {
      "alias": null,
      "args": (v1/*: any*/),
      "concreteType": "ReviewConnection",
      "kind": "LinkedField",
      "name": "criticReviews",
      "plural": false,
      "selections": (v2/*: any*/),
      "storageKey": "criticReviews(first:3,sortBy:\"ThankCount\")"
    },
    {
      "alias": null,
      "args": (v1/*: any*/),
      "concreteType": "ReviewConnection",
      "kind": "LinkedField",
      "name": "regularReviews",
      "plural": false,
      "selections": (v2/*: any*/),
      "storageKey": "regularReviews(first:3,sortBy:\"ThankCount\")"
    }
  ],
  "type": "Movie",
  "abstractKey": null
};
})();

(node as any).hash = "58547d0b21fdd8d207d21ed98044d659";

export default node;
