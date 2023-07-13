/**
 * @generated SignedSource<<54d0f6ad2a5efd8f261e00f565c15617>>
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
export type UserDetailsQuery$variables = {
  id: string;
};
export type UserDetailsQuery$data = {
  readonly user: {
    readonly avatarUrl: string | null;
    readonly blogUrl: string | null;
    readonly dateOfBirth: any | null;
    readonly gender: Gender | null;
    readonly id: string;
    readonly name: string;
    readonly userType: UserType;
    readonly username: string;
    readonly " $fragmentSpreads": FragmentRefs<"UserReviewOverviewList" | "UserThankedReviewOverviewList" | "UserWatchedOverviewList">;
  } | null;
};
export type UserDetailsQuery = {
  response: UserDetailsQuery$data;
  variables: UserDetailsQuery$variables;
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
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "avatarUrl",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "dateOfBirth",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "gender",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "username",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "userType",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "blogUrl",
  "storageKey": null
},
v10 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 3
  }
],
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "posterUrl",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "releaseDate",
  "storageKey": null
},
v14 = [
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
          (v2/*: any*/),
          (v11/*: any*/),
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
              (v4/*: any*/),
              (v3/*: any*/),
              (v8/*: any*/),
              (v2/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Movie",
            "kind": "LinkedField",
            "name": "movie",
            "plural": false,
            "selections": [
              (v12/*: any*/),
              (v11/*: any*/),
              (v13/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "criticScore",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "regularScore",
                "storageKey": null
              },
              (v2/*: any*/)
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "UserDetailsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
          (v8/*: any*/),
          (v9/*: any*/),
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "UserDetailsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
          (v8/*: any*/),
          (v9/*: any*/),
          {
            "alias": null,
            "args": (v10/*: any*/),
            "concreteType": "ReviewConnection",
            "kind": "LinkedField",
            "name": "reviews",
            "plural": false,
            "selections": (v14/*: any*/),
            "storageKey": "reviews(first:3)"
          },
          {
            "alias": null,
            "args": (v10/*: any*/),
            "concreteType": "ReviewConnection",
            "kind": "LinkedField",
            "name": "reviewThanks",
            "plural": false,
            "selections": (v14/*: any*/),
            "storageKey": "reviewThanks(first:3)"
          },
          {
            "alias": null,
            "args": (v10/*: any*/),
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
                      (v2/*: any*/),
                      (v11/*: any*/),
                      (v12/*: any*/),
                      (v13/*: any*/)
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
    "cacheID": "f44c08c2fccb2a294ced8e231e3fd215",
    "id": null,
    "metadata": {},
    "name": "UserDetailsQuery",
    "operationKind": "query",
    "text": "query UserDetailsQuery(\n  $id: ID!\n) {\n  user(id: $id) {\n    id\n    name\n    avatarUrl\n    dateOfBirth\n    gender\n    username\n    userType\n    blogUrl\n    ...UserReviewOverviewList\n    ...UserThankedReviewOverviewList\n    ...UserWatchedOverviewList\n  }\n}\n\nfragment HorizontalUserDisplay on User {\n  avatarUrl\n  name\n  userType\n}\n\nfragment MovieInfoDisplay on Movie {\n  posterUrl\n  title\n  releaseDate\n  criticScore\n  regularScore\n}\n\nfragment ReviewCommentButton on Review {\n  commentCount\n}\n\nfragment ReviewInfoDisplay on Review {\n  title\n  content\n  postTime\n  score\n  authorType\n}\n\nfragment ReviewLikeButton on Review {\n  id\n  thankCount\n  isThankedByViewer\n}\n\nfragment ReviewListItem on Review {\n  id\n  ...ReviewInfoDisplay\n  author {\n    ...HorizontalUserDisplay\n    id\n  }\n  movie {\n    ...MovieInfoDisplay\n    id\n  }\n  ...ReviewLikeButton\n  ...ReviewCommentButton\n}\n\nfragment UserReviewOverviewList on User {\n  reviews(first: 3) {\n    edges {\n      node {\n        id\n        ...ReviewListItem\n      }\n    }\n  }\n}\n\nfragment UserThankedReviewOverviewList on User {\n  reviewThanks(first: 3) {\n    edges {\n      node {\n        id\n        ...ReviewListItem\n      }\n    }\n  }\n}\n\nfragment UserWatchedOverviewList on User {\n  viewedMovies(first: 3) {\n    edges {\n      node {\n        id\n        ...WatchedMovieListItem\n      }\n    }\n  }\n}\n\nfragment WatchedMovieListItem on Movie {\n  id\n  title\n  posterUrl\n  releaseDate\n}\n"
  }
};
})();

(node as any).hash = "041159c2469df93717d9f37a4227ccdb";

export default node;
