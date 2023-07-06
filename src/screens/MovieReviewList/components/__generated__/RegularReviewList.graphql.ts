/**
 * @generated SignedSource<<7895deafc3879c81c674199d07776492>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RegularReviewList$data = {
  readonly id: string;
  readonly regularReviews: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
        readonly " $fragmentSpreads": FragmentRefs<"ReviewListItem">;
      };
    } | null>;
  };
  readonly " $fragmentType": "RegularReviewList";
};
export type RegularReviewList$key = {
  readonly " $data"?: RegularReviewList$data;
  readonly " $fragmentSpreads": FragmentRefs<"RegularReviewList">;
};

const node: ReaderFragment = (function(){
var v0 = [
  "regularReviews"
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "argumentDefinitions": [
    {
      "defaultValue": 4,
      "kind": "LocalArgument",
      "name": "count"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "cursor"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "maxScore"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "minScore"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "sortBy"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "sortDirection"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "textContains"
    }
  ],
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": "count",
        "cursor": "cursor",
        "direction": "forward",
        "path": (v0/*: any*/)
      }
    ],
    "refetch": {
      "connection": {
        "forward": {
          "count": "count",
          "cursor": "cursor"
        },
        "backward": null,
        "path": (v0/*: any*/)
      },
      "fragmentPathInResult": [
        "node"
      ],
      "operation": require('./RegularReviewListRefetchQuery.graphql'),
      "identifierField": "id"
    }
  },
  "name": "RegularReviewList",
  "selections": [
    {
      "alias": "regularReviews",
      "args": [
        {
          "kind": "Variable",
          "name": "maxScore",
          "variableName": "maxScore"
        },
        {
          "kind": "Variable",
          "name": "minScore",
          "variableName": "minScore"
        },
        {
          "kind": "Variable",
          "name": "sortBy",
          "variableName": "sortBy"
        },
        {
          "kind": "Variable",
          "name": "sortDirection",
          "variableName": "sortDirection"
        },
        {
          "kind": "Variable",
          "name": "textContains",
          "variableName": "textContains"
        }
      ],
      "concreteType": "ReviewConnection",
      "kind": "LinkedField",
      "name": "__RegularReviewListFragment_regularReviews_connection",
      "plural": false,
      "selections": [
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
                (v1/*: any*/),
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "ReviewListItem"
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "__typename",
                  "storageKey": null
                }
              ],
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "cursor",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "PageInfo",
          "kind": "LinkedField",
          "name": "pageInfo",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "endCursor",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "hasNextPage",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    (v1/*: any*/)
  ],
  "type": "Movie",
  "abstractKey": null
};
})();

(node as any).hash = "d79c539d673cf6922817f4894a9400e7";

export default node;
