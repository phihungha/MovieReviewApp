/**
 * @generated SignedSource<<ef2f3b70c544fc8b5b0655c0cc24b8ae>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MovieSortBy = "criticScore" | "regularScore" | "releaseDate" | "title" | "viewedUserCount" | "%future added value";
export type SortDirection = "Asc" | "Desc" | "%future added value";
export type AllMovieListRefetchQuery$variables = {
  count?: number | null;
  cursor?: string | null;
  genres?: ReadonlyArray<string> | null;
  maxCriticScore?: number | null;
  maxRegularScore?: number | null;
  minCriticScore?: number | null;
  minRegularScore?: number | null;
  releaseYear?: number | null;
  sortBy?: MovieSortBy | null;
  sortDirection?: SortDirection | null;
  titleContains?: string | null;
};
export type AllMovieListRefetchQuery$data = {
  readonly " $fragmentSpreads": FragmentRefs<"AllMovieList">;
};
export type AllMovieListRefetchQuery = {
  response: AllMovieListRefetchQuery$data;
  variables: AllMovieListRefetchQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": 6,
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
    "name": "genres"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "maxCriticScore"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "maxRegularScore"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "minCriticScore"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "minRegularScore"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "releaseYear"
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
    "name": "titleContains"
  }
],
v1 = {
  "kind": "Variable",
  "name": "genres",
  "variableName": "genres"
},
v2 = {
  "kind": "Variable",
  "name": "maxCriticScore",
  "variableName": "maxCriticScore"
},
v3 = {
  "kind": "Variable",
  "name": "maxRegularScore",
  "variableName": "maxRegularScore"
},
v4 = {
  "kind": "Variable",
  "name": "minCriticScore",
  "variableName": "minCriticScore"
},
v5 = {
  "kind": "Variable",
  "name": "minRegularScore",
  "variableName": "minRegularScore"
},
v6 = {
  "kind": "Variable",
  "name": "releaseYear",
  "variableName": "releaseYear"
},
v7 = {
  "kind": "Variable",
  "name": "sortBy",
  "variableName": "sortBy"
},
v8 = {
  "kind": "Variable",
  "name": "sortDirection",
  "variableName": "sortDirection"
},
v9 = {
  "kind": "Variable",
  "name": "titleContains",
  "variableName": "titleContains"
},
v10 = [
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
  (v1/*: any*/),
  (v2/*: any*/),
  (v3/*: any*/),
  (v4/*: any*/),
  (v5/*: any*/),
  (v6/*: any*/),
  (v7/*: any*/),
  (v8/*: any*/),
  (v9/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "AllMovieListRefetchQuery",
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
          (v1/*: any*/),
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
          (v8/*: any*/),
          (v9/*: any*/)
        ],
        "kind": "FragmentSpread",
        "name": "AllMovieList"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AllMovieListRefetchQuery",
    "selections": [
      {
        "alias": null,
        "args": (v10/*: any*/),
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
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v10/*: any*/),
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
    "cacheID": "a4fb2ba0d287b0174cf25d92faf85638",
    "id": null,
    "metadata": {},
    "name": "AllMovieListRefetchQuery",
    "operationKind": "query",
    "text": "query AllMovieListRefetchQuery(\n  $count: Int = 6\n  $cursor: ID\n  $genres: [String!]\n  $maxCriticScore: Int\n  $maxRegularScore: Int\n  $minCriticScore: Int\n  $minRegularScore: Int\n  $releaseYear: Int\n  $sortBy: MovieSortBy\n  $sortDirection: SortDirection\n  $titleContains: String\n) {\n  ...AllMovieList_4pZxSw\n}\n\nfragment AllMovieList_4pZxSw on Query {\n  movies(after: $cursor, first: $count, sortBy: $sortBy, sortDirection: $sortDirection, titleContains: $titleContains, releaseYear: $releaseYear, genres: $genres, minCriticScore: $minCriticScore, maxCriticScore: $maxCriticScore, minRegularScore: $minRegularScore, maxRegularScore: $maxRegularScore) {\n    edges {\n      node {\n        id\n        ...MovieGridItemFragment\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment MovieGridItemFragment on Movie {\n  title\n  posterUrl\n  releaseDate\n  criticScore\n  regularScore\n}\n"
  }
};
})();

(node as any).hash = "03a74a5aef35332bc485fee38997c837";

export default node;
