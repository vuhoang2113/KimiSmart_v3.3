import React from "react";
import { useSelector } from "react-redux";
import { Route } from "react-router-dom";

import RedirectLogin from "./RedirectLogin";
import { selectComponentStatusLoginResolved } from "../../features/auth/authSlice";

const AuthRoute = ({ component, ...rest }) => {
    const useAuth = () => {
        const loginResolved = useSelector(selectComponentStatusLoginResolved);
        return loginResolved;
    };

    let isAuth = useAuth();

    return (
        <>
            <Route {...rest} component={isAuth ? component : RedirectLogin} />
        </>
    );
};

export default AuthRoute;
