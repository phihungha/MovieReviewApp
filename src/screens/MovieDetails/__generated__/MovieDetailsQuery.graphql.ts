/**
 * @generated SignedSource<<d47872bc02e1068730ac5103b6bb8881>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MovieDetailsQuery$variables = {
  id: string;
};
export type MovieDetailsQuery$data = {
  readonly movie: {
    readonly actingCredits: ReadonlyArray<{
      readonly id: string;
      readonly " $fragmentSpreads": FragmentRefs<"ActorListItem">;
    }>;
    readonly genres: ReadonlyArray<{
      readonly " $fragmentSpreads": FragmentRefs<"GenreListItem">;
    }>;
    readonly posterUrl: string | null;
    readonly releaseDate: any;
    readonly runningTime: number;
    readonly title: string;
    readonly workCredits: ReadonlyArray<{
      readonly id: string;
      readonly " $fragmentSpreads": FragmentRefs<"CrewListItem">;
    }>;
    readonly " $fragmentSpreads": FragmentRefs<"CriticAggregateScoreIndicator" | "RegularAggregateScoreIndicator" | "ReviewOverview">;
  } | null;
};
export type MovieDetailsQuery = {
  response: MovieDetailsQuery$data;
  variables: MovieDetailsQuery$variables;
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
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "releaseDate",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "runningTime",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "posterUrl",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "avatarUrl",
  "storageKey": null
},
v9 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 3
  },
  {
    "kind": "Literal",
    "name": "sortBy",
    "value": "ThankCount"
  }
],
v10 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "ReviewEdge",
    "kind": "LinkedField",
    "name": "edges",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Review",
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v6/*: any*/),
          (v2/*: any*/),
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
            "concreteType": "User",
            "kind": "LinkedField",
            "name": "author",
            "plural": false,
            "selections": [
              (v8/*: any*/),
              (v7/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "userType",
                "storageKey": null
              },
              (v6/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "MovieDetailsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Movie",
        "kind": "LinkedField",
        "name": "movie",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Genre",
            "kind": "LinkedField",
            "name": "genres",
            "plural": true,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "GenreListItem"
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "ActingCredit",
            "kind": "LinkedField",
            "name": "actingCredits",
            "plural": true,
            "selections": [
              (v6/*: any*/),
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "ActorListItem"
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "WorkCredit",
            "kind": "LinkedField",
            "name": "workCredits",
            "plural": true,
            "selections": [
              (v6/*: any*/),
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "CrewListItem"
              }
            ],
            "storageKey": null
          },
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
            "name": "ReviewOverview"
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
    "name": "MovieDetailsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Movie",
        "kind": "LinkedField",
        "name": "movie",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Genre",
            "kind": "LinkedField",
            "name": "genres",
            "plural": true,
            "selections": [
              (v7/*: any*/),
              (v6/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "ActingCredit",
            "kind": "LinkedField",
            "name": "actingCredits",
            "plural": true,
            "selections": [
              (v6/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "CrewMember",
                "kind": "LinkedField",
                "name": "actor",
                "plural": false,
                "selections": [
                  (v8/*: any*/),
                  (v7/*: any*/),
                  (v6/*: any*/)
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "characterName",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "WorkCredit",
            "kind": "LinkedField",
            "name": "workCredits",
            "plural": true,
            "selections": [
              (v6/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "CrewMember",
                "kind": "LinkedField",
                "name": "crew",
                "plural": false,
                "selections": [
                  (v7/*: any*/),
                  (v8/*: any*/),
                  (v6/*: any*/)
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "role",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
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
            "alias": null,
            "args": (v9/*: any*/),
            "concreteType": "ReviewConnection",
            "kind": "LinkedField",
            "name": "criticReviews",
            "plural": false,
            "selections": (v10/*: any*/),
            "storageKey": "criticReviews(first:3,sortBy:\"ThankCount\")"
          },
          {
            "alias": null,
            "args": (v9/*: any*/),
            "concreteType": "ReviewConnection",
            "kind": "LinkedField",
            "name": "regularReviews",
            "plural": false,
            "selections": (v10/*: any*/),
            "storageKey": "regularReviews(first:3,sortBy:\"ThankCount\")"
          },
          (v6/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "13b95e5a2c386bb199d54b0bfa78f670",
    "id": null,
    "metadata": {},
    "name": "MovieDetailsQuery",
    "operationKind": "query",
    "text": "query MovieDetailsQuery(\n  $id: ID!\n) {\n  movie(id: $id) {\n    title\n    releaseDate\n    runningTime\n    posterUrl\n    genres {\n      ...GenreListItem\n      id\n    }\n    actingCredits {\n      id\n      ...ActorListItem\n    }\n    workCredits {\n      id\n      ...CrewListItem\n    }\n    ...CriticAggregateScoreIndicator\n    ...RegularAggregateScoreIndicator\n    ...ReviewOverview\n    id\n  }\n}\n\nfragment ActorListItem on ActingCredit {\n  actor {\n    avatarUrl\n    name\n    id\n  }\n  characterName\n}\n\nfragment CrewListItem on WorkCredit {\n  crew {\n    name\n    avatarUrl\n    id\n  }\n  role\n}\n\nfragment CriticAggregateScoreIndicator on Movie {\n  criticScore\n  criticReviewCount\n}\n\nfragment GenreListItem on Genre {\n  name\n}\n\nfragment HorizontalUserDisplay on User {\n  avatarUrl\n  name\n  userType\n}\n\nfragment RegularAggregateScoreIndicator on Movie {\n  regularScore\n  regularReviewCount\n}\n\nfragment ReviewInfoDisplay on Review {\n  title\n  content\n  postTime\n  score\n}\n\nfragment ReviewListItem on Review {\n  ...ReviewInfoDisplay\n  author {\n    ...HorizontalUserDisplay\n    id\n  }\n}\n\nfragment ReviewOverview on Movie {\n  criticReviews(first: 3, sortBy: ThankCount) {\n    edges {\n      node {\n        id\n        ...ReviewListItem\n      }\n    }\n  }\n  regularReviews(first: 3, sortBy: ThankCount) {\n    edges {\n      node {\n        id\n        ...ReviewListItem\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "6c0d2a57b549ad5589981c2d11206293";

export default node;
