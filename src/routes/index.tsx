// deps
import React from 'react'
import { RouteProps } from 'react-router-dom'
// helpers
import { routeMaker } from '_/routes/helpers'
import CONSTANTS from '_/utils/constants'

const Forks = React.lazy(() => import('_/components/Forks'))
const NotFound = React.lazy(() => import('_/components/NotFound'))

export interface IRoute extends RouteProps {
  exact: boolean
  path: string
  component: React.ComponentClass | React.FunctionComponent
}

const index: IRoute[] = [
  {
    exact: true,
    path: CONSTANTS.ROUTES.FORKS,
    component: Forks,
  },
  {
    exact: true,
    path: CONSTANTS.ROUTES.NOT_FOUND,
    component: NotFound,
  },
]

export default index.map(routeMaker)
