/**
 * @generated SignedSource<<adda297684503392823016ee4583008c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type EditCommentInput = {
  content?: string | null;
};
export type CommentEditorMutation$variables = {
  id: string;
  input: EditCommentInput;
};
export type CommentEditorMutation$data = {
  readonly editComment: {
    readonly data?: {
      readonly id: string;
      readonly " $fragmentSpreads": FragmentRefs<"CommentEditor" | "CommentListItem">;
    };
  };
};
export type CommentEditorMutation = {
  response: CommentEditorMutation$data;
  variables: CommentEditorMutation$variables;
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
    "name": "CommentEditorMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "editComment",
        "plural": false,
        "selections": [
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Comment",
                "kind": "LinkedField",
                "name": "data",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "CommentEditor"
                  },
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "CommentListItem"
                  }
                ],
                "storageKey": null
              }
            ],
            "type": "MutationEditCommentSuccess",
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
    "name": "CommentEditorMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "editComment",
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
                "concreteType": "Comment",
                "kind": "LinkedField",
                "name": "data",
                "plural": false,
                "selections": [
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
                    "concreteType": "User",
                    "kind": "LinkedField",
                    "name": "author",
                    "plural": false,
                    "selections": [
                      (v2/*: any*/),
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
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "postTime",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "type": "MutationEditCommentSuccess",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "28e62ffa28b804055276f430692cbc8e",
    "id": null,
    "metadata": {},
    "name": "CommentEditorMutation",
    "operationKind": "mutation",
    "text": "mutation CommentEditorMutation(\n  $id: ID!\n  $input: EditCommentInput!\n) {\n  editComment(id: $id, input: $input) {\n    __typename\n    ... on MutationEditCommentSuccess {\n      data {\n        id\n        ...CommentEditor\n        ...CommentListItem\n      }\n    }\n  }\n}\n\nfragment CommentContent on Comment {\n  content\n}\n\nfragment CommentEditor on Comment {\n  id\n  content\n  author {\n    id\n    avatarUrl\n    name\n  }\n  postTime\n}\n\nfragment CommentListItem on Comment {\n  author {\n    avatarUrl\n    name\n    id\n  }\n  postTime\n  ...CommentContent\n  ...CommentEditor\n}\n"
  }
};
})();

(node as any).hash = "2eea84e79700ddc88df38e6a3e119b7c";

export default node;
