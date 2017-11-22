/**
 * @flow
 * @relayHash 61f014d48e494d03b7c5a933b52ddb67
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type RemoveMetaMutationVariables = {|
  meta: {
    id?: ?string;
    clientMutationId?: ?string;
  };
|};
export type RemoveMetaMutationResponse = {|
  +removeMeta: ?{|
    +deletedId: ?string;
  |};
|};
*/


/*
mutation RemoveMetaMutation(
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
    "name": "RemoveMetaMutation",
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
  "name": "RemoveMetaMutation",
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
    "name": "RemoveMetaMutation",
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
  "text": "mutation RemoveMetaMutation(\n  $meta: removeMetaInput!\n) {\n  removeMeta(input: $meta) {\n    deletedId\n  }\n}\n"
};

module.exports = batch;
