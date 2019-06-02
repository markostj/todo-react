import React, { Component } from "react";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";
import {
  ErrorPage,
  Todos,
  TodosDetails,
  LifecycleMethods,
  Posts
} from "./views";
import { AppLayout } from "./components";
import "./css/App.css";

import { Provider } from "react-redux";
import { configureStore } from "./redux/store";
import { FirebaseTodos } from "./views/FirebaseTodos";

export class App extends Component {
  // Configure a redux store container
  store = configureStore();

  render() {
    return (
      <Provider store={this.store}>
        <BrowserRouter>
          <AppLayout>
            <Switch>
              <Redirect exact from="/" to="/firebase-todos" />
              <Route exact path="/posts" component={Posts} />
              <Route exact path="/todos" component={Todos} />
              <Route exact path="/firebase-todos" component={FirebaseTodos} />
              <Route path="/todos/:id" component={TodosDetails} />
              <Route path="/lifecycle" component={LifecycleMethods} />
              <Route component={ErrorPage} />
            </Switch>
          </AppLayout>
        </BrowserRouter>
      </Provider>
    );
  }
}
