/**
 * @generated SignedSource<<e4df5edf5317a72bde62b750d47be2b0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ReviewDetailsQuery$variables = {
  id: string;
};
export type ReviewDetailsQuery$data = {
  readonly review: {
    readonly movie: {
      readonly releaseDate: any;
      readonly title: string;
    };
    readonly " $fragmentSpreads": FragmentRefs<"CommentList" | "ReviewListItem">;
  } | null;
};
export type ReviewDetailsQuery = {
  response: ReviewDetailsQuery$data;
  variables: ReviewDetailsQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "releaseDate",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "content",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "postTime",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "avatarUrl",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v9 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 8
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ReviewDetailsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Review",
        "kind": "LinkedField",
        "name": "review",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Movie",
            "kind": "LinkedField",
            "name": "movie",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/)
            ],
            "storageKey": null
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ReviewListItem"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "CommentList"
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ReviewDetailsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Review",
        "kind": "LinkedField",
        "name": "review",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Movie",
            "kind": "LinkedField",
            "name": "movie",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/)
            ],
            "storageKey": null
          },
          (v4/*: any*/),
          (v2/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
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
              (v7/*: any*/),
              (v8/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "userType",
                "storageKey": null
              },
              (v4/*: any*/)
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
          {
            "alias": null,
            "args": (v9/*: any*/),
            "concreteType": "CommentConnection",
            "kind": "LinkedField",
            "name": "comments",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "CommentEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Comment",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v4/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "User",
                        "kind": "LinkedField",
                        "name": "author",
                        "plural": false,
                        "selections": [
                          (v7/*: any*/),
                          (v8/*: any*/),
                          (v4/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v6/*: any*/),
                      (v5/*: any*/),
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
            "storageKey": "comments(first:8)"
          },
          {
            "alias": null,
            "args": (v9/*: any*/),
            "filters": null,
            "handle": "connection",
            "key": "CommentListFragment_comments",
            "kind": "LinkedHandle",
            "name": "comments"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "bce11c9a5dc4a9618dcd91fe59d6129c",
    "id": null,
    "metadata": {},
    "name": "ReviewDetailsQuery",
    "operationKind": "query",
    "text": "query ReviewDetailsQuery(\n  $id: ID!\n) {\n  review(id: $id) {\n    movie {\n      title\n      releaseDate\n      id\n    }\n    ...ReviewListItem\n    ...CommentList\n    id\n  }\n}\n\nfragment CommentList on Review {\n  comments(first: 8) {\n    edges {\n      node {\n        id\n        ...CommentListItem\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n\nfragment CommentListItem on Comment {\n  author {\n    avatarUrl\n    name\n    id\n  }\n  postTime\n  content\n}\n\nfragment HorizontalUserDisplay on User {\n  avatarUrl\n  name\n  userType\n}\n\nfragment ReviewCommentButton on Review {\n  commentCount\n}\n\nfragment ReviewInfoDisplay on Review {\n  title\n  content\n  postTime\n  score\n  authorType\n}\n\nfragment ReviewLikeButton on Review {\n  id\n  thankCount\n  isThankedByViewer\n}\n\nfragment ReviewListItem on Review {\n  id\n  ...ReviewInfoDisplay\n  author {\n    ...HorizontalUserDisplay\n    id\n  }\n  ...ReviewLikeButton\n  ...ReviewCommentButton\n}\n"
  }
};
})();

(node as any).hash = "c9b61735fa4d459764e57124c7f1766e";

export default node;
