/**
 * @generated SignedSource<<494ee83510abce2da1119dcfa89b8c65>>
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

(node as any).hash = "45b176cdaf9e70cc24edc73a03bd004b";

export default node;
