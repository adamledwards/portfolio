// @flow
import { commitMutation, graphql } from 'react-relay'
import environment from '~/utils/relay.js'
import { ConnectionHandler } from 'relay-runtime'

graphql`
  fragment updatePositionQuery on BlocksEdge {
    node {
      id
      blockType
      position
    }
  }
`
const mutation = graphql`
  mutation updatePositionMutation($input: updateBlockPositionInput!) {
    updateBlockPosition(input: $input) {
      blockEdge {
        ...updatePositionQuery
      }
      blockConnection {
        edges {
          ...updatePositionQuery
        }
      }
      
    }
  }
`
function sharedUpdater (pageProxy, connection, id, position) {
  connection.getLinkedRecords('edges').forEach(edge => {
    const node = edge.getLinkedRecord('node')
    const currentPosition = node.getValue('position')
    if (node.getValue('position') > position && node.getDataID() !== id) {
      node.setValue(currentPosition + 1, 'position')
    }
    edge.getLinkedRecord('node')
  })
}

export default function updatePosition (id: string, position: number, pageID: string) {
  return new Promise((resolve, reject) => {
    commitMutation(environment,
      {
        mutation,
        variables: {
          input: {
            id,
            position
          }
        },
        onCompleted (response) {
          resolve(response)
        },
        updater (store) {
          const pageProxy = store.get(pageID)
          const connection = ConnectionHandler.getConnection(
            pageProxy,
            'PageEditor_blockConnection'
          )
          sharedUpdater(pageProxy, connection, id, position)
        },
        optimisticUpdater (store) {
          const pageProxy = store.get(pageID)
          const connection = ConnectionHandler.getConnection(
            pageProxy,
            'PageEditor_blockConnection'
          )
          store.get(id).setValue(position, 'position')
          sharedUpdater(pageProxy, connection, id, position)
        },
        onError (error) {
          reject(error)
        }
      })
  })
}
