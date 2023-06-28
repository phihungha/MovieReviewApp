/**
 * @generated SignedSource<<f996b56b67f6c4c19e9df574d249bba5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import {ConcreteRequest, Query} from 'relay-runtime';
import {FragmentRefs} from 'relay-runtime';
export type HomeQuery$variables = {};
export type HomeQuery$data = {
  readonly justReleasedMovies: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
        readonly ' $fragmentSpreads': FragmentRefs<'MovieGridItemFragment'>;
      };
    } | null>;
  };
  readonly trendingMovies: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
        readonly ' $fragmentSpreads': FragmentRefs<'MovieGridItemFragment'>;
      };
    } | null>;
  };
};
export type HomeQuery = {
  response: HomeQuery$data;
  variables: HomeQuery$variables;
};

const node: ConcreteRequest = (function () {
  var v0 = {
      alias: null,
      args: null,
      kind: 'ScalarField',
      name: 'id',
      storageKey: null,
    },
    v1 = [
      {
        alias: null,
        args: null,
        concreteType: 'Movie',
        kind: 'LinkedField',
        name: 'node',
        plural: false,
        selections: [
          v0 /*: any*/,
          {
            args: null,
            kind: 'FragmentSpread',
            name: 'MovieGridItemFragment',
          },
        ],
        storageKey: null,
      },
    ],
    v2 = [
      {
        alias: null,
        args: null,
        concreteType: 'Movie',
        kind: 'LinkedField',
        name: 'node',
        plural: false,
        selections: [
          v0 /*: any*/,
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
        ],
        storageKey: null,
      },
    ];
  return {
    fragment: {
      argumentDefinitions: [],
      kind: 'Fragment',
      metadata: null,
      name: 'HomeQuery',
      selections: [
        {
          alias: null,
          args: null,
          concreteType: 'QueryTrendingMoviesConnection',
          kind: 'LinkedField',
          name: 'trendingMovies',
          plural: false,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: 'QueryTrendingMoviesConnectionEdge',
              kind: 'LinkedField',
              name: 'edges',
              plural: true,
              selections: v1 /*: any*/,
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: 'QueryJustReleasedMoviesConnection',
          kind: 'LinkedField',
          name: 'justReleasedMovies',
          plural: false,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: 'QueryJustReleasedMoviesConnectionEdge',
              kind: 'LinkedField',
              name: 'edges',
              plural: true,
              selections: v1 /*: any*/,
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: 'Query',
      abstractKey: null,
    },
    kind: 'Request',
    operation: {
      argumentDefinitions: [],
      kind: 'Operation',
      name: 'HomeQuery',
      selections: [
        {
          alias: null,
          args: null,
          concreteType: 'QueryTrendingMoviesConnection',
          kind: 'LinkedField',
          name: 'trendingMovies',
          plural: false,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: 'QueryTrendingMoviesConnectionEdge',
              kind: 'LinkedField',
              name: 'edges',
              plural: true,
              selections: v2 /*: any*/,
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: 'QueryJustReleasedMoviesConnection',
          kind: 'LinkedField',
          name: 'justReleasedMovies',
          plural: false,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: 'QueryJustReleasedMoviesConnectionEdge',
              kind: 'LinkedField',
              name: 'edges',
              plural: true,
              selections: v2 /*: any*/,
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
    },
    params: {
      cacheID: '6fb939d1f7c06fa1f378bb3c4fb14c5b',
      id: null,
      metadata: {},
      name: 'HomeQuery',
      operationKind: 'query',
      text: 'query HomeQuery {\n  trendingMovies {\n    edges {\n      node {\n        id\n        ...MovieGridItemFragment\n      }\n    }\n  }\n  justReleasedMovies {\n    edges {\n      node {\n        id\n        ...MovieGridItemFragment\n      }\n    }\n  }\n}\n\nfragment MovieGridItemFragment on Movie {\n  title\n  posterUrl\n  releaseDate\n  criticScore\n  regularScore\n}\n',
    },
  };
})();

(node as any).hash = 'cd30a42c1dbcd16edbb3a9abf9ef24b1';

export default node;
