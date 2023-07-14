/**
 * @generated SignedSource<<0a2e4657b9e4809e1783d7bbbf2b2a28>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MarkMovieWatchedButtonMutation$variables = {
  id: string;
  isViewed: boolean;
};
export type MarkMovieWatchedButtonMutation$data = {
  readonly markMovieAsViewed: {
    readonly data?: {
      readonly " $fragmentSpreads": FragmentRefs<"MarkMovieWatchedButton">;
    };
  };
};
export type MarkMovieWatchedButtonMutation$rawResponse = {
  readonly markMovieAsViewed: {
    readonly __typename: "MutationMarkMovieAsViewedSuccess";
    readonly data: {
      readonly id: string;
      readonly isViewedByViewer: boolean | null;
    };
  } | {
    readonly __typename: string;
  };
};
export type MarkMovieWatchedButtonMutation = {
  rawResponse: MarkMovieWatchedButtonMutation$rawResponse;
  response: MarkMovieWatchedButtonMutation$data;
  variables: MarkMovieWatchedButtonMutation$variables;
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
    "name": "isViewed"
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
    "name": "isViewed",
    "variableName": "isViewed"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "MarkMovieWatchedButtonMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "markMovieAsViewed",
        "plural": false,
        "selections": [
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Movie",
                "kind": "LinkedField",
                "name": "data",
                "plural": false,
                "selections": [
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "MarkMovieWatchedButton"
                  }
                ],
                "storageKey": null
              }
            ],
            "type": "MutationMarkMovieAsViewedSuccess",
            "abstractKey": null
          }
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
    "name": "MarkMovieWatchedButtonMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "markMovieAsViewed",
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
                "concreteType": "Movie",
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
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "isViewedByViewer",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "type": "MutationMarkMovieAsViewedSuccess",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "ee567254e4f4dccf9663e289dc5d675c",
    "id": null,
    "metadata": {},
    "name": "MarkMovieWatchedButtonMutation",
    "operationKind": "mutation",
    "text": "mutation MarkMovieWatchedButtonMutation(\n  $id: ID!\n  $isViewed: Boolean!\n) {\n  markMovieAsViewed(id: $id, isViewed: $isViewed) {\n    __typename\n    ... on MutationMarkMovieAsViewedSuccess {\n      data {\n        ...MarkMovieWatchedButton\n        id\n      }\n    }\n  }\n}\n\nfragment MarkMovieWatchedButton on Movie {\n  id\n  isViewedByViewer\n}\n"
  }
};
})();

(node as any).hash = "a1170fe8e712799b0a8f819fbd985aaa";

export default node;
