/**
 * @generated SignedSource<<f10a1338f9d5c826febba94cc507de5e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MovieReviewListQuery$variables = {
  id: string;
};
export type MovieReviewListQuery$data = {
  readonly movie: {
    readonly " $fragmentSpreads": FragmentRefs<"CriticReviewList" | "MovieInfoDisplay" | "PersonalReview" | "RegularReviewList">;
  } | null;
};
export type MovieReviewListQuery = {
  response: MovieReviewListQuery$data;
  variables: MovieReviewListQuery$variables;
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
v2 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 4
  }
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
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
  "name": "score",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "authorType",
  "storageKey": null
},
v9 = {
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
    (v3/*: any*/)
  ],
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "posterUrl",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "releaseDate",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "criticScore",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "regularScore",
  "storageKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "concreteType": "Movie",
  "kind": "LinkedField",
  "name": "movie",
  "plural": false,
  "selections": [
    (v10/*: any*/),
    (v4/*: any*/),
    (v11/*: any*/),
    (v12/*: any*/),
    (v13/*: any*/),
    (v3/*: any*/)
  ],
  "storageKey": null
},
v15 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "thankCount",
  "storageKey": null
},
v16 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isThankedByViewer",
  "storageKey": null
},
v17 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "commentCount",
  "storageKey": null
},
v18 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "isMine",
  "storageKey": null
},
v19 = [
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
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
          (v8/*: any*/),
          (v9/*: any*/),
          (v14/*: any*/),
          (v15/*: any*/),
          (v16/*: any*/),
          (v17/*: any*/),
          (v18/*: any*/),
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
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "MovieReviewListQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Movie",
        "kind": "LinkedField",
        "name": "movie",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "CriticReviewList"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "RegularReviewList"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "PersonalReview"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "MovieInfoDisplay"
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
    "name": "MovieReviewListQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Movie",
        "kind": "LinkedField",
        "name": "movie",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v2/*: any*/),
            "concreteType": "ReviewConnection",
            "kind": "LinkedField",
            "name": "criticReviews",
            "plural": false,
            "selections": (v19/*: any*/),
            "storageKey": "criticReviews(first:4)"
          },
          {
            "alias": null,
            "args": (v2/*: any*/),
            "filters": [],
            "handle": "connection",
            "key": "CriticReviewListFragment_criticReviews",
            "kind": "LinkedHandle",
            "name": "criticReviews"
          },
          (v3/*: any*/),
          {
            "alias": null,
            "args": (v2/*: any*/),
            "concreteType": "ReviewConnection",
            "kind": "LinkedField",
            "name": "regularReviews",
            "plural": false,
            "selections": (v19/*: any*/),
            "storageKey": "regularReviews(first:4)"
          },
          {
            "alias": null,
            "args": (v2/*: any*/),
            "filters": [],
            "handle": "connection",
            "key": "RegularReviewListFragment_regularReviews",
            "kind": "LinkedHandle",
            "name": "regularReviews"
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Review",
            "kind": "LinkedField",
            "name": "viewerReview",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              (v7/*: any*/),
              (v8/*: any*/),
              (v9/*: any*/),
              (v14/*: any*/),
              (v15/*: any*/),
              (v16/*: any*/),
              (v17/*: any*/),
              (v18/*: any*/)
            ],
            "storageKey": null
          },
          (v10/*: any*/),
          (v4/*: any*/),
          (v11/*: any*/),
          (v12/*: any*/),
          (v13/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "cc0ab54860a34ea16fd4828a34e09271",
    "id": null,
    "metadata": {},
    "name": "MovieReviewListQuery",
    "operationKind": "query",
    "text": "query MovieReviewListQuery(\n  $id: ID!\n) {\n  movie(id: $id) {\n    ...CriticReviewList\n    ...RegularReviewList\n    ...PersonalReview\n    ...MovieInfoDisplay\n    id\n  }\n}\n\nfragment CriticReviewList on Movie {\n  criticReviews(first: 4) {\n    edges {\n      node {\n        id\n        ...ReviewListItem\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n\nfragment HorizontalUserDisplay on User {\n  avatarUrl\n  name\n  userType\n}\n\nfragment MovieInfoDisplay on Movie {\n  posterUrl\n  title\n  releaseDate\n  criticScore\n  regularScore\n}\n\nfragment PersonalReview on Movie {\n  viewerReview {\n    ...ReviewListItem\n    id\n  }\n}\n\nfragment RegularReviewList on Movie {\n  regularReviews(first: 4) {\n    edges {\n      node {\n        id\n        ...ReviewListItem\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n\nfragment ReviewCommentButton on Review {\n  commentCount\n}\n\nfragment ReviewInfoDisplay on Review {\n  title\n  content\n  postTime\n  score\n  authorType\n}\n\nfragment ReviewLikeButton on Review {\n  id\n  thankCount\n  isThankedByViewer\n}\n\nfragment ReviewListItem on Review {\n  id\n  ...ReviewInfoDisplay\n  author {\n    ...HorizontalUserDisplay\n    id\n  }\n  movie {\n    ...MovieInfoDisplay\n    id\n  }\n  ...ReviewLikeButton\n  ...ReviewCommentButton\n  isMine\n}\n"
  }
};
})();

(node as any).hash = "a45e2cd4e13f1770488212f7058b4e60";

export default node;
