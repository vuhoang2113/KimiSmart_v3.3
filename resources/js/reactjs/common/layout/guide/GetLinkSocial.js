import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

import SecondHeading from "../../../components/Guide/SecondHeading";
import ThirdHeading from "../../../components/Guide/ThirdHeading";
import Paragraph from "../../../components/Guide/Paragraph";

import FacebookEN from "../../../../../images/guide/social-link/facebook/en/facebook-en.png";
import FacebookJP from "../../../../../images/guide/social-link/facebook/jp/facebook-jp.png";
import InstagramEN from "../../../../../images/guide/social-link/instagram/en/instagram-en.png";
import InstagramJP from "../../../../../images/guide/social-link/instagram/jp/instagram-jp.png";
import LineEN from "../../../../../images/guide/social-link/line/en/line-en.png";
import LineJP from "../../../../../images/guide/social-link/line/jp/line-jp.png";
import Telegram from "../../../../../images/guide/social-link/telegram/telegram.png";
import TiktokEN from "../../../../../images/guide/social-link/tiktok/en/tiktok-en.png";
import TiktokJP from "../../../../../images/guide/social-link/tiktok/jp/tiktok-jp.png";
import TwitterEN from "../../../../../images/guide/social-link/twitter/en/twitter-en.png";
import TwitterJP from "../../../../../images/guide/social-link/twitter/jp/twitter-jp.png";
import YoutubeEN from "../../../../../images/guide/social-link/youtube/en/youtube-en.png";
import YoutubeJP from "../../../../../images/guide/social-link/youtube/jp/youtube-jp.png";
import SkypeEN from "../../../../../images/guide/social-link/skype/en/skype-en.png";
import SkypeJP from "../../../../../images/guide/social-link/skype/jp/skype-jp.png";
import Website from "../../../../../images/guide/social-link/website/website.png";
import PinterestEN from "../../../../../images/guide/social-link/pinterest/en/pinterest-en.png";
import PinterestJP from "../../../../../images/guide/social-link/pinterest/jp/pinterest-jp.png";
import LinkedinEN from "../../../../../images/guide/social-link/linkedin/en/linkedin-en.png";
import LinkedinJP from "../../../../../images/guide/social-link/linkedin/jp/linkedin-jp.png";
import ZaloMomo from "../../../../../images/guide/social-link/zalo/zalo-momo.png";

const GetLinkSocial = () => {
    const { t, i18n } = useTranslation();
    const facebook = i18n.language == "en" ? FacebookEN : FacebookJP;
    const instagram = i18n.language == "en" ? InstagramEN : InstagramJP;
    const line = i18n.language == "en" ? LineEN : LineJP;
    const telegram = Telegram;
    const tiktok = i18n.language == "en" ? TiktokEN : TiktokJP;
    const twitter = i18n.language == "en" ? TwitterEN : TwitterJP;
    const youtube = i18n.language == "en" ? YoutubeEN : YoutubeJP;
    const skype = i18n.language == "en" ? SkypeEN : SkypeJP;
    const website = Website;
    const pinterest = i18n.language == "en" ? PinterestEN : PinterestJP;
    const linkedin = i18n.language == "en" ? LinkedinEN : LinkedinJP;
    const zaloMomo = ZaloMomo;

    return (
        <div id="get_link_social">
            <SecondHeading json="guide:get_link.title" />
            <div>
                <ThirdHeading json="guide:get_link.facebook.title" />
                <Paragraph json="guide:get_link.facebook.block.1" />
                <div className="mb-4 flex justify-center item-center">
                    <img className="" src={facebook} />
                </div>
            </div>
            <div>
                <ThirdHeading json="guide:get_link.instagram.title" />
                <Paragraph json="guide:get_link.instagram.block.1" />
                <div className="mb-4 flex justify-center item-center">
                    <img className="" src={instagram} />
                </div>
            </div>
            <div>
                <ThirdHeading json="guide:get_link.line.title" />
                <Paragraph json="guide:get_link.line.block.1" />
                <div className="mb-4 flex justify-center item-center">
                    <img className="" src={line} />
                </div>
            </div>
            <div>
                <ThirdHeading json="guide:get_link.telegram.title" />
                <Paragraph json="guide:get_link.telegram.block.1" />
                <div className="mb-4 flex justify-center item-center">
                    <img className="" src={telegram} />
                </div>
            </div>
            <div>
                <ThirdHeading json="guide:get_link.tiktok.title" />
                <Paragraph json="guide:get_link.tiktok.block.1" />
                <div className="mb-4 flex justify-center item-center">
                    <img className="" src={tiktok} />
                </div>
            </div>
            <div>
                <ThirdHeading json="guide:get_link.twitter.title" />
                <Paragraph json="guide:get_link.twitter.block.1" />
                <div className="mb-4 flex justify-center item-center">
                    <img className="" src={twitter} />
                </div>
            </div>
            <div>
                <ThirdHeading json="guide:get_link.youtube.title" />
                <Paragraph json="guide:get_link.youtube.block.1" />
                <div className="mb-4 flex justify-center item-center">
                    <img className="" src={youtube} />
                </div>
            </div>
            <div>
                <ThirdHeading json="guide:get_link.skype.title" />
                <Paragraph json="guide:get_link.skype.block.1" />
                <div className="mb-4 flex justify-center item-center">
                    <img className="" src={skype} />
                </div>
            </div>
            <div>
                <ThirdHeading json="guide:get_link.website.title" />
                <Paragraph json="guide:get_link.website.block.1" />
                <div className="mb-4 flex justify-center item-center">
                    <img className="" src={website} />
                </div>
            </div>
            <div>
                <ThirdHeading json="guide:get_link.pinterest.title" />
                <Paragraph json="guide:get_link.pinterest.block.1" />
                <div className="mb-4 flex justify-center item-center">
                    <img className="" src={pinterest} />
                </div>
            </div>
            <div>
                <ThirdHeading json="guide:get_link.linkedin.title" />
                <Paragraph json="guide:get_link.linkedin.block.1" />
                <div className="mb-4 flex justify-center item-center">
                    <img className="" src={linkedin} />
                </div>
            </div>
            <div>
                <ThirdHeading json="guide:get_link.zalo_momo.title" />
                <Paragraph json="guide:get_link.zalo_momo.block.1" />
                <div className="mb-4 flex justify-center item-center">
                    <img className="" src={zaloMomo} />
                </div>
            </div>
        </div>
    );
};

export default GetLinkSocial;
