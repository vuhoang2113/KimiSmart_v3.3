import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    putMe,
    uploadMyAvatar,
    uploadMyBackground,
    selectUser,
    selectUpdate,
    selectError,
} from "../../../profileSlice";

import { AiFillCamera } from "react-icons/ai";
import { FaCloudUploadAlt } from "react-icons/fa";
import { toast } from "react-toastify";

const Header = () => {
    const dispatch = useDispatch();
    const profileData = useSelector(selectUser);

    const [hoverAvatar, setHoverAvatar] = useState(false);

    const avatarSelectedHandler = (event) => {
        const fd = new FormData();
        fd.append("file", event.target.files[0], event.target.files[0].name);
        dispatch(uploadMyAvatar(fd));
    };

    const backgroundSelectedHandler = async (event) => {
        const fd = new FormData();
        fd.append("file", event.target.files[0], event.target.files[0].name);
        const res = await dispatch(uploadMyBackground(fd));
        if (res.payload.success === true) {
            toast.success(res.payload.message);
        } else {
            toast.error(res.payload.message);
        }
    };
    return (
        <div className="py-4 bg-gradient-to-t from-gray-500">
            {/* UPLOAD AVATAR */}
            <div className="mb-4 flex justify-center">
                <div
                    className="w-32 mb-4 rounded-full overflow-hidden relative"
                    onMouseOver={() => {
                        setHoverAvatar(true);
                    }}
                    onMouseLeave={() => {
                        setHoverAvatar(false);
                    }}
                >
                    <div className="aspect-w-1 aspect-h-1">
                        {/* BUTTON UPLOAD IMAGE */}
                        {hoverAvatar && (
                            <div className="flex justify-center items-center absolute inset-x-0 top-0 h-1/2 z-10">
                                <label className="w-full h-full flex flex-col items-center justify-center cursor-pointer bg-gray-500 bg-opacity-50 hover:bg-gray-600 hover:bg-opacity-50  hover:text-white">
                                    <FaCloudUploadAlt />
                                    <input
                                        type="file"
                                        className="hidden"
                                        value={
                                            profileData?.user?.profile_photo_url
                                        }
                                        onChange={avatarSelectedHandler}
                                    />
                                </label>
                            </div>
                        )}
                        {/* END BUTTON UPLOAD IMAGE */}
                        <img
                            src={profileData?.profile_photo_url}
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
            {/* END UPLOAD AVATAR */}
            {/* UPDATE BACHGROUND */}
            <div className="flex justify-center items-center">
                <div className="w-5/6 flex justify-end items-center">
                    <label>
                        <div className="px-2 py-1 flex justify-center items-center bg-gray-50 text-black opacity-80 rounded">
                            <span className="flex justify-center items-center mr-2">
                                <AiFillCamera size={24} />
                            </span>
                            <span className="flex justify-between items-center">
                                Edit Background
                            </span>
                        </div>
                        <input
                            type="file"
                            className="hidden"
                            value={profileData?.user?.background_url}
                            onChange={backgroundSelectedHandler}
                        />
                    </label>
                </div>
            </div>
            {/* ENDUPDATE BACHGROUND */}
        </div>
    );
};

export default Header;
