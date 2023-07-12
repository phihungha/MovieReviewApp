/**
 * @generated SignedSource<<2e2025a7a9ca98a6a9ad915204b00522>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type EditReviewInput = {
  content?: string | null;
  externalUrl?: string | null;
  score?: number | null;
  title?: string | null;
};
export type EditReviewMutation$variables = {
  id: string;
  input: EditReviewInput;
};
export type EditReviewMutation$data = {
  readonly editReview: {
    readonly data?: {
      readonly movie: {
        readonly " $fragmentSpreads": FragmentRefs<"AgeScoreChart" | "CriticAggregateScoreIndicator" | "GenderScoreChart" | "RegularAggregateScoreIndicator" | "ScoreCountChart">;
      };
      readonly " $fragmentSpreads": FragmentRefs<"ReviewListItem">;
    };
    readonly message?: string;
  };
};
export type EditReviewMutation = {
  response: EditReviewMutation$data;
  variables: EditReviewMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  },
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "message",
      "storageKey": null
    }
  ],
  "type": "ValidationError",
  "abstractKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = {
  "kind": "Literal",
  "name": "authorType",
  "value": "Regular"
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "EditReviewMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "editReview",
        "plural": false,
        "selections": [
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Review",
                "kind": "LinkedField",
                "name": "data",
                "plural": false,
                "selections": [
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "ReviewListItem"
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Movie",
                    "kind": "LinkedField",
                    "name": "movie",
                    "plural": false,
                    "selections": [
                      {
                        "args": null,
                        "kind": "FragmentSpread",
                        "name": "CriticAggregateScoreIndicator"
                      },
                      {
                        "args": null,
                        "kind": "FragmentSpread",
                        "name": "RegularAggregateScoreIndicator"
                      },
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
                "storageKey": null
              }
            ],
            "type": "MutationEditReviewSuccess",
            "abstractKey": null
          },
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "EditReviewMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "editReview",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          },
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Review",
                "kind": "LinkedField",
                "name": "data",
                "plural": false,
                "selections": [
                  (v3/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "title",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "content",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "postTime",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "score",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "authorType",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "User",
                    "kind": "LinkedField",
                    "name": "author",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "avatarUrl",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "name",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "userType",
                        "storageKey": null
                      },
                      (v3/*: any*/)
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "thankCount",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "isThankedByViewer",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "commentCount",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Movie",
                    "kind": "LinkedField",
                    "name": "movie",
                    "plural": false,
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
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "regularScore",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "regularReviewCount",
                        "storageKey": null
                      },
                      {
                        "alias": "score0count",
                        "args": [
                          (v4/*: any*/),
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
                          (v4/*: any*/),
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
                          (v4/*: any*/),
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
                          (v4/*: any*/),
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
                          (v4/*: any*/),
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
                          (v4/*: any*/),
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
                          (v4/*: any*/),
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
                          (v4/*: any*/),
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
                          (v4/*: any*/),
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
                          (v4/*: any*/),
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
                          (v4/*: any*/),
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
                      (v3/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "type": "MutationEditReviewSuccess",
            "abstractKey": null
          },
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "3e14fd50388f46716660d478b3782918",
    "id": null,
    "metadata": {},
    "name": "EditReviewMutation",
    "operationKind": "mutation",
    "text": "mutation EditReviewMutation(\n  $id: ID!\n  $input: EditReviewInput!\n) {\n  editReview(id: $id, input: $input) {\n    __typename\n    ... on MutationEditReviewSuccess {\n      data {\n        ...ReviewListItem\n        movie {\n          ...CriticAggregateScoreIndicator\n          ...RegularAggregateScoreIndicator\n          ...ScoreCountChart\n          ...GenderScoreChart\n          ...AgeScoreChart\n          id\n        }\n        id\n      }\n    }\n    ... on ValidationError {\n      message\n    }\n  }\n}\n\nfragment AgeScoreChart on Movie {\n  age14to20score: regularScoreByCriteria(minAge: 14, maxAge: 20)\n  age21to30score: regularScoreByCriteria(minAge: 21, maxAge: 30)\n  age31to50score: regularScoreByCriteria(minAge: 31, maxAge: 50)\n  age51score: regularScoreByCriteria(minAge: 51)\n}\n\nfragment CriticAggregateScoreIndicator on Movie {\n  criticScore\n  criticReviewCount\n}\n\nfragment GenderScoreChart on Movie {\n  maleScore: regularScoreByCriteria(gender: Male)\n  femaleScore: regularScoreByCriteria(gender: Female)\n  otherScore: regularScoreByCriteria(gender: Other)\n}\n\nfragment HorizontalUserDisplay on User {\n  avatarUrl\n  name\n  userType\n}\n\nfragment RegularAggregateScoreIndicator on Movie {\n  regularScore\n  regularReviewCount\n}\n\nfragment ReviewCommentButton on Review {\n  commentCount\n}\n\nfragment ReviewInfoDisplay on Review {\n  title\n  content\n  postTime\n  score\n  authorType\n}\n\nfragment ReviewLikeButton on Review {\n  id\n  thankCount\n  isThankedByViewer\n}\n\nfragment ReviewListItem on Review {\n  id\n  ...ReviewInfoDisplay\n  author {\n    ...HorizontalUserDisplay\n    id\n  }\n  ...ReviewLikeButton\n  ...ReviewCommentButton\n}\n\nfragment ScoreCountChart on Movie {\n  score0count: numberOfReviewsPerScore(authorType: Regular, score: 0)\n  score1count: numberOfReviewsPerScore(authorType: Regular, score: 1)\n  score2count: numberOfReviewsPerScore(authorType: Regular, score: 2)\n  score3count: numberOfReviewsPerScore(authorType: Regular, score: 3)\n  score4count: numberOfReviewsPerScore(authorType: Regular, score: 4)\n  score5count: numberOfReviewsPerScore(authorType: Regular, score: 5)\n  score6count: numberOfReviewsPerScore(authorType: Regular, score: 6)\n  score7count: numberOfReviewsPerScore(authorType: Regular, score: 7)\n  score8count: numberOfReviewsPerScore(authorType: Regular, score: 8)\n  score9count: numberOfReviewsPerScore(authorType: Regular, score: 9)\n  score10count: numberOfReviewsPerScore(authorType: Regular, score: 10)\n}\n"
  }
};
})();

(node as any).hash = "733b3dcbd340403b622420cfd2524e14";

export default node;
