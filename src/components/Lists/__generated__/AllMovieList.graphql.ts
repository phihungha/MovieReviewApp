/**
 * @generated SignedSource<<c71815f3096b0fe30982f19cbee19e0c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment, RefetchableFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AllMovieList$data = {
  readonly movies: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
        readonly " $fragmentSpreads": FragmentRefs<"MovieGridItemFragment">;
      };
    } | null>;
  };
  readonly " $fragmentType": "AllMovieList";
};
export type AllMovieList$key = {
  readonly " $data"?: AllMovieList$data;
  readonly " $fragmentSpreads": FragmentRefs<"AllMovieList">;
};

const node: ReaderFragment = (function(){
var v0 = [
  "movies"
];
return {
  "argumentDefinitions": [
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
  "kind": "Fragment",
  "metadata": {
    "connection": [
      {
        "count": "count",
        "cursor": "cursor",
        "direction": "forward",
        "path": (v0/*: any*/)
      }
    ],
    "refetch": {
      "connection": {
        "forward": {
          "count": "count",
          "cursor": "cursor"
        },
        "backward": null,
        "path": (v0/*: any*/)
      },
      "fragmentPathInResult": [],
      "operation": require('./AllMovieListRefetchQuery.graphql')
    }
  },
  "name": "AllMovieList",
  "selections": [
    {
      "alias": "movies",
      "args": [
        {
          "kind": "Variable",
          "name": "genres",
          "variableName": "genres"
        },
        {
          "kind": "Variable",
          "name": "maxCriticScore",
          "variableName": "maxCriticScore"
        },
        {
          "kind": "Variable",
          "name": "maxRegularScore",
          "variableName": "maxRegularScore"
        },
        {
          "kind": "Variable",
          "name": "minCriticScore",
          "variableName": "minCriticScore"
        },
        {
          "kind": "Variable",
          "name": "minRegularScore",
          "variableName": "minRegularScore"
        },
        {
          "kind": "Variable",
          "name": "releaseYear",
          "variableName": "releaseYear"
        },
        {
          "kind": "Variable",
          "name": "sortBy",
          "variableName": "sortBy"
        },
        {
          "kind": "Variable",
          "name": "sortDirection",
          "variableName": "sortDirection"
        },
        {
          "kind": "Variable",
          "name": "titleContains",
          "variableName": "titleContains"
        }
      ],
      "concreteType": "MovieConnection",
      "kind": "LinkedField",
      "name": "__AllMovieListFragment_movies_connection",
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
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "MovieGridItemFragment"
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
    }
  ],
  "type": "Query",
  "abstractKey": null
};
})();

(node as any).hash = "03a74a5aef35332bc485fee38997c837";

export default node;
