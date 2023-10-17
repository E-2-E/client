import React from "react";
import { Link } from "react-router-dom";
import "./topstat.css";

export default function TopStat() {
  return (
    <div className="navbar">
      <a
        href="http://vvitguntur.com"
        className="topBarItem"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fa fa-fw fa-info"></i>
        About
      </a>
      <Link to="/register">
        <i className="fa fa-fw fa-envelope"></i> Register
      </Link>
      <Link to="/login">
        <i className="fa fa-fw fa-user"></i> Login
      </Link>
      <Link to="/" className="active">
        <i className="fa fa-fw fa-home"></i> Home
      </Link>
      <Link to="/" className="yo">
        VVIT Connect
      </Link>
    </div>
  );
}
