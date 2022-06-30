import React from "react";
import "./Header-Style.css";
import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <Fragment>
      <div className="header">
        <span className="logo">Do You Know About This Dog?</span>
        <div className="header-right">
          <Link to="/">Home</Link>
          <Link to="/cards">Collections</Link>
        </div>
      </div>{" "}
      <Outlet />
    </Fragment>
  );
};

export default Header;
