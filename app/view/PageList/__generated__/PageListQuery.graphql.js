/**
 * @flow
 * @relayHash 28881475677ae6880fa24fdd45bf3514
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type PageCard_page$ref = any;
export type PageListQueryVariables = {||};
export type PageListQueryResponse = {|
  +pages: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +$fragmentRefs: PageCard_page$ref
      |}
    |}>
  |}
|};
export type PageListQuery = {|
  variables: PageListQueryVariables,
  response: PageListQueryResponse,
|};
*/


/*
query PageListQuery {
  pages {
    edges {
      node {
        ...PageCard_page
        id
      }
    }
  }
}

fragment PageCard_page on Page {
  id
  title
  client
  description
  listingImage {
    id
    fullPath
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "PageListQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "pages",
        "storageKey": null,
        "args": null,
        "concreteType": "PageConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "PageEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "Page",
                "plural": false,
                "selections": [
                  {
                    "kind": "FragmentSpread",
                    "name": "PageCard_page",
                    "args": null
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
    "name": "PageListQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "pages",
        "storageKey": null,
        "args": null,
        "concreteType": "PageConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "PageEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "Page",
                "plural": false,
                "selections": [
                  (v0/*: any*/),
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
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "listingImage",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "File",
                    "plural": false,
                    "selections": [
                      (v0/*: any*/),
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "fullPath",
                        "args": null,
                        "storageKey": null
                      }
                    ]
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
    "operationKind": "query",
    "name": "PageListQuery",
    "id": null,
    "text": "query PageListQuery {\n  pages {\n    edges {\n      node {\n        ...PageCard_page\n        id\n      }\n    }\n  }\n}\n\nfragment PageCard_page on Page {\n  id\n  title\n  client\n  description\n  listingImage {\n    id\n    fullPath\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '81b0aed73aa469b6256944603c4a19df';
module.exports = node;
