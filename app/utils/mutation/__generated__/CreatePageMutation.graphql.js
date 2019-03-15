/**
 * @flow
 * @relayHash 9905269d162d61eb321ff09ab6d86b2e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreatePageInput = {|
  pageInput?: ?PageUpdateInput,
  clientMutationId?: ?string,
|};
export type PageUpdateInput = {|
  title?: ?string,
  description?: ?string,
  projectGoLive?: ?string,
  client?: ?string,
  published?: ?boolean,
  position?: ?number,
|};
export type createPageMutationVariables = {|
  input: CreatePageInput
|};
export type createPageMutationResponse = {|
  +createPage: ?{|
    +page: ?{|
      +id: string,
      +title: ?string,
      +projectGoLive: ?string,
      +client: ?string,
    |}
  |}
|};
export type createPageMutation = {|
  variables: createPageMutationVariables,
  response: createPageMutationResponse,
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

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "CreatePageInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "createPage",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "CreatePageInput!"
      }
    ],
    "concreteType": "CreatePagePayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "page",
        "storageKey": null,
        "args": null,
        "concreteType": "Page",
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
            "name": "title",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "projectGoLive",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "client",
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
    "name": "createPageMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "createPageMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "createPageMutation",
    "id": null,
    "text": "mutation createPageMutation(\n  $input: CreatePageInput!\n) {\n  createPage(input: $input) {\n    page {\n      id\n      title\n      projectGoLive\n      client\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a723085e85445f913ca78fd5cb20220c';
module.exports = node;
