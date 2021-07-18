import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./views/Home";
import Login from "./views/Login";
import Create from "./views/Create";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});

  const logIn = () => {
    setIsLoggedIn(!isLoggedIn);
  };
  const updateUser = (userObject) => {
    setUser(userObject);
  };

  return (
    <>
      <Layout isLoggedIn={isLoggedIn} user={user}>
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Home isLoggedIn={isLoggedIn} user={user} />
            </Route>
            <Route path="/login">
              <Login logIn={logIn} updateUser={updateUser} />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
          </Switch>
        </div>
      </Layout>
    </>
  );
}

export default App;
