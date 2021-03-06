import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <NavLink to="/">
        <button>Home</button>
      </NavLink>
      <NavLink to="/about">
        <button>about</button>
      </NavLink>
      <NavLink to="/test">
        <button>test</button>
      </NavLink>
    </div>
  );
};

export default Navigation;
