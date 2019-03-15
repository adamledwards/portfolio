/**
 * @flow
 * @relayHash d18f6b61815572279484287ae5bc5feb
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UploadBlockFileInput = {|
  blockFileInput?: ?BlockFileTypeInput,
  clientMutationId?: ?string,
|};
export type BlockFileTypeInput = {|
  blockId?: ?string,
  scope?: ?string,
|};
export type uploadBlockFileMutationVariables = {|
  input: UploadBlockFileInput
|};
export type uploadBlockFileMutationResponse = {|
  +uploadBlockFile: ?{|
    +clientMutationId: ?string,
    +deletedIds: ?$ReadOnlyArray<?string>,
    +file: ?{|
      +__typename: string,
      +cursor: string,
      +node: ?{|
        +id: string,
        +fullPath: ?string,
        +scope: ?string,
      |},
    |},
  |}
|};
export type uploadBlockFileMutation = {|
  variables: uploadBlockFileMutationVariables,
  response: uploadBlockFileMutationResponse,
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

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "UploadBlockFileInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "uploadBlockFile",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "UploadBlockFileInput!"
      }
    ],
    "concreteType": "UploadBlockFilePayload",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "clientMutationId",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "deletedIds",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "file",
        "storageKey": null,
        "args": null,
        "concreteType": "FileEdge",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "__typename",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "cursor",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "node",
            "storageKey": null,
            "args": null,
            "concreteType": "File",
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
                "name": "fullPath",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "scope",
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
    "name": "uploadBlockFileMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "uploadBlockFileMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "uploadBlockFileMutation",
    "id": null,
    "text": "mutation uploadBlockFileMutation(\n  $input: UploadBlockFileInput!\n) {\n  uploadBlockFile(input: $input) {\n    clientMutationId\n    deletedIds\n    file {\n      __typename\n      cursor\n      node {\n        id\n        fullPath\n        scope\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '91bcd81907555f945151317d263780d1';
module.exports = node;
