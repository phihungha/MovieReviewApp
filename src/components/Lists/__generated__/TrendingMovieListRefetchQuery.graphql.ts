/**
 * @generated SignedSource<<c6c45b7bd1737d5bc14871e32bb2c2c2>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import {ConcreteRequest, Query} from 'relay-runtime';
import {FragmentRefs} from 'relay-runtime';
export type TrendingMovieListRefetchQuery$variables = {
  count?: number | null;
  cursor?: string | null;
};
export type TrendingMovieListRefetchQuery$data = {
  readonly ' $fragmentSpreads': FragmentRefs<'TrendingMovieList'>;
};
export type TrendingMovieListRefetchQuery = {
  response: TrendingMovieListRefetchQuery$data;
  variables: TrendingMovieListRefetchQuery$variables;
};

const node: ConcreteRequest = (function () {
  var v0 = [
      {
        defaultValue: 6,
        kind: 'LocalArgument',
        name: 'count',
      },
      {
        defaultValue: null,
        kind: 'LocalArgument',
        name: 'cursor',
      },
    ],
    v1 = [
      {
        kind: 'Variable',
        name: 'after',
        variableName: 'cursor',
      },
      {
        kind: 'Variable',
        name: 'first',
        variableName: 'count',
      },
    ];
  return {
    fragment: {
      argumentDefinitions: v0 /*: any*/,
      kind: 'Fragment',
      metadata: null,
      name: 'TrendingMovieListRefetchQuery',
      selections: [
        {
          args: [
            {
              kind: 'Variable',
              name: 'count',
              variableName: 'count',
            },
            {
              kind: 'Variable',
              name: 'cursor',
              variableName: 'cursor',
            },
          ],
          kind: 'FragmentSpread',
          name: 'TrendingMovieList',
        },
      ],
      type: 'Query',
      abstractKey: null,
    },
    kind: 'Request',
    operation: {
      argumentDefinitions: v0 /*: any*/,
      kind: 'Operation',
      name: 'TrendingMovieListRefetchQuery',
      selections: [
        {
          alias: null,
          args: v1 /*: any*/,
          concreteType: 'MovieConnection',
          kind: 'LinkedField',
          name: 'trendingMovies',
          plural: false,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: 'MovieEdge',
              kind: 'LinkedField',
              name: 'edges',
              plural: true,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: 'Movie',
                  kind: 'LinkedField',
                  name: 'node',
                  plural: false,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: 'ScalarField',
                      name: 'id',
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: 'ScalarField',
                      name: 'title',
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: 'ScalarField',
                      name: 'posterUrl',
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: 'ScalarField',
                      name: 'releaseDate',
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: 'ScalarField',
                      name: 'criticScore',
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: 'ScalarField',
                      name: 'regularScore',
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: 'ScalarField',
                      name: '__typename',
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: 'ScalarField',
                  name: 'cursor',
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: 'PageInfo',
              kind: 'LinkedField',
              name: 'pageInfo',
              plural: false,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: 'ScalarField',
                  name: 'endCursor',
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: 'ScalarField',
                  name: 'hasNextPage',
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        {
          alias: null,
          args: v1 /*: any*/,
          filters: null,
          handle: 'connection',
          key: 'TrendingMovieListFragment_trendingMovies',
          kind: 'LinkedHandle',
          name: 'trendingMovies',
        },
      ],
    },
    params: {
      cacheID: '08d3ea6b2c3c04dc08439cc534e384a2',
      id: null,
      metadata: {},
      name: 'TrendingMovieListRefetchQuery',
      operationKind: 'query',
      text: 'query TrendingMovieListRefetchQuery(\n  $count: Int = 6\n  $cursor: ID\n) {\n  ...TrendingMovieList_1G22uz\n}\n\nfragment MovieGridItemFragment on Movie {\n  title\n  posterUrl\n  releaseDate\n  criticScore\n  regularScore\n}\n\nfragment TrendingMovieList_1G22uz on Query {\n  trendingMovies(after: $cursor, first: $count) {\n    edges {\n      node {\n        id\n        ...MovieGridItemFragment\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n',
    },
  };
})();

(node as any).hash = 'da81fe3470c485eec5d46994e82a6d0a';

export default node;
