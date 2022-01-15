import React from "react";
import { useSelector } from "react-redux";
import { Route } from "react-router-dom";

import { selectComponentStatusLoginResolved } from "../../features/auth/authSlice";

const PrivateRoute = ({ component, ...rest }) => {
    const useAuth = () => {
        const loginResolved = useSelector(selectComponentStatusLoginResolved);
        return loginResolved;
    };

    const isAuth = useAuth();

    return <Route {...rest} component={!isAuth ? component : <></>} />;
};

export default PrivateRoute;
