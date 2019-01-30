import React from 'react'
import {Route, Switch, Redirect} from 'react-router'

import App from '@/app'
import NoMatch from '@/pages/404'

const routes = (
  <Switch>
    <Route path="/" exact render={() => <Redirect to='/home' />} />
    <Route path="/" component={App} />    
    <Route component={NoMatch} />
  </Switch>
);

export default routes