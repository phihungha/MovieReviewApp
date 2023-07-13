/**
 * @generated SignedSource<<f19705bbb1b41b22ce52c42e4a657ef9>>
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
      readonly " $fragmentSpreads": FragmentRefs<"CommentListItem">;
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
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "User",
                    "kind": "LinkedField",
                    "name": "author",
                    "plural": false,
                    "selections": [
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
                      },
                      (v2/*: any*/)
                    ],
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
                    "name": "content",
                    "storageKey": null
                  },
                  (v2/*: any*/)
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
    "cacheID": "f9671c6eaf1b52b9ec01b2803c0fe880",
    "id": null,
    "metadata": {},
    "name": "CommentEditorMutation",
    "operationKind": "mutation",
    "text": "mutation CommentEditorMutation(\n  $id: ID!\n  $input: EditCommentInput!\n) {\n  editComment(id: $id, input: $input) {\n    __typename\n    ... on MutationEditCommentSuccess {\n      data {\n        ...CommentListItem\n        id\n      }\n    }\n  }\n}\n\nfragment CommentContent on Comment {\n  content\n}\n\nfragment CommentEditor on Comment {\n  id\n  content\n  author {\n    id\n    avatarUrl\n    name\n  }\n  postTime\n}\n\nfragment CommentListItem on Comment {\n  author {\n    avatarUrl\n    name\n    id\n  }\n  postTime\n  ...CommentContent\n  ...CommentEditor\n}\n"
  }
};
})();

(node as any).hash = "7628b90e06ac8a476b35f4565fd0c7ed";

export default node;
