/**
 * @generated SignedSource<<fc9506fbd29c315e42a611690bb18c10>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type ReviewLikeButtonMutation$variables = {
  id: string;
  thank: boolean;
};
export type ReviewLikeButtonMutation$data = {
  readonly thankReview: {
    readonly data?: {
      readonly isThankedByViewer: boolean | null;
      readonly thankCount: number;
    };
  };
};
export type ReviewLikeButtonMutation$rawResponse = {
  readonly thankReview: {
    readonly __typename: "MutationThankReviewSuccess";
    readonly data: {
      readonly id: string;
      readonly isThankedByViewer: boolean | null;
      readonly thankCount: number;
    };
  } | {
    readonly __typename: string;
  };
};
export type ReviewLikeButtonMutation = {
  rawResponse: ReviewLikeButtonMutation$rawResponse;
  response: ReviewLikeButtonMutation$data;
  variables: ReviewLikeButtonMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "thank"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "reviewId",
    "variableName": "id"
  },
  {
    "kind": "Variable",
    "name": "thank",
    "variableName": "thank"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isThankedByViewer",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "thankCount",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ReviewLikeButtonMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "thankReview",
        "plural": false,
        "selections": [
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Review",
                "kind": "LinkedField",
                "name": "data",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  (v3/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "type": "MutationThankReviewSuccess",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ReviewLikeButtonMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "thankReview",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          },
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Review",
                "kind": "LinkedField",
                "name": "data",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  (v3/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "id",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "type": "MutationThankReviewSuccess",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "1b803811276686346334942b326d9b02",
    "id": null,
    "metadata": {},
    "name": "ReviewLikeButtonMutation",
    "operationKind": "mutation",
    "text": "mutation ReviewLikeButtonMutation(\n  $id: ID!\n  $thank: Boolean!\n) {\n  thankReview(reviewId: $id, thank: $thank) {\n    __typename\n    ... on MutationThankReviewSuccess {\n      data {\n        isThankedByViewer\n        thankCount\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "d7eadd2de2a20176744305e94f019171";

export default node;
