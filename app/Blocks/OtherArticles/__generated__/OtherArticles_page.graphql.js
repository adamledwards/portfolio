/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type OtherArticles_page$ref: FragmentReference;
export type OtherArticles_page = {|
  +previous: ?{|
    +id: string,
    +title: ?string,
    +listingImageSmall: ?{|
      +id: string,
      +fullPath: ?string,
    |},
  |},
  +next: ?{|
    +id: string,
    +title: ?string,
    +listingImageSmall: ?{|
      +id: string,
      +fullPath: ?string,
    |},
  |},
  +$refType: OtherArticles_page$ref,
|};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = [
  (v0/*: any*/),
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "title",
    "args": null,
    "storageKey": null
  },
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "listingImageSmall",
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
];
return {
  "kind": "Fragment",
  "name": "OtherArticles_page",
  "type": "Page",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
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
      "selections": (v1/*: any*/)
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
      "selections": (v1/*: any*/)
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '697fc51cb7d1154212a8e6f230fdd5a0';
module.exports = node;
