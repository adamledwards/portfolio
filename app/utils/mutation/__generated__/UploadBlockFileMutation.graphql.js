/**
 * @flow
 * @relayHash c4ac0b2a5986b8e5a7357b3892f88f44
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type uploadBlockFileMutationVariables = {|
  input: {
    blockFileInput?: ?{
      blockId?: ?string;
      scope?: ?string;
    };
    clientMutationId?: ?string;
  };
|};
export type uploadBlockFileMutationResponse = {|
  +uploadBlockFile: ?{|
    +clientMutationId: ?string;
    +deletedIds: ?$ReadOnlyArray<?string>;
    +file: ?{|
      +__typename: string;
      +cursor: string;
      +node: ?{|
        +id: string;
        +fullPath: ?string;
        +scope: ?string;
      |};
    |};
  |};
|};
*/


/*
mutation uploadBlockFileMutation(
  $input: UploadBlockFileInput!
) {
  uploadBlockFile(input: $input) {
    clientMutationId
    deletedIds
    file {
      __typename
      cursor
      node {
        id
        fullPath
        scope
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
        "name": "input",
        "type": "UploadBlockFileInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "uploadBlockFileMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "UploadBlockFileInput!"
          }
        ],
        "concreteType": "UploadBlockFilePayload",
        "name": "uploadBlockFile",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "clientMutationId",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "deletedIds",
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "FileEdge",
            "name": "file",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "__typename",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "cursor",
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "File",
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
                    "name": "fullPath",
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "scope",
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
  "name": "uploadBlockFileMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "UploadBlockFileInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "uploadBlockFileMutation",
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
            "type": "UploadBlockFileInput!"
          }
        ],
        "concreteType": "UploadBlockFilePayload",
        "name": "uploadBlockFile",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "clientMutationId",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "deletedIds",
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "FileEdge",
            "name": "file",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "__typename",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "cursor",
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "args": null,
                "concreteType": "File",
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
                    "name": "fullPath",
                    "storageKey": null
                  },
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "args": null,
                    "name": "scope",
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
  "text": "mutation uploadBlockFileMutation(\n  $input: UploadBlockFileInput!\n) {\n  uploadBlockFile(input: $input) {\n    clientMutationId\n    deletedIds\n    file {\n      __typename\n      cursor\n      node {\n        id\n        fullPath\n        scope\n      }\n    }\n  }\n}\n"
};

module.exports = batch;
