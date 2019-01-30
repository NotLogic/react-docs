import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import routes from './routes'
const myRouter = () => (
  <Router>
    {routes}
  </Router>
)
export default myRouter