import { BsBoxArrowRight } from "react-icons/bs";
import { NavLink } from "react-router-dom";

import "../../style/boxProfile.css";

const ListSecondDisplay = ({ profileData }) => {
    return (
        <div className="box-profile flex flex-wrap overflow-auto">
            {_.isArray(profileData?.about) &&
                profileData?.about.map((item, index) => {
                    return (
                        <div key={index} className="w-1/2 p-2">
                            <div className="aspect-w-1 aspect-h-1">
                                <a
                                    href={`${item.social_network.href}${item.value}`}
                                    className="p-1 rounded-lg transform hover:scale-105"
                                >
                                    <div className="flex justify-center items-center mb-2">
                                        <div className="w-16">
                                            <div className="aspect-w-1 aspect-h-1">
                                                <img
                                                    src={
                                                        item.social_network
                                                            .path_icon_svg
                                                    }
                                                    className=""
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-center text-green-800 text-base">
                                            {item.show_button_text == true
                                                ? item.button_text
                                                : item.value}
                                        </h3>
                                    </div>
                                </a>
                            </div>
                        </div>
                    );
                })}
        </div>
    );
};

export default ListSecondDisplay;
