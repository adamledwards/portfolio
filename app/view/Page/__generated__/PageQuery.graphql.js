/**
 * @flow
 * @relayHash 9e89c9e783189927cbf971e65caecdc7
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type PageQueryResponse = {|
  +page: ?{|
    +id?: string;
    +title?: ?string;
    +client?: ?string;
    +description?: ?string;
    +projectGoLive?: ?string;
    +position?: ?number;
    +published?: ?boolean;
    +blockConnection?: ?{|
      +edges: ?$ReadOnlyArray<?{|
        +node: ?{|
          +id: string;
          +blockType: ?string;
          +position: ?number;
        |};
      |}>;
    |};
  |};
|};
*/


/*
query PageQuery(
  $id: ID!
) {
  page: node(id: $id) {
    __typename
    ... on Page {
      id
      title
      client
      description
      projectGoLive
      position
      published
      ...OtherArticles_page
      blockConnection(first: 10) {
        edges {
          node {
            __typename
            id
            blockType
            position
            ...Hero_block
            ...ProjectInfo_block
            ...Credits_block
            ...Text_block
            ...Images_block
            ...ImageUploader_block
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
        __typename
        id
        fullPath
        scope
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
        __typename
        id
        fullPath
        scope
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
        __typename
        id
        ...Meta_item
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
        __typename
        id
        field1
        field2
        position
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

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "id",
        "type": "ID!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "PageQuery",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "page",
        "args": [
          {
            "kind": "Variable",
            "name": "id",
            "variableName": "id",
            "type": "ID!"
          }
        ],
        "concreteType": null,
        "name": "node",
        "plural": false,
        "selections": [
          {
            "kind": "InlineFragment",
            "type": "Page",
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
                "name": "client",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "description",
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
                "name": "position",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "published",
                "storageKey": null
              },
              {
                "kind": "FragmentSpread",
                "name": "OtherArticles_page",
                "args": null
              },
              {
                "kind": "LinkedField",
                "alias": "blockConnection",
                "args": null,
                "concreteType": "BlocksConnection",
                "name": "__PageEditor_blockConnection_connection",
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
                          },
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
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "args": null,
                            "name": "__typename",
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "cursor",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "args": null,
                    "concreteType": "PageInfo",
                    "name": "pageInfo",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "endCursor",
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "hasNextPage",
                        "storageKey": null
                      }
                    ],
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
    "type": "Query"
  },
  "id": null,
  "kind": "Batch",
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
  },
  "name": "PageQuery",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "id",
        "type": "ID!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "PageQuery",
    "operation": "query",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": "page",
        "args": [
          {
            "kind": "Variable",
            "name": "id",
            "variableName": "id",
            "type": "ID!"
          }
        ],
        "concreteType": null,
        "name": "node",
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
            "name": "id",
            "storageKey": null
          },
          {
            "kind": "InlineFragment",
            "type": "Page",
            "selections": [
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
                "name": "client",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "description",
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
                "name": "position",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "published",
                "storageKey": null
              },
              {
                "kind": "LinkedField",
                "alias": "previous",
                "args": [
                  {
                    "kind": "Literal",
                    "name": "direction",
                    "value": "BACKWARDS",
                    "type": "Direction"
                  }
                ],
                "concreteType": "Page",
                "name": "nextPage",
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
                    "kind": "LinkedField",
                    "alias": null,
                    "args": null,
                    "concreteType": "File",
                    "name": "listingImageSmall",
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
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": "nextPage{\"direction\":\"BACKWARDS\"}"
              },
              {
                "kind": "LinkedField",
                "alias": "next",
                "args": [
                  {
                    "kind": "Literal",
                    "name": "direction",
                    "value": "FORWARD",
                    "type": "Direction"
                  }
                ],
                "concreteType": "Page",
                "name": "nextPage",
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
                    "kind": "LinkedField",
                    "alias": null,
                    "args": null,
                    "concreteType": "File",
                    "name": "listingImageSmall",
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
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": "nextPage{\"direction\":\"FORWARD\"}"
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "args": [
                  {
                    "kind": "Literal",
                    "name": "first",
                    "value": 10,
                    "type": "Int"
                  }
                ],
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
                            "name": "__typename",
                            "storageKey": null
                          },
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
                            "name": "date",
                            "storageKey": null
                          },
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "args": [
                              {
                                "kind": "Literal",
                                "name": "first",
                                "value": 2,
                                "type": "Int"
                              }
                            ],
                            "concreteType": "FileConnection",
                            "name": "fileConnection",
                            "plural": false,
                            "selections": [
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "args": null,
                                "concreteType": "FileEdge",
                                "name": "edges",
                                "plural": true,
                                "selections": [
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
                                        "name": "__typename",
                                        "storageKey": null
                                      },
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
                                  },
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "args": null,
                                    "name": "cursor",
                                    "storageKey": null
                                  }
                                ],
                                "storageKey": null
                              },
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "args": null,
                                "concreteType": "PageInfo",
                                "name": "pageInfo",
                                "plural": false,
                                "selections": [
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "args": null,
                                    "name": "endCursor",
                                    "storageKey": null
                                  },
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "args": null,
                                    "name": "hasNextPage",
                                    "storageKey": null
                                  }
                                ],
                                "storageKey": null
                              }
                            ],
                            "storageKey": "fileConnection{\"first\":2}"
                          },
                          {
                            "kind": "LinkedHandle",
                            "alias": null,
                            "args": [
                              {
                                "kind": "Literal",
                                "name": "first",
                                "value": 2,
                                "type": "Int"
                              }
                            ],
                            "handle": "connection",
                            "name": "fileConnection",
                            "key": "Block_fileConnection",
                            "filters": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "args": null,
                            "name": "colour",
                            "storageKey": null
                          },
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "args": [
                              {
                                "kind": "Literal",
                                "name": "first",
                                "value": 10,
                                "type": "Int"
                              }
                            ],
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
                                        "name": "__typename",
                                        "storageKey": null
                                      },
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
                                  },
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "args": null,
                                    "name": "cursor",
                                    "storageKey": null
                                  }
                                ],
                                "storageKey": null
                              },
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "args": null,
                                "concreteType": "PageInfo",
                                "name": "pageInfo",
                                "plural": false,
                                "selections": [
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "args": null,
                                    "name": "endCursor",
                                    "storageKey": null
                                  },
                                  {
                                    "kind": "ScalarField",
                                    "alias": null,
                                    "args": null,
                                    "name": "hasNextPage",
                                    "storageKey": null
                                  }
                                ],
                                "storageKey": null
                              }
                            ],
                            "storageKey": "metaConnection{\"first\":10}"
                          },
                          {
                            "kind": "LinkedHandle",
                            "alias": null,
                            "args": [
                              {
                                "kind": "Literal",
                                "name": "first",
                                "value": 10,
                                "type": "Int"
                              }
                            ],
                            "handle": "connection",
                            "name": "metaConnection",
                            "key": "PageEditor_metaConnection",
                            "filters": null
                          },
                          {
                            "kind": "ScalarField",
                            "alias": null,
                            "args": null,
                            "name": "editor",
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "cursor",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "args": null,
                    "concreteType": "PageInfo",
                    "name": "pageInfo",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "endCursor",
                        "storageKey": null
                      },
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "args": null,
                        "name": "hasNextPage",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": "blockConnection{\"first\":10}"
              },
              {
                "kind": "LinkedHandle",
                "alias": null,
                "args": [
                  {
                    "kind": "Literal",
                    "name": "first",
                    "value": 10,
                    "type": "Int"
                  }
                ],
                "handle": "connection",
                "name": "blockConnection",
                "key": "PageEditor_blockConnection",
                "filters": null
              }
            ]
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "query PageQuery(\n  $id: ID!\n) {\n  page: node(id: $id) {\n    __typename\n    ... on Page {\n      id\n      title\n      client\n      description\n      projectGoLive\n      position\n      published\n      ...OtherArticles_page\n      blockConnection(first: 10) {\n        edges {\n          node {\n            __typename\n            id\n            blockType\n            position\n            ...Hero_block\n            ...ProjectInfo_block\n            ...Credits_block\n            ...Text_block\n            ...Images_block\n            ...ImageUploader_block\n          }\n          cursor\n        }\n        pageInfo {\n          endCursor\n          hasNextPage\n        }\n      }\n    }\n    id\n  }\n}\n\nfragment OtherArticles_page on Page {\n  previous: nextPage(direction: BACKWARDS) {\n    id\n    title\n    listingImageSmall {\n      id\n      fullPath\n    }\n  }\n  next: nextPage(direction: FORWARD) {\n    id\n    title\n    listingImageSmall {\n      id\n      fullPath\n    }\n  }\n}\n\nfragment Hero_block on Block {\n  id\n  title\n  date\n  fileConnection(first: 2) {\n    edges {\n      node {\n        __typename\n        id\n        fullPath\n        scope\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  ...ImageUploader_block\n}\n\nfragment ProjectInfo_block on Block {\n  colour\n  ...MetaList_block\n  ...MetaSortable_block\n  ...Editor_block\n}\n\nfragment Credits_block on Block {\n  colour\n  ...MetaList_block\n  ...MetaSortable_block\n}\n\nfragment Text_block on Block {\n  colour\n  ...Editor_block\n}\n\nfragment Images_block on Block {\n  blockType\n  fileConnection(first: 2) {\n    edges {\n      node {\n        __typename\n        id\n        fullPath\n        scope\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  ...ImageUploader_block\n}\n\nfragment ImageUploader_block on Block {\n  id\n}\n\nfragment Editor_block on Block {\n  id\n  editor\n}\n\nfragment MetaList_block on Block {\n  id\n  metaConnection(first: 10) {\n    edges {\n      node {\n        __typename\n        id\n        ...Meta_item\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment MetaSortable_block on Block {\n  id\n  metaConnection(first: 10) {\n    edges {\n      node {\n        __typename\n        id\n        field1\n        field2\n        position\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n\nfragment Meta_item on Meta {\n  id\n  field1\n  field2\n  position\n}\n"
};

module.exports = batch;
