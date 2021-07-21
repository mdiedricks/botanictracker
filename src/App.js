import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";

import Layout from "./layout/Layout";
import Home from "./views/Home";
import Login from "./views/Login";
import Create from "./views/Create";

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
    <Layout
      isLoggedIn={isLoggedIn}
      setIsLoggedIn={setIsLoggedIn}
      user={user}
      setUser={setUser}
    >
      <Switch>
        <Route exact path="/">
          <Home isLoggedIn={isLoggedIn} user={user} />
        </Route>
        <Route path="/create">
          <Create isLoggedIn={isLoggedIn} user={user} />
        </Route>
        <Route path="/login">
          <Login
            logIn={logIn}
            updateUser={updateUser}
            setIsLoggedIn={setIsLoggedIn}
          />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
