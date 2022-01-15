import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../features/profile/profileSlice";
import nightSky from "../../../../images/bg/night-sky.jpeg";

const BackgroundMain = ({ className }) => {
    const profileData = useSelector(selectUser);
    const pathBg = profileData?.background_url || nightSky;
    return (
        <>
            <img className={`${className}`} src={pathBg} alt="" />
        </>
    );
};

export default BackgroundMain;
