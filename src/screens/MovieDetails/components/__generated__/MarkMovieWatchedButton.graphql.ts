/**
 * @generated SignedSource<<987a85cd6ec1a7551d36ee535257c8e9>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MarkMovieWatchedButton$data = {
  readonly id: string;
  readonly isViewedByViewer: boolean | null;
  readonly " $fragmentType": "MarkMovieWatchedButton";
};
export type MarkMovieWatchedButton$key = {
  readonly " $data"?: MarkMovieWatchedButton$data;
  readonly " $fragmentSpreads": FragmentRefs<"MarkMovieWatchedButton">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MarkMovieWatchedButton",
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
      "name": "isViewedByViewer",
      "storageKey": null
    }
  ],
  "type": "Movie",
  "abstractKey": null
};

(node as any).hash = "cbeae9c2dcb1d5843f904a88507dfffd";

export default node;
