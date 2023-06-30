/**
 * @generated SignedSource<<1f7b926537c8dd7e49019f5a8536410d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type HomeQuery$variables = {};
export type HomeQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"JustReleasedMovieList" | "TrendingMovieList">;
};
export type HomeQuery = {
  response: HomeQuery$data;
  variables: HomeQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 6
  }
],
v1 = [
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
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
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
            "name": "posterUrl",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "releaseDate",
            "storageKey": null
          },
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
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "HomeQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "TrendingMovieList"
      },
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "JustReleasedMovieList"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "HomeQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "MovieConnection",
        "kind": "LinkedField",
        "name": "trendingMovies",
        "plural": false,
        "selections": (v1/*: any*/),
        "storageKey": "trendingMovies(first:6)"
      },
      {
        "alias": null,
        "args": (v0/*: any*/),
        "filters": null,
        "handle": "connection",
        "key": "TrendingMovieListFragment_trendingMovies",
        "kind": "LinkedHandle",
        "name": "trendingMovies"
      },
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "MovieConnection",
        "kind": "LinkedField",
        "name": "justReleasedMovies",
        "plural": false,
        "selections": (v1/*: any*/),
        "storageKey": "justReleasedMovies(first:6)"
      },
      {
        "alias": null,
        "args": (v0/*: any*/),
        "filters": null,
        "handle": "connection",
        "key": "JustReleasedMovieListFragment_justReleasedMovies",
        "kind": "LinkedHandle",
        "name": "justReleasedMovies"
      }
    ]
  },
  "params": {
    "cacheID": "c772885881130e0cf84e486ab9ae7b7d",
    "id": null,
    "metadata": {},
    "name": "HomeQuery",
    "operationKind": "query",
    "text": "query HomeQuery {\n  ...TrendingMovieList\n  ...JustReleasedMovieList\n}\n\nfragment JustReleasedMovieList on Query {\n  justReleasedMovies(first: 6) {\n    edges {\n      node {\n        id\n        ...MovieGridItemFragment\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment MovieGridItemFragment on Movie {\n  title\n  posterUrl\n  releaseDate\n  criticScore\n  regularScore\n}\n\nfragment TrendingMovieList on Query {\n  trendingMovies(first: 6) {\n    edges {\n      node {\n        id\n        ...MovieGridItemFragment\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "1b5574ccbefeb31ab393ac7c440f3f2b";

export default node;
