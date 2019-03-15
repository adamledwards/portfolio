// @flow
import { commitMutation, graphql } from 'react-relay'
import environment from '~/utils/relay.js'
import { ConnectionHandler } from 'relay-runtime'
import type { CreateBlockMutationVariables } from './__generated__/CreateBlockMutation.graphql.js'

const mutation = graphql`
mutation createBlockMutation($block: createBlockInput!) {
  createBlock(input: $block) {
    blockEdge {
      node {
        id
        blockType
        position
        metaConnection (first: 10) @connection(key: "PageEditor_metaConnection") {
          edges {
            node {
              id
            }
          }
        }
        fileConnection (first: 2) @connection(key: "Block_fileConnection") {
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

export default function createBlock(block: CreateBlockMutationVariables.block.blockInput) {

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
      mutation,
      variables: { block: { blockInput: block } },
      updater: (store) => {
        const createBlockRoot = store.getRootField('createBlock')
        const blockEdge = createBlockRoot.getLinkedRecord('blockEdge')
        const node = blockEdge.getLinkedRecord('node')
        const pageProxy = store.get(block.pageId)
        const connection = ConnectionHandler.getConnection(pageProxy, 'PageEditor_blockConnection')
        const newEdge = ConnectionHandler.createEdge(
          store,
          connection,
          node,
          blockEdge.getValue('__typename')
        )
        ConnectionHandler.insertEdgeBefore(connection, newEdge)
      },
      onCompleted: (response, errors) => {
        resolve(response.createBlock)
        console.log('Response received from server.')
      },
      onError: err => { reject(err) },
    })
  })
}
