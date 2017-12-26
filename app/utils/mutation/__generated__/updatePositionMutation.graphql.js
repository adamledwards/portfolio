/**
 * @flow
 * @relayHash 26068c1c2600ae8b2c35b16fbecb2021
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type updatePositionMutationVariables = {|
  input: {
    id?: ?string;
    position?: ?number;
    clientMutationId?: ?string;
  };
|};
export type updatePositionMutationResponse = {|
  +updateBlockPosition: ?{|
    +blockEdge: ?{| |};
    +blockConnection: ?{|
      +edges: ?$ReadOnlyArray<?{| |}>;
    |};
  |};
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

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "updateBlockPositionInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "updatePositionMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "updateBlockPositionInput!"
          }
        ],
        "concreteType": "updateBlockPositionPayload",
        "name": "updateBlockPosition",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "BlocksEdge",
            "name": "blockEdge",
            "plural": false,
            "selections": [
              {
                "kind": "FragmentSpread",
                "name": "updatePositionQuery",
                "args": null
              }
            ],
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "BlocksConnection",
            "name": "blockConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "BlocksEdge",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "kind": "FragmentSpread",
                    "name": "updatePositionQuery",
                    "args": null
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
  "name": "updatePositionMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "updateBlockPositionInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "updatePositionMutation",
    "operation": "mutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "updateBlockPositionInput!"
          }
        ],
        "concreteType": "updateBlockPositionPayload",
        "name": "updateBlockPosition",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "BlocksEdge",
            "name": "blockEdge",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "Block",
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
                    "name": "blockType",
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
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "BlocksConnection",
            "name": "blockConnection",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "BlocksEdge",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "kind": "InlineFragment",
                    "type": "BlocksEdge",
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "args": null,
                        "concreteType": "Block",
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
                            "name": "blockType",
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
                    ]
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
  "text": "mutation updatePositionMutation(\n  $input: updateBlockPositionInput!\n) {\n  updateBlockPosition(input: $input) {\n    blockEdge {\n      ...updatePositionQuery\n    }\n    blockConnection {\n      edges {\n        ...updatePositionQuery\n      }\n    }\n  }\n}\n\nfragment updatePositionQuery on BlocksEdge {\n  node {\n    id\n    blockType\n    position\n  }\n}\n"
};

module.exports = batch;
