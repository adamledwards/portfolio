import { commitMutation, graphql } from 'react-relay'
import environment from '~/utils/relay.js'

const mutation = graphql`
  mutation CreatePageMutation($input: CreatePageInput!) {
    createPage(input: $input) {
      page {
        id,
        title,
        projectGoLive,
        client
      }
    }
  }
`

export default function createPage (page, uploadables) {
  return new Promise((resolve, reject) => {
    commitMutation(environment, {
      mutation,
      uploadables,
      variables: {input: { pageInput: page }},
      onCompleted: (response, errors) => {
        resolve(response.createPage)
        console.log('Response received from server.')
      },
      onError: err => { reject(err) },
    })
  })

}
