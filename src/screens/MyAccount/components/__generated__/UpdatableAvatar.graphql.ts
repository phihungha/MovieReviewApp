/**
 * @generated SignedSource<<a5ef1a346ff8bcbd6dc294b7ecdc6d10>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type UpdatableAvatar$data = {
  readonly avatarUrl: string | null;
  readonly id: string;
  readonly " $fragmentType": "UpdatableAvatar";
};
export type UpdatableAvatar$key = {
  readonly " $data"?: UpdatableAvatar$data;
  readonly " $fragmentSpreads": FragmentRefs<"UpdatableAvatar">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "UpdatableAvatar",
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
    }
  ],
  "type": "User",
  "abstractKey": null
};

(node as any).hash = "c3579a97009e3b2eea0608242c18e897";

export default node;
