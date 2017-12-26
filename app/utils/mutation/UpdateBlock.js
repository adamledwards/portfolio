// @flow
import { commitMutation, graphql } from 'react-relay'
import environment from '~/utils/relay.js'

const mutation = graphql`
  mutation updateBlockMutation($block: updateBlockInput!) {
    updateBlock(input: $block) {
      block {
        id
        blockType
        editor
        date
        title
        colour
      }
    }
  }
`

export default function updateBlock (block) {
  return new Promise((resolve, reject) => {
    commitMutation(environment, {
      mutation,
      variables: {block: { blockInput: block }},
      onCompleted: (response, errors) => {
        resolve(response.updateBlock)
        console.log('Response received from server.')
      },
      onError: err => { reject(err) },
    })
  })
}
