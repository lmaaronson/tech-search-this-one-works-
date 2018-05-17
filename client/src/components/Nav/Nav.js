import React from "react";
import "./Nav.css";

const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <img src="./rocket.png" width="50px" className="mr-3"/>
    <a className="navbar-brand" href="/">
      Search
      
    </a>
    <a className="navbar-brand" href="/saved">
      Saved
    </a>
  </nav>
);

export default Nav;
