/**
 * @flow
 * @relayHash c4801d78bd5f468a5695550ec6d57bbc
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type createPageMutationVariables = {|
  input: {
    pageInput?: ?{
      title?: ?string;
      description?: ?string;
      projectGoLive?: ?string;
      client?: ?string;
      published?: ?boolean;
      position?: ?number;
    };
    clientMutationId?: ?string;
  };
|};
export type createPageMutationResponse = {|
  +createPage: ?{|
    +page: ?{|
      +id: string;
      +title: ?string;
      +projectGoLive: ?string;
      +client: ?string;
    |};
  |};
|};
*/


/*
mutation createPageMutation(
  $input: CreatePageInput!
) {
  createPage(input: $input) {
    page {
      id
      title
      projectGoLive
      client
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
        "type": "CreatePageInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "createPageMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "CreatePageInput!"
          }
        ],
        "concreteType": "CreatePagePayload",
        "name": "createPage",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Page",
            "name": "page",
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
                "name": "title",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "projectGoLive",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "client",
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
  "name": "createPageMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "CreatePageInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "createPageMutation",
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
            "type": "CreatePageInput!"
          }
        ],
        "concreteType": "CreatePagePayload",
        "name": "createPage",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Page",
            "name": "page",
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
                "name": "title",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "projectGoLive",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "client",
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
  "text": "mutation createPageMutation(\n  $input: CreatePageInput!\n) {\n  createPage(input: $input) {\n    page {\n      id\n      title\n      projectGoLive\n      client\n    }\n  }\n}\n"
};

module.exports = batch;
