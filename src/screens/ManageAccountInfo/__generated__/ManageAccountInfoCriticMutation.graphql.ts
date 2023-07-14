/**
 * @generated SignedSource<<77fac2f1d2cf572dea17b80043ff5a3e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type Gender = "Female" | "Male" | "Other" | "%future added value";
export type CriticUserUpdateInput = {
  avatarUrl?: string | null;
  blogUrl?: string | null;
  dateOfBirth?: any | null;
  gender?: Gender | null;
  username?: string | null;
};
export type ManageAccountInfoCriticMutation$variables = {
  input: CriticUserUpdateInput;
};
export type ManageAccountInfoCriticMutation$data = {
  readonly updateCriticUser: {
    readonly data?: {
      readonly id: string;
    };
    readonly message?: string;
  };
};
export type ManageAccountInfoCriticMutation = {
  response: ManageAccountInfoCriticMutation$data;
  variables: ManageAccountInfoCriticMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
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
      "concreteType": "User",
      "kind": "LinkedField",
      "name": "data",
      "plural": false,
      "selections": [
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
  ],
  "type": "MutationUpdateCriticUserSuccess",
  "abstractKey": null
},
v3 = {
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
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ManageAccountInfoCriticMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "updateCriticUser",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/)
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
    "name": "ManageAccountInfoCriticMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "updateCriticUser",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          },
          (v2/*: any*/),
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "94d4964bd888d34f99b9302b171fa14d",
    "id": null,
    "metadata": {},
    "name": "ManageAccountInfoCriticMutation",
    "operationKind": "mutation",
    "text": "mutation ManageAccountInfoCriticMutation(\n  $input: CriticUserUpdateInput!\n) {\n  updateCriticUser(input: $input) {\n    __typename\n    ... on MutationUpdateCriticUserSuccess {\n      data {\n        id\n      }\n    }\n    ... on ValidationError {\n      message\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "2f590dfc9129ed1ad66fa3ad64fff7dd";

export default node;
