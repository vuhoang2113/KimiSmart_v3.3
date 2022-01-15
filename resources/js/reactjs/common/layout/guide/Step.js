import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

import SecondHeading from "../../../components/Guide/SecondHeading";
import Paragraph from "../../../components/Guide/Paragraph";

import Step1RegisterEN from "../../../../../images/guide/step/step1/en/register-en.png";
import Step1RegisterJP from "../../../../../images/guide/step/step1/jp/register-jp.png";
import Step1LoginEN from "../../../../../images/guide/step/step1/en/login-en.png";
import Step1LoginJP from "../../../../../images/guide/step/step1/jp/login-jp.png";
import Step2EditProfileEN from "../../../../../images/guide/step/step2/en/edit-profile-en.png";
import Step2EditProfileJP from "../../../../../images/guide/step/step2/jp/edit-profile-jp.png";
import Step3EditLinkEN from "../../../../../images/guide/step/step3/en/edit-link-en.png";
import Step3EditLinkJP from "../../../../../images/guide/step/step3/jp/edit-link-jp.png";

const Step = () => {
    const { t, i18n } = useTranslation();
    const Step1Register =
        i18n.language == "en" ? Step1RegisterEN : Step1RegisterJP;
    const Step1Login = i18n.language == "en" ? Step1LoginEN : Step1LoginJP;
    const Step2EditProfile =
        i18n.language == "en" ? Step2EditProfileEN : Step2EditProfileJP;
    const Step3EditLink =
        i18n.language == "en" ? Step3EditLinkEN : Step3EditLinkJP;

    return (
        <div id="step">
            <div>
                <SecondHeading json="guide:step.1.title" />
                <Paragraph json="guide:step.1.block.1" />
                <div className="mb-4 flex justify-center item-center">
                    <img className="" src={Step1Register} />
                </div>
                <Paragraph json="guide:step.1.block.2" />
                <Paragraph json="guide:step.1.block.3" />
                <div className="mb-4 flex justify-center item-center">
                    <img className="" src={Step1Login} />
                </div>
            </div>
            <div>
                <SecondHeading json="guide:step.2.title" />
                <div className="mb-4 flex justify-center item-center">
                    <img className="" src={Step2EditProfile} />
                </div>
            </div>
            <div>
                <SecondHeading json="guide:step.3.title" />
                <Paragraph json="guide:step.3.block.1" />
                <div className="mb-4 flex justify-center item-center">
                    <img className="" src={Step3EditLink} />
                </div>
            </div>
        </div>
    );
};

export default Step;
