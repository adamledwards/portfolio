// @flow
import React from 'react'
import createHistory from 'history/createBrowserHistory'
const history = createHistory()

export const navigate = (location: string):void => {
  history.push(location)
}

export const Link = (props) => (
  <a
    {...props}
    onClick={
      (e: Event) => {
        e.preventDefault()
        navigate(props.href)
      }
    }
  >
    {props.children}
  </a>
)
export default history
