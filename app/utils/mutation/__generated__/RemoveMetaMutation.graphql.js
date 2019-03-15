/**
 * @flow
 * @relayHash 5b3ea88bb782df8dd445a66897d35cd8
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type removeMetaInput = {|
  id?: ?string,
  clientMutationId?: ?string,
|};
export type removeMetaMutationVariables = {|
  meta: removeMetaInput
|};
export type removeMetaMutationResponse = {|
  +removeMeta: ?{|
    +deletedId: ?string
  |}
|};
export type removeMetaMutation = {|
  variables: removeMetaMutationVariables,
  response: removeMetaMutationResponse,
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

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "meta",
    "type": "removeMetaInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "removeMeta",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "meta",
        "type": "removeMetaInput!"
      }
    ],
    "concreteType": "removeMetaPayload",
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
    "name": "removeMetaMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "removeMetaMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "removeMetaMutation",
    "id": null,
    "text": "mutation removeMetaMutation(\n  $meta: removeMetaInput!\n) {\n  removeMeta(input: $meta) {\n    deletedId\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd632dd98a2d5f10afab765e37213ac87';
module.exports = node;
