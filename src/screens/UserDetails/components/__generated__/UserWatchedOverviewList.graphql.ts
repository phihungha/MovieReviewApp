/**
 * @generated SignedSource<<286dc1c2ed72fa6e53318709c502eaa6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type UserWatchedOverviewList$data = {
  readonly viewedMovies: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
        readonly " $fragmentSpreads": FragmentRefs<"WatchedMovieListItem">;
      };
    } | null>;
  };
  readonly " $fragmentType": "UserWatchedOverviewList";
};
export type UserWatchedOverviewList$key = {
  readonly " $data"?: UserWatchedOverviewList$data;
  readonly " $fragmentSpreads": FragmentRefs<"UserWatchedOverviewList">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "UserWatchedOverviewList",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "first",
          "value": 3
        }
      ],
      "concreteType": "MovieConnection",
      "kind": "LinkedField",
      "name": "viewedMovies",
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
                  "name": "WatchedMovieListItem"
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "viewedMovies(first:3)"
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "892d0998e96d1dd186b0ee84ad941bed";

export default node;
