/**
 * @flow
 * @relayHash 8832be6687d7cac31008420ae262be97
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type RemoveBlockMutationVariables = {|
  block: {
    id?: ?string;
    clientMutationId?: ?string;
  };
|};
export type RemoveBlockMutationResponse = {|
  +removeBlock: ?{|
    +deletedId: ?string;
  |};
|};
*/


/*
mutation RemoveBlockMutation(
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
    "name": "RemoveBlockMutation",
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
  "name": "RemoveBlockMutation",
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
    "name": "RemoveBlockMutation",
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
  "text": "mutation RemoveBlockMutation(\n  $block: removeBlockInput!\n) {\n  removeBlock(input: $block) {\n    deletedId\n  }\n}\n"
};

module.exports = batch;
