/**
 * @generated SignedSource<<bcb8d599141e504fc3fe72a6e584cfa1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type AgeScoreChart$data = {
  readonly age14to20score: number | null;
  readonly age21to30score: number | null;
  readonly age31to50score: number | null;
  readonly age51score: number | null;
  readonly " $fragmentType": "AgeScoreChart";
};
export type AgeScoreChart$key = {
  readonly " $data"?: AgeScoreChart$data;
  readonly " $fragmentSpreads": FragmentRefs<"AgeScoreChart">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AgeScoreChart",
  "selections": [
    {
      "alias": "age14to20score",
      "args": [
        {
          "kind": "Literal",
          "name": "maxAge",
          "value": 20
        },
        {
          "kind": "Literal",
          "name": "minAge",
          "value": 14
        }
      ],
      "kind": "ScalarField",
      "name": "regularScoreByCriteria",
      "storageKey": "regularScoreByCriteria(maxAge:20,minAge:14)"
    },
    {
      "alias": "age21to30score",
      "args": [
        {
          "kind": "Literal",
          "name": "maxAge",
          "value": 30
        },
        {
          "kind": "Literal",
          "name": "minAge",
          "value": 21
        }
      ],
      "kind": "ScalarField",
      "name": "regularScoreByCriteria",
      "storageKey": "regularScoreByCriteria(maxAge:30,minAge:21)"
    },
    {
      "alias": "age31to50score",
      "args": [
        {
          "kind": "Literal",
          "name": "maxAge",
          "value": 50
        },
        {
          "kind": "Literal",
          "name": "minAge",
          "value": 31
        }
      ],
      "kind": "ScalarField",
      "name": "regularScoreByCriteria",
      "storageKey": "regularScoreByCriteria(maxAge:50,minAge:31)"
    },
    {
      "alias": "age51score",
      "args": [
        {
          "kind": "Literal",
          "name": "minAge",
          "value": 51
        }
      ],
      "kind": "ScalarField",
      "name": "regularScoreByCriteria",
      "storageKey": "regularScoreByCriteria(minAge:51)"
    }
  ],
  "type": "Movie",
  "abstractKey": null
};

(node as any).hash = "78a9a081824e03a776dea2afb7166e57";

export default node;
