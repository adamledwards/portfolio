/**
 * @flow
 * @relayHash e5f852fc6e572719bd490ff898a0b1d0
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type updateBlockInput = {|
  blockInput?: ?BlockUpdateInput,
  clientMutationId?: ?string,
|};
export type BlockUpdateInput = {|
  ID?: ?string,
  editor?: ?any,
  date?: ?string,
  blockType?: ?string,
  title?: ?string,
  colour?: ?string,
|};
export type updateBlockMutationVariables = {|
  block: updateBlockInput
|};
export type updateBlockMutationResponse = {|
  +updateBlock: ?{|
    +block: ?{|
      +id: string,
      +blockType: ?string,
      +editor: ?any,
      +date: ?string,
      +title: ?string,
      +colour: ?string,
    |}
  |}
|};
export type updateBlockMutation = {|
  variables: updateBlockMutationVariables,
  response: updateBlockMutationResponse,
|};
*/


/*
mutation updateBlockMutation(
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

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "block",
    "type": "updateBlockInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "updateBlock",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "block",
        "type": "updateBlockInput!"
      }
    ],
    "concreteType": "updateBlockPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "block",
        "storageKey": null,
        "args": null,
        "concreteType": "Block",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "blockType",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "editor",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "date",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "title",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "colour",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "updateBlockMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "updateBlockMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "updateBlockMutation",
    "id": null,
    "text": "mutation updateBlockMutation(\n  $block: updateBlockInput!\n) {\n  updateBlock(input: $block) {\n    block {\n      id\n      blockType\n      editor\n      date\n      title\n      colour\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd3b439e0cc6c1b0e781c02aa06da7bba';
module.exports = node;
