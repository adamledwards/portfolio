/**
 * @flow
 * @relayHash 01d4f36a863565846e0613b7a788a1e8
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type updateMetaMutationVariables = {|
  meta: {
    metaInput?: ?{
      id?: ?string;
      field1?: ?string;
      field2?: ?string;
      position?: ?number;
    };
    clientMutationId?: ?string;
  };
|};
export type updateMetaMutationResponse = {|
  +updateMeta: ?{|
    +metaConnection: ?{|
      +edges: ?$ReadOnlyArray<?{|
        +node: ?{|
          +id: string;
          +field1: ?string;
          +field2: ?string;
          +position: ?number;
        |};
      |}>;
    |};
  |};
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

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "meta",
        "type": "updateMetaInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "updateMetaMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "meta",
            "type": "updateMetaInput!"
          }
        ],
        "concreteType": "updateMetaPayload",
        "name": "updateMeta",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "MetaConnection",
            "name": "metaConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "MetaEdge",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "args": null,
                    "concreteType": "Meta",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "id",
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "field1",
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "field2",
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "position",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
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
  "name": "updateMetaMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "meta",
        "type": "updateMetaInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "updateMetaMutation",
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
            "type": "updateMetaInput!"
          }
        ],
        "concreteType": "updateMetaPayload",
        "name": "updateMeta",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "MetaConnection",
            "name": "metaConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "MetaEdge",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "args": null,
                    "concreteType": "Meta",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "id",
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "field1",
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "field2",
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "position",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "mutation updateMetaMutation(\n  $meta: updateMetaInput!\n) {\n  updateMeta(input: $meta) {\n    metaConnection {\n      edges {\n        node {\n          id\n          field1\n          field2\n          position\n        }\n      }\n    }\n  }\n}\n"
};

module.exports = batch;
