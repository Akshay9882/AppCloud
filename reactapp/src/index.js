import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./js/store/index";
import App from "./js/components/App";
import {
  BrowserRouter, Switch,
  Route,
  Link
} from "react-router-dom";
render(
  <BrowserRouter>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
    </div>
    <div>
      <Switch>
        <Route exact path="/">
        </Route>
        <Route path="/about">
          <Provider store={store}>
            <App />
          </Provider>,
          </Route>
        <Route path="/dashboard">
        </Route>
      </Switch>
    </div>
  </BrowserRouter>,

  document.getElementById("root")
);