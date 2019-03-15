/**
 * @flow
 * @relayHash 3075e0c726987167b7cb42a4311f873a
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Credits_block$ref = any;
type Hero_block$ref = any;
type ImageUploader_block$ref = any;
type Images_block$ref = any;
type OtherArticles_page$ref = any;
type ProjectInfo_block$ref = any;
type Sidebar_page$ref = any;
type Text_block$ref = any;
export type PageEditorQueryVariables = {|
  id: string
|};
export type PageEditorQueryResponse = {|
  +page: ?{|
    +id?: string,
    +blockConnection?: ?{|
      +edges: ?$ReadOnlyArray<?{|
        +node: ?{|
          +id: string,
          +blockType: ?string,
          +position: ?number,
          +$fragmentRefs: Hero_block$ref & ProjectInfo_block$ref & Credits_block$ref & Text_block$ref & Images_block$ref & ImageUploader_block$ref,
        |}
      |}>
    |},
    +$fragmentRefs: Sidebar_page$ref & OtherArticles_page$ref,
  |}
|};
export type PageEditorQuery = {|
  variables: PageEditorQueryVariables,
  response: PageEditorQueryResponse,
|};
*/


/*
query PageEditorQuery(
  $id: ID!
) {
  page: node(id: $id) {
    __typename
    ... on Page {
      id
      ...Sidebar_page
      ...OtherArticles_page
      blockConnection(first: 10) {
        edges {
          node {
            id
            blockType
            position
            ...Hero_block
            ...ProjectInfo_block
            ...Credits_block
            ...Text_block
            ...Images_block
            ...ImageUploader_block
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
    id
  }
}

fragment Sidebar_page on Page {
  id
  title
  client
  description
  projectGoLive
  published
  listingImage {
    id
    fullPath
  }
  listingImageSmall {
    id
    fullPath
  }
}

fragment OtherArticles_page on Page {
  previous: nextPage(direction: BACKWARDS) {
    id
    title
    listingImageSmall {
      id
      fullPath
    }
  }
  next: nextPage(direction: FORWARD) {
    id
    title
    listingImageSmall {
      id
      fullPath
    }
  }
}

fragment Hero_block on Block {
  id
  title
  date
  fileConnection(first: 2) {
    edges {
      node {
        id
        fullPath
        scope
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
  ...ImageUploader_block
}

fragment ProjectInfo_block on Block {
  colour
  ...MetaList_block
  ...MetaSortable_block
  ...Editor_block
}

fragment Credits_block on Block {
  colour
  ...MetaList_block
  ...MetaSortable_block
}

fragment Text_block on Block {
  colour
  ...Editor_block
}

fragment Images_block on Block {
  blockType
  fileConnection(first: 2) {
    edges {
      node {
        id
        fullPath
        scope
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
  ...ImageUploader_block
}

fragment ImageUploader_block on Block {
  id
}

fragment Editor_block on Block {
  id
  editor
}

fragment MetaList_block on Block {
  id
  metaConnection(first: 10) {
    edges {
      node {
        id
        ...Meta_item
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

fragment MetaSortable_block on Block {
  id
  metaConnection(first: 10) {
    edges {
      node {
        id
        field1
        field2
        position
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

fragment Meta_item on Meta {
  id
  field1
  field2
  position
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id",
    "type": "ID!"
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
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "__typename",
  "args": null,
  "storageKey": null
},
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
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "title",
  "args": null,
  "storageKey": null
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "fullPath",
  "args": null,
  "storageKey": null
},
v10 = [
  (v2/*: any*/),
  (v9/*: any*/)
],
v11 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "listingImageSmall",
  "storageKey": null,
  "args": null,
  "concreteType": "File",
  "plural": false,
  "selections": (v10/*: any*/)
},
v12 = [
  (v2/*: any*/),
  (v8/*: any*/),
  (v11/*: any*/)
],
v13 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 10,
    "type": "Int"
  }
],
v14 = [
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
    "name": "PageEditorQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "page",
        "name": "node",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "plural": false,
        "selections": [
          {
            "kind": "InlineFragment",
            "type": "Page",
            "selections": [
              (v2/*: any*/),
              {
                "kind": "FragmentSpread",
                "name": "Sidebar_page",
                "args": null
              },
              {
                "kind": "FragmentSpread",
                "name": "OtherArticles_page",
                "args": null
              },
              {
                "kind": "LinkedField",
                "alias": "blockConnection",
                "name": "__PageEditor_blockConnection_connection",
                "storageKey": null,
                "args": null,
                "concreteType": "BlocksConnection",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "edges",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "BlocksEdge",
                    "plural": true,
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
                            "kind": "FragmentSpread",
                            "name": "Hero_block",
                            "args": null
                          },
                          {
                            "kind": "FragmentSpread",
                            "name": "ProjectInfo_block",
                            "args": null
                          },
                          {
                            "kind": "FragmentSpread",
                            "name": "Credits_block",
                            "args": null
                          },
                          {
                            "kind": "FragmentSpread",
                            "name": "Text_block",
                            "args": null
                          },
                          {
                            "kind": "FragmentSpread",
                            "name": "Images_block",
                            "args": null
                          },
                          {
                            "kind": "FragmentSpread",
                            "name": "ImageUploader_block",
                            "args": null
                          },
                          (v5/*: any*/)
                        ]
                      },
                      (v6/*: any*/)
                    ]
                  },
                  (v7/*: any*/)
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
    "name": "PageEditorQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "page",
        "name": "node",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "plural": false,
        "selections": [
          (v5/*: any*/),
          (v2/*: any*/),
          {
            "kind": "InlineFragment",
            "type": "Page",
            "selections": [
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
                "name": "client",
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
                "name": "projectGoLive",
                "args": null,
                "storageKey": null
              },
              (v8/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "listingImage",
                "storageKey": null,
                "args": null,
                "concreteType": "File",
                "plural": false,
                "selections": (v10/*: any*/)
              },
              (v11/*: any*/),
              {
                "kind": "LinkedField",
                "alias": "previous",
                "name": "nextPage",
                "storageKey": "nextPage(direction:\"BACKWARDS\")",
                "args": [
                  {
                    "kind": "Literal",
                    "name": "direction",
                    "value": "BACKWARDS",
                    "type": "Direction"
                  }
                ],
                "concreteType": "Page",
                "plural": false,
                "selections": (v12/*: any*/)
              },
              {
                "kind": "LinkedField",
                "alias": "next",
                "name": "nextPage",
                "storageKey": "nextPage(direction:\"FORWARD\")",
                "args": [
                  {
                    "kind": "Literal",
                    "name": "direction",
                    "value": "FORWARD",
                    "type": "Direction"
                  }
                ],
                "concreteType": "Page",
                "plural": false,
                "selections": (v12/*: any*/)
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "blockConnection",
                "storageKey": "blockConnection(first:10)",
                "args": (v13/*: any*/),
                "concreteType": "BlocksConnection",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "edges",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "BlocksEdge",
                    "plural": true,
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
                          (v8/*: any*/),
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "date",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "fileConnection",
                            "storageKey": "fileConnection(first:2)",
                            "args": (v14/*: any*/),
                            "concreteType": "FileConnection",
                            "plural": false,
                            "selections": [
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
                                    "selections": [
                                      (v2/*: any*/),
                                      (v9/*: any*/),
                                      {
                                        "kind": "ScalarField",
                                        "alias": null,
                                        "name": "scope",
                                        "args": null,
                                        "storageKey": null
                                      },
                                      (v5/*: any*/)
                                    ]
                                  },
                                  (v6/*: any*/)
                                ]
                              },
                              (v7/*: any*/)
                            ]
                          },
                          {
                            "kind": "LinkedHandle",
                            "alias": null,
                            "name": "fileConnection",
                            "args": (v14/*: any*/),
                            "handle": "connection",
                            "key": "Block_fileConnection",
                            "filters": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "colour",
                            "args": null,
                            "storageKey": null
                          },
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "metaConnection",
                            "storageKey": "metaConnection(first:10)",
                            "args": (v13/*: any*/),
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
                                      (v2/*: any*/),
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
                                      (v4/*: any*/),
                                      (v5/*: any*/)
                                    ]
                                  },
                                  (v6/*: any*/)
                                ]
                              },
                              (v7/*: any*/)
                            ]
                          },
                          {
                            "kind": "LinkedHandle",
                            "alias": null,
                            "name": "metaConnection",
                            "args": (v13/*: any*/),
                            "handle": "connection",
                            "key": "PageEditor_metaConnection",
                            "filters": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "name": "editor",
                            "args": null,
                            "storageKey": null
                          },
                          (v5/*: any*/)
                        ]
                      },
                      (v6/*: any*/)
                    ]
                  },
                  (v7/*: any*/)
                ]
              },
              {
                "kind": "LinkedHandle",
                "alias": null,
                "name": "blockConnection",
                "args": (v13/*: any*/),
                "handle": "connection",
                "key": "PageEditor_blockConnection",
                "filters": null
              }
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "PageEditorQuery",
    "id": null,
    "text": "query PageEditorQuery(\n  $id: ID!\n) {\n  page: node(id: $id) {\n    __typename\n    ... on Page {\n      id\n      ...Sidebar_page\n      ...OtherArticles_page\n      blockConnection(first: 10) {\n        edges {\n          node {\n            id\n            blockType\n            position\n            ...Hero_block\n            ...ProjectInfo_block\n            ...Credits_block\n            ...Text_block\n            ...Images_block\n            ...ImageUploader_block\n            __typename\n          }\n          cursor\n        }\n        pageInfo {\n          endCursor\n          hasNextPage\n        }\n      }\n    }\n    id\n  }\n}\n\nfragment Sidebar_page on Page {\n  id\n  title\n  client\n  description\n  projectGoLive\n  published\n  listingImage {\n    id\n    fullPath\n  }\n  listingImageSmall {\n    id\n    fullPath\n  }\n}\n\nfragment OtherArticles_page on Page {\n  previous: nextPage(direction: BACKWARDS) {\n    id\n    title\n    listingImageSmall {\n      id\n      fullPath\n    }\n  }\n  next: nextPage(direction: FORWARD) {\n    id\n    title\n    listingImageSmall {\n      id\n      fullPath\n    }\n  }\n}\n\nfragment Hero_block on Block {\n  id\n  title\n  date\n  fileConnection(first: 2) {\n    edges {\n      node {\n        id\n        fullPath\n        scope\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  ...ImageUploader_block\n}\n\nfragment ProjectInfo_block on Block {\n  colour\n  ...MetaList_block\n  ...MetaSortable_block\n  ...Editor_block\n}\n\nfragment Credits_block on Block {\n  colour\n  ...MetaList_block\n  ...MetaSortable_block\n}\n\nfragment Text_block on Block {\n  colour\n  ...Editor_block\n}\n\nfragment Images_block on Block {\n  blockType\n  fileConnection(first: 2) {\n    edges {\n      node {\n        id\n        fullPath\n        scope\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  ...ImageUploader_block\n}\n\nfragment ImageUploader_block on Block {\n  id\n}\n\nfragment Editor_block on Block {\n  id\n  editor\n}\n\nfragment MetaList_block on Block {\n  id\n  metaConnection(first: 10) {\n    edges {\n      node {\n        id\n        ...Meta_item\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment MetaSortable_block on Block {\n  id\n  metaConnection(first: 10) {\n    edges {\n      node {\n        id\n        field1\n        field2\n        position\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment Meta_item on Meta {\n  id\n  field1\n  field2\n  position\n}\n",
    "metadata": {
      "connection": [
        {
          "count": null,
          "cursor": null,
          "direction": "forward",
          "path": [
            "page",
            "blockConnection"
          ]
        }
      ]
    }
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '4d8cfdac5a7f190361b4da0d278ee0ca';
module.exports = node;
