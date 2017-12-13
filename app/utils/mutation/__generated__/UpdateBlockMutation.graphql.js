/**
 * @flow
 * @relayHash 2e4fc10c2a9659bb8c413ba6e849a0ba
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type UpdateBlockMutationVariables = {|
  block: {
    blockInput?: ?{
      ID?: ?string;
      editor?: ?any;
      date?: ?string;
      blockType?: ?string;
      title?: ?string;
      colour?: ?string;
    };
    clientMutationId?: ?string;
  };
|};
export type UpdateBlockMutationResponse = {|
  +updateBlock: ?{|
    +block: ?{|
      +id: string;
      +blockType: ?string;
      +editor: ?any;
      +date: ?string;
      +title: ?string;
      +colour: ?string;
    |};
  |};
|};
*/


/*
mutation UpdateBlockMutation(
  $block: updateBlockInput!
) {
  updateBlock(input: $block) {
    block {
      id
      blockType
      editor
      date
      title
      colour
    }
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "block",
        "type": "updateBlockInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "UpdateBlockMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "block",
            "type": "updateBlockInput!"
          }
        ],
        "concreteType": "updateBlockPayload",
        "name": "updateBlock",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Block",
            "name": "block",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "id",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "blockType",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "editor",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "date",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "title",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "colour",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "UpdateBlockMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "block",
        "type": "updateBlockInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "UpdateBlockMutation",
    "operation": "mutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "block",
            "type": "updateBlockInput!"
          }
        ],
        "concreteType": "updateBlockPayload",
        "name": "updateBlock",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Block",
            "name": "block",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "id",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "blockType",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "editor",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "date",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "title",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "colour",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "mutation UpdateBlockMutation(\n  $block: updateBlockInput!\n) {\n  updateBlock(input: $block) {\n    block {\n      id\n      blockType\n      editor\n      date\n      title\n      colour\n    }\n  }\n}\n"
};

module.exports = batch;
