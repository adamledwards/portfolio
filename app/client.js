// @flow
import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import PageEditor from '~/view/PageEditor'
import initStore from '~/utils/store.js'
import './client.style.scss'

function mount (component: React$Element<any>) {
  ReactDom.render(
    component,
    document.getElementById('main')
  )
}
const store = initStore()
const App = (
  <Provider store={store}>
    <PageEditor />
  </Provider>
)

mount(App)
