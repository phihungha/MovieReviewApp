/**
 * @generated SignedSource<<7342b907a4e2b806942e962a9d24f8ca>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type GenderScoreChart$data = {
  readonly femaleScore: number | null;
  readonly maleScore: number | null;
  readonly otherScore: number | null;
  readonly " $fragmentType": "GenderScoreChart";
};
export type GenderScoreChart$key = {
  readonly " $data"?: GenderScoreChart$data;
  readonly " $fragmentSpreads": FragmentRefs<"GenderScoreChart">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "GenderScoreChart",
  "selections": [
    {
      "alias": "maleScore",
      "args": [
        {
          "kind": "Literal",
          "name": "gender",
          "value": "Male"
        }
      ],
      "kind": "ScalarField",
      "name": "regularScoreByCriteria",
      "storageKey": "regularScoreByCriteria(gender:\"Male\")"
    },
    {
      "alias": "femaleScore",
      "args": [
        {
          "kind": "Literal",
          "name": "gender",
          "value": "Female"
        }
      ],
      "kind": "ScalarField",
      "name": "regularScoreByCriteria",
      "storageKey": "regularScoreByCriteria(gender:\"Female\")"
    },
    {
      "alias": "otherScore",
      "args": [
        {
          "kind": "Literal",
          "name": "gender",
          "value": "Other"
        }
      ],
      "kind": "ScalarField",
      "name": "regularScoreByCriteria",
      "storageKey": "regularScoreByCriteria(gender:\"Other\")"
    }
  ],
  "type": "Movie",
  "abstractKey": null
};

(node as any).hash = "60f935a73744282f08445b97c91612d8";

export default node;
