import {
  Environment,
  Network,
  RecordSource,
  Store
} from 'relay-runtime'

function fetchQuery(
  operation,
  variables,
  cacheConfig,
  uploadables,
) {
  let config
  if (uploadables) {
    const formData = new FormData();
    formData.append('query', operation.text)
    formData.append('variables', JSON.stringify(variables))
    formData.append('file', uploadables.item(0))
    config = {
      method: 'POST',
      body: formData
    }
  } else {
    config = {
      method: 'POST',
      headers: {
        // Add authentication and other headers here
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        query: operation.text, // GraphQL text from input
        variables
      })
    }
  }
  return fetch('http://localhost:4000/graphql', config).then(response => {
    return response.json()
  })
}
const source = new RecordSource()
const store = new Store(source)
const network = Network.create(fetchQuery)

export default new Environment({
  network,
  store
})
