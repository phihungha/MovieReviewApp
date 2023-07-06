/**
 * @generated SignedSource<<eeeb1dd6025641ae652be639cd81c1eb>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type Gender = "Female" | "Male" | "Other" | "%future added value";
export type UserType = "Critic" | "Regular" | "%future added value";
export type UserDetailsScreenQuery$variables = {
  id: string;
};
export type UserDetailsScreenQuery$data = {
  readonly user: {
    readonly avatarUrl: string | null;
    readonly blogUrl: string | null;
    readonly dateOfBirth: any | null;
    readonly gender: Gender | null;
    readonly name: string;
    readonly userType: UserType;
    readonly username: string;
  } | null;
};
export type UserDetailsScreenQuery = {
  response: UserDetailsScreenQuery$data;
  variables: UserDetailsScreenQuery$variables;
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
  "name": "name",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "avatarUrl",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "dateOfBirth",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "gender",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "username",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "userType",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "blogUrl",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "UserDetailsScreenQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
          (v8/*: any*/)
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
    "name": "UserDetailsScreenQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          (v7/*: any*/),
          (v8/*: any*/),
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
    "cacheID": "443bf8dce0bb7d3d790a2e965f3c1e7e",
    "id": null,
    "metadata": {},
    "name": "UserDetailsScreenQuery",
    "operationKind": "query",
    "text": "query UserDetailsScreenQuery(\n  $id: ID!\n) {\n  user(id: $id) {\n    name\n    avatarUrl\n    dateOfBirth\n    gender\n    username\n    userType\n    blogUrl\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "00a925158ec57b011e98b8d33675f379";

export default node;
