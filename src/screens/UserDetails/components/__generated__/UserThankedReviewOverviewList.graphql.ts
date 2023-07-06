/**
 * @generated SignedSource<<fa7a0646cc06e8cf96325066f8520982>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type UserThankedReviewOverviewList$data = {
  readonly reviewThanks: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
        readonly " $fragmentSpreads": FragmentRefs<"ReviewListItem">;
      };
    } | null>;
  };
  readonly " $fragmentType": "UserThankedReviewOverviewList";
};
export type UserThankedReviewOverviewList$key = {
  readonly " $data"?: UserThankedReviewOverviewList$data;
  readonly " $fragmentSpreads": FragmentRefs<"UserThankedReviewOverviewList">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "UserThankedReviewOverviewList",
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
      "name": "reviewThanks",
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
      "storageKey": "reviewThanks(first:3)"
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "01cd82c482f26ff7dc22bc30637d63ae";

export default node;
