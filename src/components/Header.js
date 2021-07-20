import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import axios from "axios";
import "../App.scss";
import "./Header.scss";

const Header = (props) => {
  let history = useHistory();

  const logout = async () => {
    await axios({
      method: "post",
      url: "https://botanictracker-api.herokuapp.com/users/logout",
      headers: { authorization: `Bearer ${localStorage.token}` },
    });
    props.setIsLoggedIn(false);
    props.setUser({});
    history.push("/");
  };

  return (
    <div>
      <nav>
        <NavLink to="/" className="title">
          Botanic Tracker
        </NavLink>
        <NavLink to="/">Home</NavLink>
        {props.isLoggedIn && <NavLink to="/create">Create</NavLink>}
        {!props.isLoggedIn ? (
          <NavLink to="/login">Login</NavLink>
        ) : (
          <NavLink to="#" onClick={logout}>
            Logout
          </NavLink>
        )}
      </nav>
    </div>
  );
};

export default Header;
