import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

import "./styles.css";


var mountNode = document.getElementById("app");
ReactDOM.render(<Auth0Provider
  domain="dev-npfgwcag.us.auth0.com"
  clientId="QmpBLwJL6dsb6LPHDlO0z2KFucJC59Wz"
  redirectUri={window.location.origin}
>
  <App />
</Auth0Provider>, mountNode);
