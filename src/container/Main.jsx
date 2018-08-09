import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Landing from '../components/Landing';
import Login from '../components/Login';
import Register from '../components/Register';

function Main(props) {
  return (
    <div>
      <Switch>
        <Route 
          exact path="/"
          component={Landing}
        />

        <Route 
          path="/login"
          component={Login}
        />

        <Route 
          path="/register"
          component={Register}
        />
        <Redirect to="/" />
      </Switch>
    </div>
  )
}

export default Main;