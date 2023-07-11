/**
 * @generated SignedSource<<c734a691ef17313567f1466b046bd625>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type ReviewBreakdownQuery$variables = {
  id: string;
};
export type ReviewBreakdownQuery$data = {
  readonly movie: {
    readonly " $fragmentSpreads": FragmentRefs<"AgeScoreChart" | "GenderScoreChart" | "ScoreCountChart">;
  } | null;
};
export type ReviewBreakdownQuery = {
  response: ReviewBreakdownQuery$data;
  variables: ReviewBreakdownQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = {
  "kind": "Literal",
  "name": "authorType",
  "value": "Regular"
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ReviewBreakdownQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Movie",
        "kind": "LinkedField",
        "name": "movie",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "ScoreCountChart"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "GenderScoreChart"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "AgeScoreChart"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ReviewBreakdownQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Movie",
        "kind": "LinkedField",
        "name": "movie",
        "plural": false,
        "selections": [
          {
            "alias": "score0count",
            "args": [
              (v2/*: any*/),
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
              (v2/*: any*/),
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
              (v2/*: any*/),
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
              (v2/*: any*/),
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
              (v2/*: any*/),
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
              (v2/*: any*/),
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
              (v2/*: any*/),
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
              (v2/*: any*/),
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
              (v2/*: any*/),
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
              (v2/*: any*/),
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
              (v2/*: any*/),
              {
                "kind": "Literal",
                "name": "score",
                "value": 10
              }
            ],
            "kind": "ScalarField",
            "name": "numberOfReviewsPerScore",
            "storageKey": "numberOfReviewsPerScore(authorType:\"Regular\",score:10)"
          },
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
          },
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
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "4b8d22630d0b96f8cc83b8f2441e75f0",
    "id": null,
    "metadata": {},
    "name": "ReviewBreakdownQuery",
    "operationKind": "query",
    "text": "query ReviewBreakdownQuery(\n  $id: ID!\n) {\n  movie(id: $id) {\n    ...ScoreCountChart\n    ...GenderScoreChart\n    ...AgeScoreChart\n    id\n  }\n}\n\nfragment AgeScoreChart on Movie {\n  age14to20score: regularScoreByCriteria(minAge: 14, maxAge: 20)\n  age21to30score: regularScoreByCriteria(minAge: 21, maxAge: 30)\n  age31to50score: regularScoreByCriteria(minAge: 31, maxAge: 50)\n  age51score: regularScoreByCriteria(minAge: 51)\n}\n\nfragment GenderScoreChart on Movie {\n  maleScore: regularScoreByCriteria(gender: Male)\n  femaleScore: regularScoreByCriteria(gender: Female)\n  otherScore: regularScoreByCriteria(gender: Other)\n}\n\nfragment ScoreCountChart on Movie {\n  score0count: numberOfReviewsPerScore(authorType: Regular, score: 0)\n  score1count: numberOfReviewsPerScore(authorType: Regular, score: 1)\n  score2count: numberOfReviewsPerScore(authorType: Regular, score: 2)\n  score3count: numberOfReviewsPerScore(authorType: Regular, score: 3)\n  score4count: numberOfReviewsPerScore(authorType: Regular, score: 4)\n  score5count: numberOfReviewsPerScore(authorType: Regular, score: 5)\n  score6count: numberOfReviewsPerScore(authorType: Regular, score: 6)\n  score7count: numberOfReviewsPerScore(authorType: Regular, score: 7)\n  score8count: numberOfReviewsPerScore(authorType: Regular, score: 8)\n  score9count: numberOfReviewsPerScore(authorType: Regular, score: 9)\n  score10count: numberOfReviewsPerScore(authorType: Regular, score: 10)\n}\n"
  }
};
})();

(node as any).hash = "e3364d0484622a24641660157c94f723";

export default node;
