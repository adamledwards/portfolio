/**
 * @flow
 * @relayHash c0e4430fb0366296a627962c538120cc
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UpdatePageInput = {|
  id?: ?string,
  pageInput?: ?PageInput,
  clientMutationId?: ?string,
|};
export type PageInput = {|
  title?: ?string,
  description?: ?string,
  projectGoLive?: ?string,
  client?: ?string,
  published?: ?boolean,
  position?: ?number,
|};
export type updatePageMutationVariables = {|
  page: UpdatePageInput
|};
export type updatePageMutationResponse = {|
  +updatePage: ?{|
    +page: ?{|
      +id: string,
      +title: ?string,
      +description: ?string,
      +client: ?string,
      +published: ?boolean,
      +position: ?number,
      +listingImage: ?{|
        +id: string,
        +fullPath: ?string,
      |},
      +listingImageSmall: ?{|
        +id: string,
        +fullPath: ?string,
      |},
    |}
  |}
|};
export type updatePageMutation = {|
  variables: updatePageMutationVariables,
  response: updatePageMutationResponse,
|};
*/


/*
mutation updatePageMutation(
  $page: UpdatePageInput!
) {
  updatePage(input: $page) {
    page {
      id
      title
      description
      client
      published
      position
      listingImage {
        id
        fullPath
      }
      listingImageSmall {
        id
        fullPath
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "page",
    "type": "UpdatePageInput!",
    "defaultValue": null
  }
],
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v2 = [
  (v1/*: any*/),
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "fullPath",
    "args": null,
    "storageKey": null
  }
],
v3 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "updatePage",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "page",
        "type": "UpdatePageInput!"
      }
    ],
    "concreteType": "UpdatePagePayload",
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
          (v1/*: any*/),
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
            "name": "description",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "client",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "published",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "position",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "listingImage",
            "storageKey": null,
            "args": null,
            "concreteType": "File",
            "plural": false,
            "selections": (v2/*: any*/)
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "listingImageSmall",
            "storageKey": null,
            "args": null,
            "concreteType": "File",
            "plural": false,
            "selections": (v2/*: any*/)
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
    "name": "updatePageMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v3/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "updatePageMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v3/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "updatePageMutation",
    "id": null,
    "text": "mutation updatePageMutation(\n  $page: UpdatePageInput!\n) {\n  updatePage(input: $page) {\n    page {\n      id\n      title\n      description\n      client\n      published\n      position\n      listingImage {\n        id\n        fullPath\n      }\n      listingImageSmall {\n        id\n        fullPath\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'b9d2ada1cdb59ce768c744fa27a24543';
module.exports = node;
