/**
 * @generated SignedSource<<01409c8ba05a355ca8196ad677783f35>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type UserType = "Critic" | "Regular" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type HorizontalUserDisplay$data = {
  readonly avatarUrl: string | null;
  readonly name: string;
  readonly userType: UserType;
  readonly " $fragmentType": "HorizontalUserDisplay";
};
export type HorizontalUserDisplay$key = {
  readonly " $data"?: HorizontalUserDisplay$data;
  readonly " $fragmentSpreads": FragmentRefs<"HorizontalUserDisplay">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "HorizontalUserDisplay",
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
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "userType",
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "d037d7b146f7d5bfcf2cae6a3bc32dc6";

export default node;
