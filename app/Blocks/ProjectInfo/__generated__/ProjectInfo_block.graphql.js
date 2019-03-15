/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type Editor_block$ref = any;
type MetaList_block$ref = any;
type MetaSortable_block$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ProjectInfo_block$ref: FragmentReference;
export type ProjectInfo_block = {|
  +colour: ?string,
  +$fragmentRefs: MetaList_block$ref & MetaSortable_block$ref & Editor_block$ref,
  +$refType: ProjectInfo_block$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "ProjectInfo_block",
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
    },
    {
      "kind": "FragmentSpread",
      "name": "Editor_block",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '62159e0e98e33ba97379e29908192580';
module.exports = node;
