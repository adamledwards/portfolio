// @flow
import { commitMutation, graphql } from 'react-relay'
import { ConnectionHandler } from 'relay-runtime'
import environment from '~/utils/relay.js'

const mutation = graphql`
  mutation UploadBlockFileMutation($input: UploadBlockFileInput!) {
    uploadBlockFile(input: $input) {
      clientMutationId,
      deletedIds,
      file {
         __typename
        cursor
        node {
          id
          fullPath
          scope
        }
      }
    }
  }
`
export default function uploadBlockFile (blockFile: {scope: string, blockId: string}, uploadables: FileList) {
  return new Promise((resolve, reject) => {
    commitMutation(environment,
      {
        mutation,
        variables: { input: { blockFileInput: blockFile } },
        uploadables,
        updater: (store) => {
          const uploadBlockFileRoot = store.getRootField('uploadBlockFile')
          const deletedIds = uploadBlockFileRoot.getValue('deletedIds')
          const fileEdge = uploadBlockFileRoot.getLinkedRecord('file')
          const node = fileEdge.getLinkedRecord('node')
          const blockProxy = store.get(blockFile.blockId)
          const connection = ConnectionHandler.getConnection(blockProxy, 'Block_fileConnection')
          deletedIds.forEach(id => ConnectionHandler.deleteNode(connection, id))
          const newEdge = ConnectionHandler.createEdge(
            store,
            connection,
            node,
            fileEdge.getValue('__typename')
          )
          ConnectionHandler.insertEdgeBefore(connection, newEdge)
        },
        onCompleted: (response, errors) => {
          resolve(response.uploadBlockFile)
          console.log('Response received from server.')
        },
        onError: err => { reject(err) },
      }
    )
  })
}
