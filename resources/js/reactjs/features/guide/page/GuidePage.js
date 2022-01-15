import React, { useEffect, useRef } from "react";

import { SwitchLanguage } from "../../../components/Button/SwitchLanguage";
import FirstScreen from "../../../common/screen/auth/FirstScreen";

import FirstHeading from "../../../components/Guide/FirstHeading";
import Paragraph from "../../../components/Guide/Paragraph";

import QACode from "../../../../../images/guide/QRCode.png";

import Step from "../../../common/layout/guide/Step";
import GetLinkSocial from "../../../common/layout/guide/GetLinkSocial";
import GoToTop from "../../../components/Button/GoToTop";

const GuidePage = () => {
    return (
        <FirstScreen>
            <div
                className="w-full h-full overflow-auto pb-16"
                id="page__guide"
                style={{ scrollBehavior: "smooth" }}
            >
                <div id="top"></div>
                <div className="px-6 pt-4 z-10">
                    <div className="relative bg-white rounded-sm px-4 pt-16 pb-4 ">
                        <div className="absolute top-2 right-2">
                            <SwitchLanguage />
                        </div>
                        <div>
                            <div>
                                <div className="mb-8">
                                    <FirstHeading json="guide:title" />
                                </div>
                                <Paragraph json="guide:description.block.1" />
                                <Paragraph json="guide:description.block.2" />
                                <div className="mb-4 flex justify-center item-center">
                                    <img className="" src={QACode} />
                                </div>
                            </div>
                            <div>
                                <Step />
                            </div>
                            <div>
                                <GetLinkSocial />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <GoToTop />
        </FirstScreen>
    );
};

export default GuidePage;
