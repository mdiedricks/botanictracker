import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
import "./header.css";

function header() {
  return (
    <div>
      <nav>
        <h4>Botanic Tracker</h4>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/create">Create</NavLink>
        <NavLink to="/login">Login</NavLink>
      </nav>
    </div>
  );
}

export default header;
