import React, { useState } from "react";

import SecondScreen from "../../../common/screen/auth/SecondScreen";
import Header from "./components/edit/Header";
import UserInformation from "./components/edit/UserInformation";
import ChangePassword from "./components/edit/ChangePassword";

import { IoIosArrowBack } from "react-icons/io";

const ProfileEditPage = () => {
    const header = {
        leftBtn: true,
        leftBtnLink: "/profile",
        leftBtnIcon: <IoIosArrowBack />,
        title: "Edit Profile",
        rightBtn: false,
        rightBtnLink: null,
        rightBtnIcon: null,
    };

    return (
        <SecondScreen header={header}>
            <div className="h-full overflow-auto pb-8" id="page__profile">
                <Header />
                <div className="p-2">
                    <UserInformation />
                    <ChangePassword />
                </div>
            </div>
        </SecondScreen>
    );
};

export default ProfileEditPage;
