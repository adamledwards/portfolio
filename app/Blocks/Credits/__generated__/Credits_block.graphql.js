/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type MetaList_block$ref = any;
type MetaSortable_block$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type Credits_block$ref: FragmentReference;
export type Credits_block = {|
  +colour: ?string,
  +$fragmentRefs: MetaList_block$ref & MetaSortable_block$ref,
  +$refType: Credits_block$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "Credits_block",
  "type": "Block",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "colour",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "FragmentSpread",
      "name": "MetaList_block",
      "args": null
    },
    {
      "kind": "FragmentSpread",
      "name": "MetaSortable_block",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'd359e7bcd54fcb5df7e28addbda1051c';
module.exports = node;
