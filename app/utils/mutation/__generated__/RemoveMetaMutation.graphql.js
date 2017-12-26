/**
 * @flow
 * @relayHash 4427d5b6a7b00ca11400374949079515
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type removeMetaMutationVariables = {|
  meta: {
    id?: ?string;
    clientMutationId?: ?string;
  };
|};
export type removeMetaMutationResponse = {|
  +removeMeta: ?{|
    +deletedId: ?string;
  |};
|};
*/


/*
mutation removeMetaMutation(
  $meta: removeMetaInput!
) {
  removeMeta(input: $meta) {
    deletedId
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "meta",
        "type": "removeMetaInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "removeMetaMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "meta",
            "type": "removeMetaInput!"
          }
        ],
        "concreteType": "removeMetaPayload",
        "name": "removeMeta",
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
  "name": "removeMetaMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "meta",
        "type": "removeMetaInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "removeMetaMutation",
    "operation": "mutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "meta",
            "type": "removeMetaInput!"
          }
        ],
        "concreteType": "removeMetaPayload",
        "name": "removeMeta",
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
  "text": "mutation removeMetaMutation(\n  $meta: removeMetaInput!\n) {\n  removeMeta(input: $meta) {\n    deletedId\n  }\n}\n"
};

module.exports = batch;
