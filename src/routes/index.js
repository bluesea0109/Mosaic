import React from 'react'
import { BrowserRouter, Redirect, Switch, Route } from 'react-router-dom'
import { NewsContainer } from 'containers'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Redirect exact path='/' to='/news' />
      <Route exact path='/news' component={NewsContainer} />
    </Switch>
  </BrowserRouter>
)

export default Routes
