// @flow
import { commitMutation, graphql } from 'react-relay'
import environment from '~/utils/relay.js'
import { ConnectionHandler } from 'relay-runtime';

const mutation = graphql`
mutation RemoveMetaMutation($meta: removeMetaInput!) {
  removeMeta(input: $meta) {
    deletedId
  }
}
`

function sharedUpdater (store, blockId, deletedId) {
  const blockProxy = store.get(blockId)
  const conn = ConnectionHandler.getConnection(
    blockProxy,
    'PageEditor_metaConnection'
  )
  ConnectionHandler.deleteNode(
    conn,
    deletedId
  )
}

export default function removeMeta (id: string, blockId: string) {
  return new Promise((resolve, reject) => {
    commitMutation(environment, {
      mutation,
      variables: {meta: { id }},
      updater: (store) => {
        const payload = store.getRootField('removeMeta')
        const deletedId = payload.getValue('deletedId')
        sharedUpdater(store, blockId, deletedId)
      },
      optimisticUpdater: (store) => {
        sharedUpdater(store, blockId, id)
      },
      onCompleted: (response, errors) => {
        resolve(response.removeMeta)
        console.log('Response received from server.')
      },
      onError: err => { reject(err) },
    })
  })
}
