/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type Editor_block$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type Text_block$ref: FragmentReference;
export type Text_block = {|
  +colour: ?string,
  +$fragmentRefs: Editor_block$ref,
  +$refType: Text_block$ref,
|};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "Text_block",
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
      "name": "Editor_block",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '85fc1459ccf52a0af4ae1cc3de3c825d';
module.exports = node;
