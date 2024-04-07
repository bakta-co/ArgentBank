import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getInfoUser } from "../redux/reducers/userSlice";
import User from "./pages/user";

const PrivateRoute = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getInfoUser());
    }, [dispatch]);

    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);



    return isAuthenticated ? <User /> : <Navigate to="/login" />;
};

export default PrivateRoute;
