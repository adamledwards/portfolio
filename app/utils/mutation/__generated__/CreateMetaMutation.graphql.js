/**
 * @flow
 * @relayHash eb9fb968196fc34405e060eeeaafddae
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type createMetaMutationVariables = {|
  meta: {
    metaInput?: ?{
      blockId?: ?string;
      field1?: ?string;
      field2?: ?string;
      position?: ?number;
    };
    clientMutationId?: ?string;
  };
|};
export type createMetaMutationResponse = {|
  +createMeta: ?{|
    +metaEdge: ?{|
      +node: ?{|
        +id: string;
        +field1: ?string;
        +field2: ?string;
      |};
    |};
  |};
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

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "meta",
        "type": "createMetaInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "createMetaMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "meta",
            "type": "createMetaInput!"
          }
        ],
        "concreteType": "createMetaPayload",
        "name": "createMeta",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "MetaEdge",
            "name": "metaEdge",
            "plural": false,
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
  "name": "createMetaMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "meta",
        "type": "createMetaInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "createMetaMutation",
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
            "type": "createMetaInput!"
          }
        ],
        "concreteType": "createMetaPayload",
        "name": "createMeta",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "MetaEdge",
            "name": "metaEdge",
            "plural": false,
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
  "text": "mutation createMetaMutation(\n  $meta: createMetaInput!\n) {\n  createMeta(input: $meta) {\n    metaEdge {\n      node {\n        id\n        field1\n        field2\n      }\n    }\n  }\n}\n"
};

module.exports = batch;
