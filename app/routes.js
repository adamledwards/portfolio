// @flow
import Router from 'universal-router'
import PageEditor, { NewPage } from '~/view/PageEditor'
import PageList from '~/view/PageList'
import Page from '~/view/Page'

const routes = [
  {
    path: '/',
    Component: PageList
  },
  {
    name: 'pageWithID',
    path: '/page/:id',
    Component: Page
  },
  {
    name: 'newPage',
    path: '/page/new/edit',
    Component: NewPage
  },
  {
    name: 'editPage',
    path: '/page/:id/edit',
    Component: PageEditor
  }
]

function resolveRoute (context, params) {
  const { route, next } = context
  if (!route.Component) return next()
    return {
      Component: route.Component,
      params,
    }
}

export default new Router(routes, { resolveRoute })
