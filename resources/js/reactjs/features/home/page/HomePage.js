import React, { useEffect } from "react";
import LogoImage from "../../../components/LogoImage";
import FirstScreen from "../../../common/screen/auth/FirstScreen";

const HomePage = () => {
    return (
        <FirstScreen>
            <div className="w-full h-full" id="page__home">
                <div className="w-full h-full flex justify-center items-center px-8">
                    <LogoImage />
                </div>
            </div>
        </FirstScreen>
    );
};

export default HomePage;
