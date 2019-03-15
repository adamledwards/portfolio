/**
 * @flow
 * @relayHash 611673c256084b95c264edb09d940a40
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type updatePositionQuery$ref = any;
export type updateBlockPositionInput = {|
  id?: ?string,
  position?: ?number,
  clientMutationId?: ?string,
|};
export type updatePositionMutationVariables = {|
  input: updateBlockPositionInput
|};
export type updatePositionMutationResponse = {|
  +updateBlockPosition: ?{|
    +blockEdge: ?{|
      +$fragmentRefs: updatePositionQuery$ref
    |},
    +blockConnection: ?{|
      +edges: ?$ReadOnlyArray<?{|
        +$fragmentRefs: updatePositionQuery$ref
      |}>
    |},
  |}
|};
export type updatePositionMutation = {|
  variables: updatePositionMutationVariables,
  response: updatePositionMutationResponse,
|};
*/


/*
mutation updatePositionMutation(
  $input: updateBlockPositionInput!
) {
  updateBlockPosition(input: $input) {
    blockEdge {
      ...updatePositionQuery
    }
    blockConnection {
      edges {
        ...updatePositionQuery
      }
    }
  }
}

fragment updatePositionQuery on BlocksEdge {
  node {
    id
    blockType
    position
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "updateBlockPositionInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input",
    "type": "updateBlockPositionInput!"
  }
],
v2 = [
  {
    "kind": "FragmentSpread",
    "name": "updatePositionQuery",
    "args": null
  }
],
v3 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "node",
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
        "name": "position",
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
    "name": "updatePositionMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "updateBlockPosition",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "updateBlockPositionPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "blockEdge",
            "storageKey": null,
            "args": null,
            "concreteType": "BlocksEdge",
            "plural": false,
            "selections": (v2/*: any*/)
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "blockConnection",
            "storageKey": null,
            "args": null,
            "concreteType": "BlocksConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "edges",
                "storageKey": null,
                "args": null,
                "concreteType": "BlocksEdge",
                "plural": true,
                "selections": (v2/*: any*/)
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "updatePositionMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "updateBlockPosition",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "updateBlockPositionPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "blockEdge",
            "storageKey": null,
            "args": null,
            "concreteType": "BlocksEdge",
            "plural": false,
            "selections": (v3/*: any*/)
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "blockConnection",
            "storageKey": null,
            "args": null,
            "concreteType": "BlocksConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "edges",
                "storageKey": null,
                "args": null,
                "concreteType": "BlocksEdge",
                "plural": true,
                "selections": (v3/*: any*/)
              }
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "updatePositionMutation",
    "id": null,
    "text": "mutation updatePositionMutation(\n  $input: updateBlockPositionInput!\n) {\n  updateBlockPosition(input: $input) {\n    blockEdge {\n      ...updatePositionQuery\n    }\n    blockConnection {\n      edges {\n        ...updatePositionQuery\n      }\n    }\n  }\n}\n\nfragment updatePositionQuery on BlocksEdge {\n  node {\n    id\n    blockType\n    position\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '2b377bd3072218c045e99e1ab34238f7';
module.exports = node;
