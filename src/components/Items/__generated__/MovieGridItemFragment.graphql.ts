/**
 * @generated SignedSource<<1efd0f575d74adac14333bacf84e7124>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import {Fragment, ReaderFragment} from 'relay-runtime';
import {FragmentRefs} from 'relay-runtime';
export type MovieGridItemFragment$data = {
  readonly criticScore: number | null;
  readonly posterUrl: string | null;
  readonly regularScore: number | null;
  readonly releaseDate: any;
  readonly title: string;
  readonly ' $fragmentType': 'MovieGridItemFragment';
};
export type MovieGridItemFragment$key = {
  readonly ' $data'?: MovieGridItemFragment$data;
  readonly ' $fragmentSpreads': FragmentRefs<'MovieGridItemFragment'>;
};

const node: ReaderFragment = {
  argumentDefinitions: [],
  kind: 'Fragment',
  metadata: null,
  name: 'MovieGridItemFragment',
  selections: [
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
  type: 'Movie',
  abstractKey: null,
};

(node as any).hash = '3381f1eb7003eed0562a4d13c33170cd';

export default node;
