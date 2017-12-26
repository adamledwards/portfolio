/**
 * @flow
 * @relayHash 619b5a2b6ffb5d0d4969159352334cca
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type removeBlockMutationVariables = {|
  block: {
    id?: ?string;
    clientMutationId?: ?string;
  };
|};
export type removeBlockMutationResponse = {|
  +removeBlock: ?{|
    +deletedId: ?string;
  |};
|};
*/


/*
mutation removeBlockMutation(
  $block: removeBlockInput!
) {
  removeBlock(input: $block) {
    deletedId
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "block",
        "type": "removeBlockInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "removeBlockMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "block",
            "type": "removeBlockInput!"
          }
        ],
        "concreteType": "removeBlockPayload",
        "name": "removeBlock",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "deletedId",
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
  "name": "removeBlockMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "block",
        "type": "removeBlockInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "removeBlockMutation",
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
            "type": "removeBlockInput!"
          }
        ],
        "concreteType": "removeBlockPayload",
        "name": "removeBlock",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "deletedId",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "mutation removeBlockMutation(\n  $block: removeBlockInput!\n) {\n  removeBlock(input: $block) {\n    deletedId\n  }\n}\n"
};

module.exports = batch;
