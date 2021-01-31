import React from "react";

const Navbar = ({ totalCount }) => {
  console.log("Navbar - Rendered");
  return (
    <nav className="navbar navbar-light bg-light">
      <span className="navbar-brand mb-0 h1">
        Navbar
        <span className="badge badge-primary m-2">{totalCount}</span>
      </span>
    </nav>
  );
};

export default Navbar;
