/**
 * @generated SignedSource<<81b7b074e9df5fe34dee20519223cf3b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ReviewSortBy = "CommentCount" | "PostTime" | "Score" | "ThankCount" | "%future added value";
export type SortDirection = "Asc" | "Desc" | "%future added value";
export type RegularReviewListRefetchQuery$variables = {
  count?: number | null;
  cursor?: string | null;
  id: string;
  maxScore?: number | null;
  minScore?: number | null;
  sortBy?: ReviewSortBy | null;
  sortDirection?: SortDirection | null;
  textContains?: string | null;
};
export type RegularReviewListRefetchQuery$data = {
  readonly node: {
    readonly " $fragmentSpreads": FragmentRefs<"RegularReviewList">;
  } | null;
};
export type RegularReviewListRefetchQuery = {
  response: RegularReviewListRefetchQuery$data;
  variables: RegularReviewListRefetchQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": 4,
  "kind": "LocalArgument",
  "name": "count"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "cursor"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "id"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "maxScore"
},
v4 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "minScore"
},
v5 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "sortBy"
},
v6 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "sortDirection"
},
v7 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "textContains"
},
v8 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v9 = {
  "kind": "Variable",
  "name": "maxScore",
  "variableName": "maxScore"
},
v10 = {
  "kind": "Variable",
  "name": "minScore",
  "variableName": "minScore"
},
v11 = {
  "kind": "Variable",
  "name": "sortBy",
  "variableName": "sortBy"
},
v12 = {
  "kind": "Variable",
  "name": "sortDirection",
  "variableName": "sortDirection"
},
v13 = {
  "kind": "Variable",
  "name": "textContains",
  "variableName": "textContains"
},
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v15 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v16 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "cursor"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "count"
  },
  (v9/*: any*/),
  (v10/*: any*/),
  (v11/*: any*/),
  (v12/*: any*/),
  (v13/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/),
      (v4/*: any*/),
      (v5/*: any*/),
      (v6/*: any*/),
      (v7/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "RegularReviewListRefetchQuery",
    "selections": [
      {
        "alias": null,
        "args": (v8/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "args": [
              {
                "kind": "Variable",
                "name": "count",
                "variableName": "count"
              },
              {
                "kind": "Variable",
                "name": "cursor",
                "variableName": "cursor"
              },
              (v9/*: any*/),
              (v10/*: any*/),
              (v11/*: any*/),
              (v12/*: any*/),
              (v13/*: any*/)
            ],
            "kind": "FragmentSpread",
            "name": "RegularReviewList"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v3/*: any*/),
      (v4/*: any*/),
      (v5/*: any*/),
      (v6/*: any*/),
      (v7/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Operation",
    "name": "RegularReviewListRefetchQuery",
    "selections": [
      {
        "alias": null,
        "args": (v8/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v14/*: any*/),
          (v15/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": (v16/*: any*/),
                "concreteType": "ReviewConnection",
                "kind": "LinkedField",
                "name": "regularReviews",
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
                          (v15/*: any*/),
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
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "authorType",
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "User",
                            "kind": "LinkedField",
                            "name": "author",
                            "plural": false,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "avatarUrl",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "name",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "userType",
                                "storageKey": null
                              },
                              (v15/*: any*/)
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
                          },
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "commentCount",
                            "storageKey": null
                          },
                          (v14/*: any*/)
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
              {
                "alias": null,
                "args": (v16/*: any*/),
                "filters": [
                  "sortBy",
                  "sortDirection",
                  "textContains",
                  "minScore",
                  "maxScore"
                ],
                "handle": "connection",
                "key": "RegularReviewListFragment_regularReviews",
                "kind": "LinkedHandle",
                "name": "regularReviews"
              }
            ],
            "type": "Movie",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "a3d07721b85b5fe8175d56f5541c966a",
    "id": null,
    "metadata": {},
    "name": "RegularReviewListRefetchQuery",
    "operationKind": "query",
    "text": "query RegularReviewListRefetchQuery(\n  $count: Int = 4\n  $cursor: ID\n  $maxScore: Int\n  $minScore: Int\n  $sortBy: ReviewSortBy\n  $sortDirection: SortDirection\n  $textContains: String\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ...RegularReviewList_3KPYIB\n    id\n  }\n}\n\nfragment HorizontalUserDisplay on User {\n  avatarUrl\n  name\n  userType\n}\n\nfragment RegularReviewList_3KPYIB on Movie {\n  regularReviews(after: $cursor, first: $count, sortBy: $sortBy, sortDirection: $sortDirection, textContains: $textContains, minScore: $minScore, maxScore: $maxScore) {\n    edges {\n      node {\n        id\n        ...ReviewListItem\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n\nfragment ReviewCommentButton on Review {\n  commentCount\n}\n\nfragment ReviewInfoDisplay on Review {\n  title\n  content\n  postTime\n  score\n  authorType\n}\n\nfragment ReviewLikeButton on Review {\n  id\n  thankCount\n  isThankedByViewer\n}\n\nfragment ReviewListItem on Review {\n  id\n  ...ReviewInfoDisplay\n  author {\n    ...HorizontalUserDisplay\n    id\n  }\n  ...ReviewLikeButton\n  ...ReviewCommentButton\n}\n"
  }
};
})();

(node as any).hash = "d79c539d673cf6922817f4894a9400e7";

export default node;
