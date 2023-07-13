/**
 * @generated SignedSource<<b0ece4169475ae2b08aba00076d4c38b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type Gender = "Female" | "Male" | "Other" | "%future added value";
export type CriticSignUpInput = {
  blogUrl: string;
  dateOfBirth?: any | null;
  gender?: Gender | null;
  username: string;
};
export type SignUpCriticMutation$variables = {
  input: CriticSignUpInput;
};
export type SignUpCriticMutation$data = {
  readonly criticSignUp: {
    readonly data?: {
      readonly id: string;
    };
    readonly message?: string;
  };
};
export type SignUpCriticMutation = {
  response: SignUpCriticMutation$data;
  variables: SignUpCriticMutation$variables;
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
  "type": "MutationCriticSignUpSuccess",
  "abstractKey": null
},
v3 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "message",
    "storageKey": null
  }
],
v4 = {
  "kind": "InlineFragment",
  "selections": (v3/*: any*/),
  "type": "AlreadyExistsError",
  "abstractKey": null
},
v5 = {
  "kind": "InlineFragment",
  "selections": (v3/*: any*/),
  "type": "ValidationError",
  "abstractKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SignUpCriticMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "criticSignUp",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/)
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
    "name": "SignUpCriticMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "criticSignUp",
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
          (v4/*: any*/),
          (v5/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "6f78914ff474cba75753577a34a439cc",
    "id": null,
    "metadata": {},
    "name": "SignUpCriticMutation",
    "operationKind": "mutation",
    "text": "mutation SignUpCriticMutation(\n  $input: CriticSignUpInput!\n) {\n  criticSignUp(input: $input) {\n    __typename\n    ... on MutationCriticSignUpSuccess {\n      data {\n        id\n      }\n    }\n    ... on AlreadyExistsError {\n      message\n    }\n    ... on ValidationError {\n      message\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "8884e2b32f5dac4dfed828500df01cb7";

export default node;
