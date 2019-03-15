/**
 * @flow
 * @relayHash a00cd57a3ab5745a6dc56049ef4b7e42
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type updateMetaInput = {|
  metaInput?: ?MetaTypeUpdateInput,
  clientMutationId?: ?string,
|};
export type MetaTypeUpdateInput = {|
  id?: ?string,
  field1?: ?string,
  field2?: ?string,
  position?: ?number,
|};
export type updateMetaMutationVariables = {|
  meta: updateMetaInput
|};
export type updateMetaMutationResponse = {|
  +updateMeta: ?{|
    +metaConnection: ?{|
      +edges: ?$ReadOnlyArray<?{|
        +node: ?{|
          +id: string,
          +field1: ?string,
          +field2: ?string,
          +position: ?number,
        |}
      |}>
    |}
  |}
|};
export type updateMetaMutation = {|
  variables: updateMetaMutationVariables,
  response: updateMetaMutationResponse,
|};
*/


/*
mutation updateMetaMutation(
  $meta: updateMetaInput!
) {
  updateMeta(input: $meta) {
    metaConnection {
      edges {
        node {
          id
          field1
          field2
          position
        }
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
    "type": "updateMetaInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "updateMeta",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "meta",
        "type": "updateMetaInput!"
      }
    ],
    "concreteType": "updateMetaPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "metaConnection",
        "storageKey": null,
        "args": null,
        "concreteType": "MetaConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "MetaEdge",
            "plural": true,
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
    "name": "updateMetaMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "updateMetaMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "updateMetaMutation",
    "id": null,
    "text": "mutation updateMetaMutation(\n  $meta: updateMetaInput!\n) {\n  updateMeta(input: $meta) {\n    metaConnection {\n      edges {\n        node {\n          id\n          field1\n          field2\n          position\n        }\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ba0819c347b8d9e8ab903ee3999f974a';
module.exports = node;
