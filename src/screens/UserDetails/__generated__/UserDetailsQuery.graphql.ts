/**
 * @generated SignedSource<<758b30fdb3bd295d2b0809173f3c8de3>>
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
    readonly " $fragmentSpreads": FragmentRefs<"UserReviewOverviewList" | "UserThankedReviewOverviewList">;
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
v11 = [
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
            "selections": (v11/*: any*/),
            "storageKey": "reviews(first:3)"
          },
          {
            "alias": null,
            "args": (v10/*: any*/),
            "concreteType": "ReviewConnection",
            "kind": "LinkedField",
            "name": "reviewThanks",
            "plural": false,
            "selections": (v11/*: any*/),
            "storageKey": "reviewThanks(first:3)"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "11fcba05b72888e0749bc1a7741c0cdc",
    "id": null,
    "metadata": {},
    "name": "UserDetailsQuery",
    "operationKind": "query",
    "text": "query UserDetailsQuery(\n  $id: ID!\n) {\n  user(id: $id) {\n    id\n    name\n    avatarUrl\n    dateOfBirth\n    gender\n    username\n    userType\n    blogUrl\n    ...UserReviewOverviewList\n    ...UserThankedReviewOverviewList\n  }\n}\n\nfragment HorizontalUserDisplay on User {\n  avatarUrl\n  name\n  userType\n}\n\nfragment ReviewCommentButton on Review {\n  commentCount\n}\n\nfragment ReviewInfoDisplay on Review {\n  title\n  content\n  postTime\n  score\n  authorType\n}\n\nfragment ReviewLikeButton on Review {\n  thankCount\n  isThankedByViewer\n}\n\nfragment ReviewListItem on Review {\n  id\n  ...ReviewInfoDisplay\n  author {\n    ...HorizontalUserDisplay\n    id\n  }\n  ...ReviewLikeButton\n  ...ReviewCommentButton\n}\n\nfragment UserReviewOverviewList on User {\n  reviews(first: 3) {\n    edges {\n      node {\n        id\n        ...ReviewListItem\n      }\n    }\n  }\n}\n\nfragment UserThankedReviewOverviewList on User {\n  reviewThanks(first: 3) {\n    edges {\n      node {\n        id\n        ...ReviewListItem\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "e77da18596d7f572972573a5cf1be023";

export default node;
