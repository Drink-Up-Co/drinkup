import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import Favorites from './Components/Main/Favorites';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import "./styles.css";


const mountNode = document.getElementById("app");
ReactDOM.render(<Auth0Provider
  domain="dev-npfgwcag.us.auth0.com"
  clientId="QmpBLwJL6dsb6LPHDlO0z2KFucJC59Wz"
  redirectUri={window.location.origin}
>
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/favorites" component={Favorites} />
    </Switch>
  </Router>
</Auth0Provider>, mountNode);
