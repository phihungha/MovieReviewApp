/**
 * @generated SignedSource<<87bd23fb606a9e0600563814b7801db7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type Gender = "Female" | "Male" | "Other" | "%future added value";
export type RegularSignUpInput = {
  dateOfBirth?: any | null;
  gender?: Gender | null;
  username: string;
};
export type SignUpRegularMutation$variables = {
  input: RegularSignUpInput;
};
export type SignUpRegularMutation$data = {
  readonly regularSignUp: {
    readonly data?: {
      readonly id: string;
    };
    readonly message?: string;
  };
};
export type SignUpRegularMutation = {
  response: SignUpRegularMutation$data;
  variables: SignUpRegularMutation$variables;
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
  "type": "MutationRegularSignUpSuccess",
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
    "name": "SignUpRegularMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "regularSignUp",
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
    "name": "SignUpRegularMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "regularSignUp",
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
    "cacheID": "b67f77e20a0e53f2a5157f01f8af42ac",
    "id": null,
    "metadata": {},
    "name": "SignUpRegularMutation",
    "operationKind": "mutation",
    "text": "mutation SignUpRegularMutation(\n  $input: RegularSignUpInput!\n) {\n  regularSignUp(input: $input) {\n    __typename\n    ... on MutationRegularSignUpSuccess {\n      data {\n        id\n      }\n    }\n    ... on AlreadyExistsError {\n      message\n    }\n    ... on ValidationError {\n      message\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "8ff551d61ee226610ddc948e1653b836";

export default node;
