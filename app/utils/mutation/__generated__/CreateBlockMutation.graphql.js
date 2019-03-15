/**
 * @flow
 * @relayHash 89690b55475af2d74ae5a9a93ddc868b
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type createBlockInput = {|
  blockInput?: ?BlockInput,
  clientMutationId?: ?string,
|};
export type BlockInput = {|
  pageId?: ?string,
  blockType?: ?string,
  editor?: ?any,
  date?: ?string,
  title?: ?string,
  colour?: ?string,
|};
export type createBlockMutationVariables = {|
  block: createBlockInput
|};
export type createBlockMutationResponse = {|
  +createBlock: ?{|
    +blockEdge: ?{|
      +node: ?{|
        +id: string,
        +blockType: ?string,
        +position: ?number,
        +metaConnection: ?{|
          +edges: ?$ReadOnlyArray<?{|
            +node: ?{|
              +id: string
            |}
          |}>
        |},
        +fileConnection: ?{|
          +edges: ?$ReadOnlyArray<?{|
            +node: ?{|
              +id: string
            |}
          |}>
        |},
      |}
    |}
  |}
|};
export type createBlockMutation = {|
  variables: createBlockMutationVariables,
  response: createBlockMutationResponse,
|};
*/


/*
mutation createBlockMutation(
  $block: createBlockInput!
) {
  createBlock(input: $block) {
    blockEdge {
      node {
        id
        blockType
        position
        metaConnection(first: 10) {
          edges {
            node {
              id
              __typename
            }
            cursor
          }
          pageInfo {
            endCursor
            hasNextPage
          }
        }
        fileConnection(first: 2) {
          edges {
            node {
              id
              __typename
            }
            cursor
          }
          pageInfo {
            endCursor
            hasNextPage
          }
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
    "name": "block",
    "type": "createBlockInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "block",
    "type": "createBlockInput!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "blockType",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "position",
  "args": null,
  "storageKey": null
},
v5 = [
  (v2/*: any*/),
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "__typename",
    "args": null,
    "storageKey": null
  }
],
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "cursor",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "pageInfo",
  "storageKey": null,
  "args": null,
  "concreteType": "PageInfo",
  "plural": false,
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "endCursor",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "hasNextPage",
      "args": null,
      "storageKey": null
    }
  ]
},
v8 = [
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
        "selections": (v5/*: any*/)
      },
      (v6/*: any*/)
    ]
  },
  (v7/*: any*/)
],
v9 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "edges",
    "storageKey": null,
    "args": null,
    "concreteType": "FileEdge",
    "plural": true,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
        "storageKey": null,
        "args": null,
        "concreteType": "File",
        "plural": false,
        "selections": (v5/*: any*/)
      },
      (v6/*: any*/)
    ]
  },
  (v7/*: any*/)
],
v10 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 10,
    "type": "Int"
  }
],
v11 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 2,
    "type": "Int"
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "createBlockMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "createBlock",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "createBlockPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "blockEdge",
            "storageKey": null,
            "args": null,
            "concreteType": "BlocksEdge",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "Block",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": "metaConnection",
                    "name": "__PageEditor_metaConnection_connection",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "MetaConnection",
                    "plural": false,
                    "selections": (v8/*: any*/)
                  },
                  {
                    "kind": "LinkedField",
                    "alias": "fileConnection",
                    "name": "__Block_fileConnection_connection",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "FileConnection",
                    "plural": false,
                    "selections": (v9/*: any*/)
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "createBlockMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "createBlock",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "createBlockPayload",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "blockEdge",
            "storageKey": null,
            "args": null,
            "concreteType": "BlocksEdge",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "Block",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "metaConnection",
                    "storageKey": "metaConnection(first:10)",
                    "args": (v10/*: any*/),
                    "concreteType": "MetaConnection",
                    "plural": false,
                    "selections": (v8/*: any*/)
                  },
                  {
                    "kind": "LinkedHandle",
                    "alias": null,
                    "name": "metaConnection",
                    "args": (v10/*: any*/),
                    "handle": "connection",
                    "key": "PageEditor_metaConnection",
                    "filters": null
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "fileConnection",
                    "storageKey": "fileConnection(first:2)",
                    "args": (v11/*: any*/),
                    "concreteType": "FileConnection",
                    "plural": false,
                    "selections": (v9/*: any*/)
                  },
                  {
                    "kind": "LinkedHandle",
                    "alias": null,
                    "name": "fileConnection",
                    "args": (v11/*: any*/),
                    "handle": "connection",
                    "key": "Block_fileConnection",
                    "filters": null
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "mutation",
    "name": "createBlockMutation",
    "id": null,
    "text": "mutation createBlockMutation(\n  $block: createBlockInput!\n) {\n  createBlock(input: $block) {\n    blockEdge {\n      node {\n        id\n        blockType\n        position\n        metaConnection(first: 10) {\n          edges {\n            node {\n              id\n              __typename\n            }\n            cursor\n          }\n          pageInfo {\n            endCursor\n            hasNextPage\n          }\n        }\n        fileConnection(first: 2) {\n          edges {\n            node {\n              id\n              __typename\n            }\n            cursor\n          }\n          pageInfo {\n            endCursor\n            hasNextPage\n          }\n        }\n      }\n    }\n  }\n}\n",
    "metadata": {
      "connection": [
        {
          "count": null,
          "cursor": null,
          "direction": "forward",
          "path": [
            "createBlock",
            "blockEdge",
            "node",
            "metaConnection"
          ]
        },
        {
          "count": null,
          "cursor": null,
          "direction": "forward",
          "path": [
            "createBlock",
            "blockEdge",
            "node",
            "fileConnection"
          ]
        }
      ]
    }
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '2b787d62bf830a97d4d781314d676f5c';
module.exports = node;
