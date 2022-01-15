import { BiMailSend, BiPhoneCall } from "react-icons/bi";

const Head = ({ profileData }) => {
    return (
        <div className="">
            <div className="mb-4">
                <h2 className="text-center capitalize text-xl font-semibold">
                    {profileData?.name}
                </h2>
            </div>

            <div className="mb-4">
                <h3 className="text-center text-gray-500">
                    {profileData?.introduction}
                </h3>
            </div>
            <div className="flex justify-center">
                <div className="w-1/3 flex justify-between">
                    <div>
                        {profileData?.email && (
                            <a
                                target="_blank"
                                href={`mailto:${profileData?.email}`}
                                className="text-gray-600 hover:text-gray-400"
                            >
                                <BiMailSend size={30} />
                            </a>
                        )}
                    </div>
                    <div>
                        {profileData?.phone_number && (
                            <a
                                target="_blank"
                                href={`tel:${profileData?.phone_number}`}
                                className="text-gray-600 hover:text-gray-400"
                            >
                                <BiPhoneCall size={30} />
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Head;
