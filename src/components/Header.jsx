import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <div className="h-20 header bg-slate-400 shadow-lg">
      <nav className="container flex gap-20 h-full items-center justify-center">
        <NavLink className={"text-3xl"} to={"/"}>
          Users
        </NavLink>
        <NavLink className={"text-3xl"} to={"/login"}>
          Create
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
