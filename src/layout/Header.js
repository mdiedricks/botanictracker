import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { clearUser } from "../redux/userSlice";
import { useSelector } from "react-redux";
import { RiPlantLine } from "react-icons/ri"; //RiAccountCircleLine
import { userLogout, clearLocalStorage } from "../utils/users";

const Header = (props) => {
  const user = useSelector((state) => state.user);
  const history = useHistory();
  const dispatch = useDispatch();
  const { toggleLogin } = props;

  const logout = async () => {
    try {
      await userLogout();
      dispatch(clearUser());
      clearLocalStorage();
      toggleLogin();
      history.push("/");
    } catch (error) {}
  };

  return (
    <div className={"nav-wrap"}>
      <nav className={"container"}>
        <NavLink to="/" className={"nav-logo"}>
          <RiPlantLine size="1.4rem" />
          <span className={"nav-logo-text"}>Botanic Tracker</span>
        </NavLink>
        <NavLink to="/" className={"nav-link"}>
          Home
        </NavLink>
        {/* {user.name && <span>{user.name}</span>} */}
        {user.name && (
          <NavLink to="/create" className={"nav-link"}>
            Create
          </NavLink>
        )}
        {!user.name ? (
          <NavLink to="/login" className={"nav-link"}>
            Login
          </NavLink>
        ) : (
          <NavLink to="#" className={"nav-link"} onClick={logout}>
            Logout
          </NavLink>
        )}
        {/* <NavLink to="#" className={"nav-logo"}>
          <RiAccountCircleLine />
        </NavLink> */}
      </nav>
    </div>
  );
};

export default Header;
