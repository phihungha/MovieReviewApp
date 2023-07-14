/**
 * @generated SignedSource<<3ec42ec305a9b20e18ef4f0e6eab60ec>>
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
  readonly viewerReview: {
    readonly " $fragmentSpreads": FragmentRefs<"ReviewListItem">;
  } | null;
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
v2 = {
  "args": null,
  "kind": "FragmentSpread",
  "name": "ReviewListItem"
},
v3 = [
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
          (v2/*: any*/)
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
      "selections": (v3/*: any*/),
      "storageKey": "criticReviews(first:3,sortBy:\"ThankCount\")"
    },
    {
      "alias": null,
      "args": (v1/*: any*/),
      "concreteType": "ReviewConnection",
      "kind": "LinkedField",
      "name": "regularReviews",
      "plural": false,
      "selections": (v3/*: any*/),
      "storageKey": "regularReviews(first:3,sortBy:\"ThankCount\")"
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Review",
      "kind": "LinkedField",
      "name": "viewerReview",
      "plural": false,
      "selections": [
        (v2/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "type": "Movie",
  "abstractKey": null
};
})();

(node as any).hash = "c08a4adab6099054d51b066a8f2b3f56";

export default node;
