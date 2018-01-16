import { commitMutation, graphql } from 'react-relay'
import environment from '~/utils/relay.js'

const mutation = graphql`
  mutation updatePageMutation ($page: UpdatePageInput!) {
    updatePage(input: $page) {
      page {
        id
        title
        description
        client
        published
        position
        listingImage {
          id
          fullPath
        }
        listingImageSmall {
          id
          fullPath
        }
      }
    } 
}
`
export default function updatePage (pageId, pageInput, uploadables) {
  return new Promise((resolve, reject) => {
    commitMutation(
      environment,
      {
        mutation,
        uploadables,
        variables: {
          page: {
            id: pageId,
            pageInput
          }
        },
        onCompleted: (response, errors) => {
          resolve(response.updatePage)
          console.log('Response received from server.')
        }
      }
    )
  })
}
