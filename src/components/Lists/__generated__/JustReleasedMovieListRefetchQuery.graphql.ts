/**
 * @generated SignedSource<<fcdbe687987a2cf907c689775a9eb250>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import {ConcreteRequest, Query} from 'relay-runtime';
import {FragmentRefs} from 'relay-runtime';
export type JustReleasedMovieListRefetchQuery$variables = {
  count?: number | null;
  cursor?: string | null;
};
export type JustReleasedMovieListRefetchQuery$data = {
  readonly ' $fragmentSpreads': FragmentRefs<'JustReleasedMovieList'>;
};
export type JustReleasedMovieListRefetchQuery = {
  response: JustReleasedMovieListRefetchQuery$data;
  variables: JustReleasedMovieListRefetchQuery$variables;
};

const node: ConcreteRequest = (function () {
  var v0 = [
      {
        defaultValue: 1,
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
      name: 'JustReleasedMovieListRefetchQuery',
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
          name: 'JustReleasedMovieList',
        },
      ],
      type: 'Query',
      abstractKey: null,
    },
    kind: 'Request',
    operation: {
      argumentDefinitions: v0 /*: any*/,
      kind: 'Operation',
      name: 'JustReleasedMovieListRefetchQuery',
      selections: [
        {
          alias: null,
          args: v1 /*: any*/,
          concreteType: 'MovieConnection',
          kind: 'LinkedField',
          name: 'justReleasedMovies',
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
          key: 'JustReleasedMovieListFragment_justReleasedMovies',
          kind: 'LinkedHandle',
          name: 'justReleasedMovies',
        },
      ],
    },
    params: {
      cacheID: 'e3b260611659be37ce4eaad2cd669664',
      id: null,
      metadata: {},
      name: 'JustReleasedMovieListRefetchQuery',
      operationKind: 'query',
      text: 'query JustReleasedMovieListRefetchQuery(\n  $count: Int = 1\n  $cursor: ID\n) {\n  ...JustReleasedMovieList_1G22uz\n}\n\nfragment JustReleasedMovieList_1G22uz on Query {\n  justReleasedMovies(after: $cursor, first: $count) {\n    edges {\n      node {\n        id\n        ...MovieGridItemFragment\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment MovieGridItemFragment on Movie {\n  title\n  posterUrl\n  releaseDate\n  criticScore\n  regularScore\n}\n',
    },
  };
})();

(node as any).hash = '5f62da3db844af07d2785e2a09f97cae';

export default node;
