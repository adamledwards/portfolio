/**
 * @flow
 * @relayHash 5b1ab66fae3fc5c8356668f813463f68
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type removeBlockInput = {|
  id?: ?string,
  clientMutationId?: ?string,
|};
export type removeBlockMutationVariables = {|
  block: removeBlockInput
|};
export type removeBlockMutationResponse = {|
  +removeBlock: ?{|
    +deletedId: ?string
  |}
|};
export type removeBlockMutation = {|
  variables: removeBlockMutationVariables,
  response: removeBlockMutationResponse,
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

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "block",
    "type": "removeBlockInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "removeBlock",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "block",
        "type": "removeBlockInput!"
      }
    ],
    "concreteType": "removeBlockPayload",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "deletedId",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "removeBlockMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "removeBlockMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "removeBlockMutation",
    "id": null,
    "text": "mutation removeBlockMutation(\n  $block: removeBlockInput!\n) {\n  removeBlock(input: $block) {\n    deletedId\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '2a8334b6ce15d6a1685ba7ce00e7b10c';
module.exports = node;
