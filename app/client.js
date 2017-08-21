// @flow
import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import Navigation from '~/App/Navigation'
import initStore from '~/utils/store.js'
import history from '~/utils/history.js'
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

  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount () {
    console.log(history.location);
    this.gotoPath(history.location.pathname)
    this.unlisten = history.listen((location, action) => {
      this.gotoPath(location.pathname)
    })
  }

  gotoPath(pathname: string) {
    router.resolve({ path: pathname }).then(route => this.setState(route))
  }

  render () {
    const { Component, params = {} } = this.state
    if (typeof Component === 'function') {
      return (
        <Provider store={store}>
          <section>
            <Navigation/>
            <Component params={params} />
          </section>
        </Provider>
      )
    }
    return null
  }
}


mount(<App/>)
