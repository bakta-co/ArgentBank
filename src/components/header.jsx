import React from "react";
import { Link } from "react-router-dom";
import AuthBtn from "./authBtn";
import { useSelector } from "react-redux";
import { selectAuth } from "../redux/reducers/authSlice";
import logo from "../assets/images/argentBankLogo.png";

function Header() {
  const isAuthenticated = useSelector(selectAuth);

  return (
    <div>
      <nav className="main-nav">
        <Link to="/">
          <div className="main-nav-logo-nimage">
            <img
              className="main-nav-logo-image"
              src= {logo}
              alt="Argent Bank Logo"
            />
          </div>
        </Link>

        <h1 className="sr-only">Argent Bank</h1>
        <div className="Login">
          <AuthBtn isLoggedIn={isAuthenticated} />
        </div>
      </nav>
    </div>
  );
}

export default Header;

