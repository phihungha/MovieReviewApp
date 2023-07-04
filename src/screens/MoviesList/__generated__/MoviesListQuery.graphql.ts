/**
 * @generated SignedSource<<abf40fe7265d5de46483120e511cab61>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MoviesListQuery$variables = {};
export type MoviesListQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"AllMovieList">;
};
export type MoviesListQuery = {
  response: MoviesListQuery$data;
  variables: MoviesListQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 6
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "MoviesListQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "AllMovieList"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "MoviesListQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "MovieConnection",
        "kind": "LinkedField",
        "name": "movies",
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
        ],
        "storageKey": "movies(first:6)"
      },
      {
        "alias": null,
        "args": (v0/*: any*/),
        "filters": [
          "sortBy",
          "sortDirection",
          "titleContains",
          "releaseYear",
          "genres",
          "minCriticScore",
          "maxCriticScore",
          "minRegularScore",
          "maxRegularScore"
        ],
        "handle": "connection",
        "key": "AllMovieListFragment_movies",
        "kind": "LinkedHandle",
        "name": "movies"
      }
    ]
  },
  "params": {
    "cacheID": "85e7b83f0f0af19a0cb95ad92f41b310",
    "id": null,
    "metadata": {},
    "name": "MoviesListQuery",
    "operationKind": "query",
    "text": "query MoviesListQuery {\n  ...AllMovieList\n}\n\nfragment AllMovieList on Query {\n  movies(first: 6) {\n    edges {\n      node {\n        id\n        ...MovieGridItemFragment\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment MovieGridItemFragment on Movie {\n  id\n  title\n  posterUrl\n  releaseDate\n  criticScore\n  regularScore\n}\n"
  }
};
})();

(node as any).hash = "52f2afdde05825c2825829e13a6922d4";

export default node;
