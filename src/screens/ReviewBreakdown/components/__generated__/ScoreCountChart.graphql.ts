/**
 * @generated SignedSource<<58cb2713b8a9d47e1dbe022537388c1d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ScoreCountChart$data = {
  readonly score0count: number;
  readonly score10count: number;
  readonly score1count: number;
  readonly score2count: number;
  readonly score3count: number;
  readonly score4count: number;
  readonly score5count: number;
  readonly score6count: number;
  readonly score7count: number;
  readonly score8count: number;
  readonly score9count: number;
  readonly " $fragmentType": "ScoreCountChart";
};
export type ScoreCountChart$key = {
  readonly " $data"?: ScoreCountChart$data;
  readonly " $fragmentSpreads": FragmentRefs<"ScoreCountChart">;
};

const node: ReaderFragment = (function(){
var v0 = {
  "kind": "Literal",
  "name": "authorType",
  "value": "Regular"
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ScoreCountChart",
  "selections": [
    {
      "alias": "score0count",
      "args": [
        (v0/*: any*/),
        {
          "kind": "Literal",
          "name": "score",
          "value": 0
        }
      ],
      "kind": "ScalarField",
      "name": "numberOfReviewsPerScore",
      "storageKey": "numberOfReviewsPerScore(authorType:\"Regular\",score:0)"
    },
    {
      "alias": "score1count",
      "args": [
        (v0/*: any*/),
        {
          "kind": "Literal",
          "name": "score",
          "value": 1
        }
      ],
      "kind": "ScalarField",
      "name": "numberOfReviewsPerScore",
      "storageKey": "numberOfReviewsPerScore(authorType:\"Regular\",score:1)"
    },
    {
      "alias": "score2count",
      "args": [
        (v0/*: any*/),
        {
          "kind": "Literal",
          "name": "score",
          "value": 2
        }
      ],
      "kind": "ScalarField",
      "name": "numberOfReviewsPerScore",
      "storageKey": "numberOfReviewsPerScore(authorType:\"Regular\",score:2)"
    },
    {
      "alias": "score3count",
      "args": [
        (v0/*: any*/),
        {
          "kind": "Literal",
          "name": "score",
          "value": 3
        }
      ],
      "kind": "ScalarField",
      "name": "numberOfReviewsPerScore",
      "storageKey": "numberOfReviewsPerScore(authorType:\"Regular\",score:3)"
    },
    {
      "alias": "score4count",
      "args": [
        (v0/*: any*/),
        {
          "kind": "Literal",
          "name": "score",
          "value": 4
        }
      ],
      "kind": "ScalarField",
      "name": "numberOfReviewsPerScore",
      "storageKey": "numberOfReviewsPerScore(authorType:\"Regular\",score:4)"
    },
    {
      "alias": "score5count",
      "args": [
        (v0/*: any*/),
        {
          "kind": "Literal",
          "name": "score",
          "value": 5
        }
      ],
      "kind": "ScalarField",
      "name": "numberOfReviewsPerScore",
      "storageKey": "numberOfReviewsPerScore(authorType:\"Regular\",score:5)"
    },
    {
      "alias": "score6count",
      "args": [
        (v0/*: any*/),
        {
          "kind": "Literal",
          "name": "score",
          "value": 6
        }
      ],
      "kind": "ScalarField",
      "name": "numberOfReviewsPerScore",
      "storageKey": "numberOfReviewsPerScore(authorType:\"Regular\",score:6)"
    },
    {
      "alias": "score7count",
      "args": [
        (v0/*: any*/),
        {
          "kind": "Literal",
          "name": "score",
          "value": 7
        }
      ],
      "kind": "ScalarField",
      "name": "numberOfReviewsPerScore",
      "storageKey": "numberOfReviewsPerScore(authorType:\"Regular\",score:7)"
    },
    {
      "alias": "score8count",
      "args": [
        (v0/*: any*/),
        {
          "kind": "Literal",
          "name": "score",
          "value": 8
        }
      ],
      "kind": "ScalarField",
      "name": "numberOfReviewsPerScore",
      "storageKey": "numberOfReviewsPerScore(authorType:\"Regular\",score:8)"
    },
    {
      "alias": "score9count",
      "args": [
        (v0/*: any*/),
        {
          "kind": "Literal",
          "name": "score",
          "value": 9
        }
      ],
      "kind": "ScalarField",
      "name": "numberOfReviewsPerScore",
      "storageKey": "numberOfReviewsPerScore(authorType:\"Regular\",score:9)"
    },
    {
      "alias": "score10count",
      "args": [
        (v0/*: any*/),
        {
          "kind": "Literal",
          "name": "score",
          "value": 10
        }
      ],
      "kind": "ScalarField",
      "name": "numberOfReviewsPerScore",
      "storageKey": "numberOfReviewsPerScore(authorType:\"Regular\",score:10)"
    }
  ],
  "type": "Movie",
  "abstractKey": null
};
})();

(node as any).hash = "31463524dfc3f1415f3c17354461a3b2";

export default node;
