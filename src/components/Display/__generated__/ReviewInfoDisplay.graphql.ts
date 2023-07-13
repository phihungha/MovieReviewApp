/**
 * @generated SignedSource<<05657b261c399cf25593feec49e16abf>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
export type UserType = "Critic" | "Regular" | "%future added value";
import { FragmentRefs } from "relay-runtime";
export type ReviewInfoDisplay$data = {
  readonly authorType: UserType;
  readonly content: string;
  readonly externalUrl: string | null;
  readonly postTime: any;
  readonly score: number;
  readonly title: string;
  readonly " $fragmentType": "ReviewInfoDisplay";
};
export type ReviewInfoDisplay$key = {
  readonly " $data"?: ReviewInfoDisplay$data;
  readonly " $fragmentSpreads": FragmentRefs<"ReviewInfoDisplay">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ReviewInfoDisplay",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "title",
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
      "kind": "ScalarField",
      "name": "postTime",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "score",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "authorType",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "externalUrl",
      "storageKey": null
    }
  ],
  "type": "Review",
  "abstractKey": null
};

(node as any).hash = "5a8124ca53bed81cc50866ca0a5940ee";

export default node;
