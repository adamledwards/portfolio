// @flow
import React from 'react'
import createHistory from 'history/createBrowserHistory'
import generateUrls from 'universal-router/generateUrls'
import router from '~/routes.js'

const url = generateUrls(router)
const history = createHistory()



export const navigate = (route: string, params: Object = {}): void => {
  console.log(url(route, params))
  history.push(url(route, params))
}

export const Link = (props) => (
  <a
    {...props}
    onClick={
      (e: Event) => {
        e.preventDefault()
        navigate(props.route, props.params)
      }
    }
  >
    {props.children}
  </a>
)
export default history
