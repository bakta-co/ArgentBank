import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, userlogout } from "../redux/reducers/authSlice";
import { Link, useNavigate } from "react-router-dom";

function AuthBtn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated); 

 
  const userName = useSelector((state=> state.user.userDetails.userName));
  
  const handleLogout = () => {
    dispatch(logout());
    dispatch(userlogout());
    navigate("/");
  };



  return (
    <>
      {isAuthenticated ? (
      <div className="userNameLogin">
        <Link to="/profil">
      <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="sign-in-icon icon-isLogged"
              >
                <path d="M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z" />
              </svg>
             <span className="authbtn_userName"> {userName} </span></Link>
        <div className="main-nav-item" onClick={handleLogout}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="icon-logout"><path d="M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"/></svg>
          Sign Out
        </div></div>
      ) : (
        <Link to="/login">
          <div className="main-nav-item">
            <div className="fa fa-user-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="sign-in-icon"
              >
                <path d="M399 384.2C376.9 345.8 335.4 320 288 320H224c-47.4 0-88.9 25.8-111 64.2c35.2 39.2 86.2 63.8 143 63.8s107.8-24.7 143-63.8zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256 16a72 72 0 1 0 0-144 72 72 0 1 0 0 144z" />
              </svg>
            </div>
            Sign In
          </div>
        </Link>
      )}
    </>
  );
}

export default AuthBtn;
