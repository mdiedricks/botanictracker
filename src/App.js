import React from "react";
import { Switch, Route } from "react-router-dom";

import Layout from "./layout/Layout";
import Home from "./views/Home";
import Login from "./views/Login";
import Create from "./views/Create";

function App() {
  return (
    <Layout>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
