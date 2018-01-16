// @flow
import React from 'react'
import createHistory from 'history/createBrowserHistory'
import generateUrls from 'universal-router/generateUrls'
import router from '~/routes.js'

const url = generateUrls(router)
const history = createHistory()

export const navigate = (route: string, params: Object = {}): void => {
  history.push(url(route, params))
}

export const Link = ({className, ...props}) => {
  const href = url(props.route, props.params)
  return (
    <a
      className={className}
      href={href}
      onClick={
        (e: Event) => {
          e.preventDefault()
          history.push(href)
        }
      }
    >
      {props.children}
    </a>
  )
}
export default history
