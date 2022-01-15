import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import SecondScreen from "../../../common/screen/auth/SecondScreen";
import { AiFillPlusCircle } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";
import { BsBoxArrowRight } from "react-icons/bs";

import {
    fetchUser,
    selectUser,
    selectMessage,
} from "../../profile/profileSlice";
import { updateList } from "../AboutSlice";

const AboutPage = () => {
    const dispatch = useDispatch();
    const profileData = useSelector(selectUser);

    const header = {
        leftBtn: true,
        leftBtnLink: "/profile",
        leftBtnIcon: <IoIosArrowBack />,
        title: "About",
        rightBtn: true,
        rightBtnLink: "/about/link",
        rightBtnIcon: <AiFillPlusCircle />,
    };

    const reorder = (list, startIndex, endIndex) => {
        let result = _.cloneDeep(list);
        let start = _.find(result, (o) => {
            return o.order_number === startIndex;
        });

        let end = _.find(result, (o) => {
            return o.order_number === endIndex;
        });
        start.order_number = endIndex;
        end.order_number = startIndex;

        return result;
    };

    const onDragEnd = async (result) => {
        if (!result.destination) {
            return;
        }
        const items = reorder(
            profileData.about,
            result.source.index,
            result.destination.index
        );
        await dispatch(updateList(items));
        await dispatch(fetchUser());
    };

    return (
        <SecondScreen header={header}>
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="droppable">
                    {(provided, snapshot) => (
                        <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            className="h-4/5 overflow-auto mt-4 mb-4 px-4"
                        >
                            {profileData?.about.map((item, index) => {
                                return (
                                    <Draggable
                                        key={item.id}
                                        draggableId={`${item.id}`}
                                        index={index}
                                    >
                                        {(provided, snapshot) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                id={`social__${item.name}`}
                                                className="px-4 py-2 bg-gray-50 border rounded shadow-lg mb-4 hover:bg-gray-100 hover:text-green-800"
                                            >
                                                <NavLink
                                                    to={`/about/edit?id=${item.id}&type=${item?.social_network.name}`}
                                                    className="flex justify-between items-center"
                                                >
                                                    {item.social_network
                                                        .path_icon_svg && (
                                                        <div>
                                                            <img
                                                                src={
                                                                    item
                                                                        .social_network
                                                                        .path_icon_svg
                                                                }
                                                                className="w-8 h-auto"
                                                            />
                                                        </div>
                                                    )}
                                                    <div className="">
                                                        <h3 className="">
                                                            {item.value}
                                                        </h3>
                                                    </div>
                                                    <div>
                                                        <BsBoxArrowRight />
                                                    </div>
                                                </NavLink>
                                            </div>
                                        )}
                                    </Draggable>
                                );
                            })}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>

            <div className="flex justify-center">
                <NavLink to="/about/link">
                    <button
                        type="button"
                        className="w-40 flex justify-between items-center px-2 py-1 bg-blue-400 hover:bg-blue-500 text-gray-700 rounded"
                    >
                        <span>
                            <AiFillPlusCircle />
                        </span>
                        <span>Create new link</span>
                    </button>
                </NavLink>
            </div>
        </SecondScreen>
    );
};
export default AboutPage;
