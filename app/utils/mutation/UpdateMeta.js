// @flow
import { commitMutation, graphql } from 'react-relay'
import { ConnectionHandler } from 'relay-runtime'
import environment from '~/utils/relay.js'

const mutation = graphql`
  mutation UpdateMetaMutation($meta: updateMetaInput!) {
    updateMeta(input: $meta) {
      metaConnection {
        edges {
          node {
            id
            field1
            field2
            position
          }
        }
      }
    }
  }
`

export default function updateMeta (meta, blockId) {

  return new Promise((resolve, reject) => {

    commitMutation(environment, {
      mutation,
      variables: {meta: { metaInput: meta }},
      updater: (store) => {
        const updateMetaRoot = store.getRootField('updateMeta')
        const metaConnection = updateMetaRoot.getLinkedRecord('metaConnection')
        const blockProxy = store.get(blockId)
        const connection = ConnectionHandler.getConnection(blockProxy, 'PageEditor_metaConnection')
        connection.copyFieldsFrom(metaConnection)
      },
      onCompleted: (response, errors) => {
        resolve(response.updateMeta)
        console.log('Response received from server.')
      },
      onError: err => { reject(err) }
    })
  })
}
