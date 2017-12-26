// @flow
import { commitMutation, graphql } from 'react-relay'
import environment from '~/utils/relay.js'

const mutation = graphql`
  mutation createMetaMutation ($meta: createMetaInput!) {
    createMeta(input: $meta){
      metaEdge {
        node {
          id,
          field1,
          field2
        }
      }
    }
  }
`

export default function createMeta (meta) {

  const configs = [{
    type: 'RANGE_ADD',
    parentID: meta.blockId,
    connectionInfo: [{
      key: 'PageEditor_metaConnection',
      rangeBehavior: 'prepend'
    }],
    edgeName: 'metaEdge'
  }]

  return new Promise((resolve, reject) => {
    commitMutation(environment, {
      configs,
      mutation,
      variables: {meta: { metaInput: meta }},
      onCompleted: (response, errors) => {
        resolve(response.createMeta)
        console.log('Response received from server.')
      },
      onError: err => { reject(err) }
    })
  })
}
