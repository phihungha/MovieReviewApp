/**
 * @generated SignedSource<<018f7649e2db1ddad9f9aceee3d2fdb0>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CreateCommentInput = {
  content: string;
  reviewId: string;
};
export type CommentCreatorMutation$variables = {
  connections: ReadonlyArray<string>;
  input: CreateCommentInput;
};
export type CommentCreatorMutation$data = {
  readonly createComment: {
    readonly data?: {
      readonly review: {
        readonly " $fragmentSpreads": FragmentRefs<"ReviewCommentButton">;
      };
      readonly " $fragmentSpreads": FragmentRefs<"CommentListItem">;
    };
  };
};
export type CommentCreatorMutation = {
  response: CommentCreatorMutation$data;
  variables: CommentCreatorMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "connections"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "input"
},
v2 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "CommentCreatorMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "createComment",
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
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Review",
                    "kind": "LinkedField",
                    "name": "review",
                    "plural": false,
                    "selections": [
                      {
                        "args": null,
                        "kind": "FragmentSpread",
                        "name": "ReviewCommentButton"
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "type": "MutationCreateCommentSuccess",
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
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "CommentCreatorMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "createComment",
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
                  (v3/*: any*/),
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
                      (v3/*: any*/)
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "isMine",
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
                    "name": "lastUpdateTime",
                    "storageKey": null
                  },
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
                    "concreteType": "Review",
                    "kind": "LinkedField",
                    "name": "review",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "commentCount",
                        "storageKey": null
                      },
                      (v3/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "filters": null,
                "handle": "prependNode",
                "key": "",
                "kind": "LinkedHandle",
                "name": "data",
                "handleArgs": [
                  {
                    "kind": "Variable",
                    "name": "connections",
                    "variableName": "connections"
                  },
                  {
                    "kind": "Literal",
                    "name": "edgeTypeName",
                    "value": "CommentEdge"
                  }
                ]
              }
            ],
            "type": "MutationCreateCommentSuccess",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "6323e2d2b689ee48a740e6fde0cc23e0",
    "id": null,
    "metadata": {},
    "name": "CommentCreatorMutation",
    "operationKind": "mutation",
    "text": "mutation CommentCreatorMutation(\n  $input: CreateCommentInput!\n) {\n  createComment(input: $input) {\n    __typename\n    ... on MutationCreateCommentSuccess {\n      data {\n        ...CommentListItem\n        review {\n          ...ReviewCommentButton\n          id\n        }\n        id\n      }\n    }\n  }\n}\n\nfragment CommentContent on Comment {\n  content\n}\n\nfragment CommentEditor on Comment {\n  id\n  content\n  author {\n    id\n    avatarUrl\n    name\n  }\n  postTime\n}\n\nfragment CommentListItem on Comment {\n  id\n  author {\n    avatarUrl\n    name\n    id\n  }\n  isMine\n  postTime\n  lastUpdateTime\n  ...CommentContent\n  ...CommentEditor\n}\n\nfragment ReviewCommentButton on Review {\n  commentCount\n}\n"
  }
};
})();

(node as any).hash = "4a8ab27b7f15971369afbb69b33087cd";

export default node;
