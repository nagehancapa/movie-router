import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div style={{ marginBottom: 20 }}>
      <NavLink activeStyle={{ fontWeight: "bold", color: "red" }} to="/" exact>
        Home
      </NavLink>
      {" - "}
      <NavLink
        activeStyle={{ fontWeight: "bold", color: "red" }}
        to="/discover"
      >
        Discover Movies
      </NavLink>
    </div>
  );
}
