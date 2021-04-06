import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { LoginScreen } from '../components/login/Login';
import { DashBoards } from './DashBoards';


export const RouterApp = () => {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/login" component={LoginScreen} />
            <Route path="/" component={DashBoards} />
            
          </Switch>
        </div>
      </Router>
    );
}
