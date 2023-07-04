/**
 * @generated SignedSource<<de5af972bdfb11d72dbe8edc9141788a>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type MovieDetailsQuery$variables = {
  id: string;
};
export type MovieDetailsQuery$data = {
  readonly movie: {
    readonly posterUrl: string | null;
    readonly releaseDate: any;
    readonly runningTime: number;
    readonly title: string;
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
};
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
          (v5/*: any*/)
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
    "cacheID": "bd974cdafeb8c07b5365240b6d0dace7",
    "id": null,
    "metadata": {},
    "name": "MovieDetailsQuery",
    "operationKind": "query",
    "text": "query MovieDetailsQuery(\n  $id: ID!\n) {\n  movie(id: $id) {\n    title\n    releaseDate\n    runningTime\n    posterUrl\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "69d7d84e3e04bdb2807b2507448d3a58";

export default node;
