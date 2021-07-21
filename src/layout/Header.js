import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import axios from "axios";
import { RiPlantLine } from "react-icons/ri";

const Header = (props) => {
  const history = useHistory();

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
    <div className={"navbar"}>
      <nav className={"container"}>
        <NavLink to="/" className={"nav-logo"}>
          <RiPlantLine size="1.4rem" />
          <span className={"nav-logo-text"}>Botanic Tracker</span>
        </NavLink>
        <NavLink to="/" className={"nav-link"}>
          Home
        </NavLink>
        {props.isLoggedIn && (
          <NavLink to="/create" className={"nav-link"}>
            Create
          </NavLink>
        )}
        {!props.isLoggedIn ? (
          <NavLink to="/login" className={"nav-link"}>
            Login
          </NavLink>
        ) : (
          <NavLink to="#" className={"nav-link"} onClick={logout}>
            Logout
          </NavLink>
        )}
      </nav>
    </div>
  );
};

export default Header;
