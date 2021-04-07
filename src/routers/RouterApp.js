import React, { useContext } from 'react'
import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import { AuthContext } from '../auth/AuthContext';

import { LoginScreen } from '../components/login/Login';
import { DashBoards } from './DashBoards';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoute } from './PublicRoute';


export const RouterApp = () => {
  const {user} = useContext(AuthContext)
  
    return (
      <Router>
        <div>
          <Switch>
            <PublicRoute
              exact
              path="/login"
              component={LoginScreen}
              isAuthenticated={user.logged}
            />

            <PrivateRoutes
              path="/"
              component={DashBoards}
              isAuthenticated={user.logged}
            />
          </Switch>
        </div>
      </Router>
    );
}
