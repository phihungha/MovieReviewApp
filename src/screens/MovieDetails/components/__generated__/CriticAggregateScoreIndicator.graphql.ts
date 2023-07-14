/**
 * @generated SignedSource<<63bab69f16367587510fe3d06e732f49>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CriticAggregateScoreIndicator$data = {
  readonly criticReviewCount: number;
  readonly criticScore: number | null;
  readonly " $fragmentType": "CriticAggregateScoreIndicator";
};
export type CriticAggregateScoreIndicator$key = {
  readonly " $data"?: CriticAggregateScoreIndicator$data;
  readonly " $fragmentSpreads": FragmentRefs<"CriticAggregateScoreIndicator">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CriticAggregateScoreIndicator",
  "selections": [
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
      "name": "criticReviewCount",
      "storageKey": null
    }
  ],
  "type": "Movie",
  "abstractKey": null
};

(node as any).hash = "7402a13e9b2aca5df1f4e86099849cc0";

export default node;
