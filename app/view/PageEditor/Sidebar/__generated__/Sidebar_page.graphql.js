/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Sidebar_page$ref: FragmentReference;
export type Sidebar_page = {|
  +id: string,
  +title: ?string,
  +client: ?string,
  +description: ?string,
  +projectGoLive: ?string,
  +published: ?boolean,
  +listingImage: ?{|
    +id: string,
    +fullPath: ?string,
  |},
  +listingImageSmall: ?{|
    +id: string,
    +fullPath: ?string,
  |},
  +$refType: Sidebar_page$ref,
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
    "name": "fullPath",
    "args": null,
    "storageKey": null
  }
];
return {
  "kind": "Fragment",
  "name": "Sidebar_page",
  "type": "Page",
  "metadata": null,
  "argumentDefinitions": [],
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
      "kind": "ScalarField",
      "alias": null,
      "name": "projectGoLive",
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
      "kind": "LinkedField",
      "alias": null,
      "name": "listingImage",
      "storageKey": null,
      "args": null,
      "concreteType": "File",
      "plural": false,
      "selections": (v1/*: any*/)
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "listingImageSmall",
      "storageKey": null,
      "args": null,
      "concreteType": "File",
      "plural": false,
      "selections": (v1/*: any*/)
    }
  ]
};
})();
// prettier-ignore
(node/*: any*/).hash = '1cd0229737f197b59eb09be4b1f6018e';
module.exports = node;
