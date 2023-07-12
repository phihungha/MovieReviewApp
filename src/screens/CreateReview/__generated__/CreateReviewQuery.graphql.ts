/**
 * @generated SignedSource<<2d3babff02c2388611b0704bb458e646>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CreateReviewQuery$variables = {
  id: string;
};
export type CreateReviewQuery$data = {
  readonly movie: {
    readonly id: string;
    readonly " $fragmentSpreads": FragmentRefs<"CreateReviewMovieInfo">;
  } | null;
};
export type CreateReviewQuery = {
  response: CreateReviewQuery$data;
  variables: CreateReviewQuery$variables;
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
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CreateReviewQuery",
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
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "CreateReviewMovieInfo"
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
    "name": "CreateReviewQuery",
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
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "posterUrl",
            "storageKey": null
          },
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
            "name": "releaseDate",
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
            "name": "regularScore",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "27e4d7b3d389c2ecbea9e460e5ef38ea",
    "id": null,
    "metadata": {},
    "name": "CreateReviewQuery",
    "operationKind": "query",
    "text": "query CreateReviewQuery(\n  $id: ID!\n) {\n  movie(id: $id) {\n    id\n    ...CreateReviewMovieInfo\n  }\n}\n\nfragment CreateReviewMovieInfo on Movie {\n  posterUrl\n  title\n  releaseDate\n  criticScore\n  regularScore\n}\n"
  }
};
})();

(node as any).hash = "c68de9f7d469d36b2c227b661525f800";

export default node;
