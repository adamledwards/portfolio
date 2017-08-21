// @flow
import React from 'react'
import Router from 'universal-router'
import PageEditor from '~/view/PageEditor'
import PageList from '~/view/PageList'
import Page from '~/view/Page'

const routes = [
  {
    path: '/',
    Component: PageList
  },
  {
    path: '/page/:permlink',
    Component: Page
  },
  {
    path: '/page/:id',
    Component: Page
  },
  {
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
