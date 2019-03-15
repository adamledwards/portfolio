/**
 * @flow
 * @relayHash d5df30e924489b0f4a2a1e5d765c6132
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type createMetaInput = {|
  metaInput?: ?MetaTypeCreateInput,
  clientMutationId?: ?string,
|};
export type MetaTypeCreateInput = {|
  blockId?: ?string,
  field1?: ?string,
  field2?: ?string,
  position?: ?number,
|};
export type createMetaMutationVariables = {|
  meta: createMetaInput
|};
export type createMetaMutationResponse = {|
  +createMeta: ?{|
    +metaEdge: ?{|
      +node: ?{|
        +id: string,
        +field1: ?string,
        +field2: ?string,
      |}
    |}
  |}
|};
export type createMetaMutation = {|
  variables: createMetaMutationVariables,
  response: createMetaMutationResponse,
|};
*/


/*
mutation createMetaMutation(
  $meta: createMetaInput!
) {
  createMeta(input: $meta) {
    metaEdge {
      node {
        id
        field1
        field2
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "meta",
    "type": "createMetaInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "createMeta",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "meta",
        "type": "createMetaInput!"
      }
    ],
    "concreteType": "createMetaPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "metaEdge",
        "storageKey": null,
        "args": null,
        "concreteType": "MetaEdge",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "node",
            "storageKey": null,
            "args": null,
            "concreteType": "Meta",
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
                "name": "field1",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "field2",
                "args": null,
                "storageKey": null
              }
            ]
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
    "name": "createMetaMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "createMetaMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "createMetaMutation",
    "id": null,
    "text": "mutation createMetaMutation(\n  $meta: createMetaInput!\n) {\n  createMeta(input: $meta) {\n    metaEdge {\n      node {\n        id\n        field1\n        field2\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '54101c17bd99e2da06153dc5a3e71279';
module.exports = node;
