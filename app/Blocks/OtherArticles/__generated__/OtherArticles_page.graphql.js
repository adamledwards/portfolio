/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteFragment} from 'relay-runtime';
export type OtherArticles_page = {|
  +previous: ?{|
    +id: string;
    +title: ?string;
    +listingImageSmall: ?{|
      +id: string;
      +fullPath: ?string;
    |};
  |};
  +next: ?{|
    +id: string;
    +title: ?string;
    +listingImageSmall: ?{|
      +id: string;
      +fullPath: ?string;
    |};
  |};
|};
*/


const fragment /*: ConcreteFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "OtherArticles_page",
  "selections": [
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
    }
  ],
  "type": "Page"
};

module.exports = fragment;
