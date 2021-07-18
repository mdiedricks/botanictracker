import React from "react";
import { Switch, Route } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./views/Home";
import Login from "./views/Login";
import NewPlant from "./views/Newplant";
import "./App.css";

function App() {
  return (
    <>
      <Layout>
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/create">
              <NewPlant />
            </Route>
          </Switch>
        </div>
      </Layout>
    </>
  );
}

export default App;
