import { BsBoxArrowRight } from "react-icons/bs";

import "../../style/boxProfile.css";

const List = ({ profileData }) => {
    return (
        <div className="box-profile pb-16 overflow-auto">
            {_.isArray(profileData?.about) &&
                profileData?.about.map((item, index) => {
                    return (
                        <div
                            key={index}
                            id={`social__${item.name}`}
                            className="px-4 py-2 bg-gray-50 border rounded shadow-lg mb-4 hover:bg-gray-100 hover:text-green-800"
                        >
                            <a
                                target="_blank"
                                href={`${item.social_network.href}${item.value}`}
                                className="flex justify-between items-center"
                            >
                                {item.social_network.path_icon_svg && (
                                    <div>
                                        <img
                                            src={
                                                item.social_network
                                                    .path_icon_svg
                                            }
                                            className="w-8 h-auto"
                                        />
                                    </div>
                                )}
                                <div className="">
                                    <h3 className="">
                                        {item.show_button_text == true
                                            ? item.button_text
                                            : item.value}
                                    </h3>
                                </div>
                                <div>
                                    <BsBoxArrowRight />
                                </div>
                            </a>
                        </div>
                    );
                })}
        </div>
    );
};

export default List;
