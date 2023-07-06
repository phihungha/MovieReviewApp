/**
 * @generated SignedSource<<76e2e5e03a7ba817aee6641ccb36dd37>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type UserReviewOverviewList$data = {
  readonly reviews: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
        readonly " $fragmentSpreads": FragmentRefs<"ReviewListItem">;
      };
    } | null>;
  };
  readonly " $fragmentType": "UserReviewOverviewList";
};
export type UserReviewOverviewList$key = {
  readonly " $data"?: UserReviewOverviewList$data;
  readonly " $fragmentSpreads": FragmentRefs<"UserReviewOverviewList">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "UserReviewOverviewList",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "first",
          "value": 3
        }
      ],
      "concreteType": "ReviewConnection",
      "kind": "LinkedField",
      "name": "reviews",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "ReviewEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "Review",
              "kind": "LinkedField",
              "name": "node",
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
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "ReviewListItem"
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "reviews(first:3)"
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "be5c6e7e4086ef1b35649e560e744aba";

export default node;
