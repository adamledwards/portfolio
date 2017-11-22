// @flow
import { commitMutation, graphql } from 'react-relay'
import environment from '~/utils/relay.js'
import type { CreateBlockMutationVariables } from './__generated__/CreateBlockMutation.graphql.js'

const mutation = graphql`
mutation CreateBlockMutation($block: createBlockInput!) {
  createBlock(input: $block) {
    blockEdge {
      node {
        id,
        blockType,
        metaConnection (first: 10) @connection(key: "PageEditor_metaConnection") {
          edges {
            node {
              id
            }
          }
        }
      }
    }
  }
}
`

export default function createBlock (block: CreateBlockMutationVariables.block.blockInput) {

  const configs = [{
    type: 'RANGE_ADD',
    parentID: block.pageId,
    connectionInfo: [{
      key: 'PageEditor_blockConnection',
      rangeBehavior: 'append'
    }],
    edgeName: 'blockEdge'
  }];

  return new Promise((resolve, reject) => {
    commitMutation(environment, {
      configs,
      mutation,
      variables: {block: { blockInput: block }},
      onCompleted: (response, errors) => {
        resolve(response.createBlock)
        console.log('Response received from server.')
      },
      onError: err => { reject(err) },
    })
  })
}
