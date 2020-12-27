import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <ul className="listgroup">
        <li className="listgroupitem">
          <NavLink exact to="/">
            Login
          </NavLink>
        </li>
        <li className="listgroupitem">
          <NavLink exact to="/r">
            register
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
export default NavBar;
