/**
 * @generated SignedSource<<bf52545d96bf0221c981debe1397988f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type Gender = "Female" | "Male" | "Other" | "%future added value";
export type RegularUserUpdateInput = {
  avatarUrl?: string | null;
  dateOfBirth?: any | null;
  gender?: Gender | null;
  username?: string | null;
};
export type ManageAccountInfoRegularMutation$variables = {
  input: RegularUserUpdateInput;
};
export type ManageAccountInfoRegularMutation$data = {
  readonly updateRegularUser: {
    readonly data?: {
      readonly id: string;
    };
    readonly message?: string;
  };
};
export type ManageAccountInfoRegularMutation = {
  response: ManageAccountInfoRegularMutation$data;
  variables: ManageAccountInfoRegularMutation$variables;
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
  "type": "MutationUpdateRegularUserSuccess",
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
    "name": "ManageAccountInfoRegularMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "updateRegularUser",
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
    "name": "ManageAccountInfoRegularMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "updateRegularUser",
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
    "cacheID": "8b0de7b5bd22b100c2e2741d9892a25e",
    "id": null,
    "metadata": {},
    "name": "ManageAccountInfoRegularMutation",
    "operationKind": "mutation",
    "text": "mutation ManageAccountInfoRegularMutation(\n  $input: RegularUserUpdateInput!\n) {\n  updateRegularUser(input: $input) {\n    __typename\n    ... on MutationUpdateRegularUserSuccess {\n      data {\n        id\n      }\n    }\n    ... on ValidationError {\n      message\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "35e8f1558e31c9c028838de1d18dec21";

export default node;
