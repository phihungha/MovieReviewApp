/**
 * @generated SignedSource<<f80cc9bc4026d45ff24077c240cf75e1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Gender = "Female" | "Male" | "Other" | "%future added value";
export type UserType = "Critic" | "Regular" | "%future added value";
export type MyAccountQuery$variables = {};
export type MyAccountQuery$data = {
  readonly viewer: {
    readonly blogUrl: string | null;
    readonly dateOfBirth: any | null;
    readonly gender: Gender | null;
    readonly id: string;
    readonly name: string;
    readonly userType: UserType;
    readonly username: string;
    readonly " $fragmentSpreads": FragmentRefs<"UpdatableAvatar" | "UserReviewOverviewList" | "UserThankedReviewOverviewList" | "UserWatchedOverviewList">;
  } | null;
};
export type MyAccountQuery = {
  response: MyAccountQuery$data;
  variables: MyAccountQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "dateOfBirth",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "gender",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "username",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "userType",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "blogUrl",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "avatarUrl",
  "storageKey": null
},
v8 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 3
  }
],
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v10 = [
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
          (v9/*: any*/),
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
              (v7/*: any*/),
              (v1/*: any*/),
              (v5/*: any*/),
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
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "commentCount",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "MyAccountQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "UpdatableAvatar"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "UserReviewOverviewList"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "UserThankedReviewOverviewList"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "UserWatchedOverviewList"
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
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "MyAccountQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
          {
            "alias": null,
            "args": (v8/*: any*/),
            "concreteType": "ReviewConnection",
            "kind": "LinkedField",
            "name": "reviews",
            "plural": false,
            "selections": (v10/*: any*/),
            "storageKey": "reviews(first:3)"
          },
          {
            "alias": null,
            "args": (v8/*: any*/),
            "concreteType": "ReviewConnection",
            "kind": "LinkedField",
            "name": "reviewThanks",
            "plural": false,
            "selections": (v10/*: any*/),
            "storageKey": "reviewThanks(first:3)"
          },
          {
            "alias": null,
            "args": (v8/*: any*/),
            "concreteType": "MovieConnection",
            "kind": "LinkedField",
            "name": "viewedMovies",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "MovieEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Movie",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v0/*: any*/),
                      (v9/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "posterUrl",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "releaseDate",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "viewedMovies(first:3)"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "3d1e58ee0aab000b81de4e38734c2a41",
    "id": null,
    "metadata": {},
    "name": "MyAccountQuery",
    "operationKind": "query",
    "text": "query MyAccountQuery {\n  viewer {\n    id\n    name\n    dateOfBirth\n    gender\n    username\n    userType\n    blogUrl\n    ...UpdatableAvatar\n    ...UserReviewOverviewList\n    ...UserThankedReviewOverviewList\n    ...UserWatchedOverviewList\n  }\n}\n\nfragment HorizontalUserDisplay on User {\n  avatarUrl\n  name\n  userType\n}\n\nfragment ReviewCommentButton on Review {\n  commentCount\n}\n\nfragment ReviewInfoDisplay on Review {\n  title\n  content\n  postTime\n  score\n  authorType\n}\n\nfragment ReviewLikeButton on Review {\n  thankCount\n  isThankedByViewer\n}\n\nfragment ReviewListItem on Review {\n  id\n  ...ReviewInfoDisplay\n  author {\n    ...HorizontalUserDisplay\n    id\n  }\n  ...ReviewLikeButton\n  ...ReviewCommentButton\n}\n\nfragment UpdatableAvatar on User {\n  id\n  avatarUrl\n}\n\nfragment UserReviewOverviewList on User {\n  reviews(first: 3) {\n    edges {\n      node {\n        id\n        ...ReviewListItem\n      }\n    }\n  }\n}\n\nfragment UserThankedReviewOverviewList on User {\n  reviewThanks(first: 3) {\n    edges {\n      node {\n        id\n        ...ReviewListItem\n      }\n    }\n  }\n}\n\nfragment UserWatchedOverviewList on User {\n  viewedMovies(first: 3) {\n    edges {\n      node {\n        id\n        ...WatchedMovieListItem\n      }\n    }\n  }\n}\n\nfragment WatchedMovieListItem on Movie {\n  id\n  title\n  posterUrl\n  releaseDate\n}\n"
  }
};
})();

(node as any).hash = "bfcd912de7d233be06cd0c32718880f0";

export default node;
