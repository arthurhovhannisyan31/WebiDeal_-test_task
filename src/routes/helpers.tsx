// deps
import React from 'react'
import { Route } from 'react-router-dom'
// helpers
import { IRoute } from '_/routes'

// eslint-disable-next-line import/prefer-default-export
export const routeMaker: React.FC<IRoute> = (params) => (
  <Route key={params.path} {...params} />
)
