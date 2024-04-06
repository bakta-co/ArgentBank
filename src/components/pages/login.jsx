import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser} from "../../redux/reducers/authSlice";


const Login = () => {
  const dispatch = useDispatch();



  const [credentials, setCredentials] = useState({
    email: localStorage.getItem('email') || "",
    password: ""
  });

  const errorMessage = useSelector(state => state.error.errorMessage);  
  const [rememberMe, setRememberMe] = useState(false); 

 


  console.log("ptet",rememberMe)

  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
  
  };
  const onSubmit = (e) => {
    e.preventDefault();
     dispatch(loginUser(credentials))
      if (rememberMe) {
    localStorage.setItem('email', credentials.email);
    localStorage.setItem('rememberMe', 'true');
  } else {
    localStorage.removeItem('email');
    localStorage.removeItem('rememberMe')
  }
  };     
      


  return (
    <div className="main bg-dark">
      <section className="sign-in-content">
        
        <h1>Sign In</h1>
        <form onSubmit={onSubmit}>
        <div className="input-wrapper">
            <label htmlFor="email">Email</label>
           <input type="text" id="email" name="email" value={credentials.email} onChange={(e)=> setCredentials({...credentials, email: e.target.value})} />
         </div>
         <div className="input-wrapper">
          <label htmlFor="password">Password</label
           ><input type="password" id="password" name="password" value={credentials.password} onChange={(e)=> setCredentials({...credentials, password: e.target.value})}  />
          </div>
          <div className="input-remember">
            <input
              type="checkbox"
              id="remember-me"
              checked={rememberMe}
              onChange={handleRememberMeChange}
            />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <div>
          {errorMessage && <p>{errorMessage}</p>}
    </div>
          <button className="sign-in-button">SignIn</button>
        </form>
      </section>
    </div>
  );
};

export default Login;


