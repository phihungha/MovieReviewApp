/**
 * @generated SignedSource<<f3991023c94e8a5c541bc05fbb22c4a1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type UserType = "Critic" | "Regular" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type UserListItem$data = {
  readonly avatarUrl: string | null;
  readonly id: string;
  readonly name: string;
  readonly userType: UserType;
  readonly " $fragmentType": "UserListItem";
};
export type UserListItem$key = {
  readonly " $data"?: UserListItem$data;
  readonly " $fragmentSpreads": FragmentRefs<"UserListItem">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "UserListItem",
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

(node as any).hash = "2f4c75625b6f5f9d11604d45700e999c";

export default node;
