import React, { useEffect } from "react";
import { fetchLogout, authActions } from "../../auth/authSlice";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
const LogoutPage = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    useEffect(async () => {
        await dispatch(fetchLogout());
        await dispatch(authActions.logout());
        history.push("/login");
    });

    return <></>;
};
export default LogoutPage;
