// @flow
import { commitMutation, graphql } from 'react-relay'
import environment from '~/utils/relay.js'
import type { RemoveBlockMutationVariables } from './__generated__/RemoveBlockMutation.graphql.js'

const mutation = graphql`
mutation RemoveBlockMutation($block: removeBlockInput!) {
  removeBlock(input: $block) {
    deletedId
  }
}`

export default function removeBlock (id: string) {
  const configs = [{
    type: 'NODE_DELETE',
    deletedIDFieldName: 'deletedId'
  }]

  return new Promise((resolve, reject) => {
    commitMutation(environment, {
      configs,
      mutation,
      variables: {block: { id }},
      onCompleted: (response, errors) => {
        resolve(response.removeBlock)
        console.log('Response received from server.')
      },
      onError: err => { reject(err) },
    })
  })
}
