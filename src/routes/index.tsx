// deps
import React from 'react'
import { RouteProps } from 'react-router-dom'
// helpers
import { routeMaker } from '_/routes/helpers'
import CONSTANTS from '_/utils/constants'

const Home = React.lazy(() => import('_/pages/Home'))
const Search = React.lazy(() => import('_/pages/Search'))
const NotFound = React.lazy(() => import('_/pages/NotFound'))

export interface IRoute extends RouteProps {
  exact: boolean
  path: string
  component: React.ComponentClass | React.FunctionComponent
}

const index: IRoute[] = [
  {
    exact: true,
    path: CONSTANTS.ROUTES.HOME,
    component: Home,
  },
  {
    exact: false,
    path: CONSTANTS.ROUTES.SEARCH,
    component: Search,
  },

  {
    exact: true,
    path: CONSTANTS.ROUTES.NOT_FOUND,
    component: NotFound,
  },
]

export default index.map(routeMaker)
