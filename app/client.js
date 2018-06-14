// @flow
import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import { QueryRenderer } from 'react-relay'
import Navigation from '~/App/Navigation'
import initStore from '~/utils/store.js'
import history from '~/utils/history.js'
import environment from '~/utils/relay.js'
import router from './routes.js'
import './client.style.scss'

function mount (component: React$Element<any>) {
  ReactDom.render(
    component,
    document.getElementById('main')
  )
}
const store = initStore()

class App extends React.Component {

  constructor (props) {
    super(props)
    this.state = {}
  }

  componentDidMount () {
    this.gotoPath(history.location.pathname)
    this.unlisten = history.listen((location, action) => {
      this.gotoPath(location.pathname)
    })
  }

  gotoPath (pathname: string) {
    router.resolve({ path: pathname }).then(route => this.setState(route))
  }

  renderQueryRenderer () {
    const { Component, params = {} } = this.state
    return (
      <QueryRenderer
        environment={environment}
        query={Component.query}
        variables={params}
        render={
          ({error, props}) => {
            if (error) {
              return <div>{error.message}</div>
            } else if (props) {
              return <Component {...props} params={params} />
            }
            return null
          }}
      />
    )
  }
  render () {

    const { Component, params = {} } = this.state
    let classname = 'App'
    if (typeof Component === 'function') {
      if (Component.pageName) {
        classname = classname + ` App--${Component.pageName}`
      }

      return (
        <Provider store={store}>
          <section className={classname}>
            <Navigation/>
            {Component.query ? this.renderQueryRenderer() : <Component params={params} />}
          </section>
        </Provider>
      )
    }
    return null
  }
}

mount(<App/>)
