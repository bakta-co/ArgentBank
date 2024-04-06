


import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/login";
import PrivateRoute from "./private";
import Header from "./header"
import Footer from "./footer";

function Router() {

  return (
    <div>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />}/>
      <Route path="/profil" element={<PrivateRoute />} />
    </Routes>
    <Footer/>
    </div>
  );
}

export default Router;