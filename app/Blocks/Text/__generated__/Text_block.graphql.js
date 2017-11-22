/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteFragment} from 'relay-runtime';
export type Text_block = {|
  +colour: ?string;
|};
*/


const fragment /*: ConcreteFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Text_block",
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "args": null,
      "name": "colour",
      "storageKey": null
    },
    {
      "kind": "FragmentSpread",
      "name": "Editor_block",
      "args": null
    }
  ],
  "type": "Block"
};

module.exports = fragment;
