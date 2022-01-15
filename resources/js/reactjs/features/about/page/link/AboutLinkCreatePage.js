import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";

import { postData, selectData } from "../../AboutSlice";
import { useQuery } from "../../../../utils/router";
import ValidateConfig from "../../../../utils/validateConfig";
import SecondScreen from "../../../../common/screen/auth/SecondScreen";

import { IoIosArrowBack } from "react-icons/io";

const AboutLinkCreatePage = () => {
    const header = {
        leftBtn: true,
        leftBtnLink: "/about",
        leftBtnIcon: <IoIosArrowBack />,
        title: "Add Social Network",
        rightBtn: false,
        rightBtnLink: null,
        rightBtnIcon: null,
    };

    let query = useQuery();
    let id = query.get("id");

    const history = useHistory();
    const dispatch = useDispatch();
    const data = useSelector(selectData);

    let newSocialNetwork;

    if (_.isArray(data)) {
        data.map((item) => {
            if (item.id == id) {
                newSocialNetwork = item;
            }
        });
    }

    const validationSchema = Yup.object().shape({
        button_text: ValidateConfig.required,
        value: ValidateConfig.required,
    });

    return (
        <SecondScreen header={header}>
            {newSocialNetwork && (
                <div className="h-full w-full bg-gray-300 px-4 pt-4">
                    <div className="flex justify-center items-center bg-white p-4 mb-4 shadow-lg rounded">
                        <img
                            src={newSocialNetwork.path_icon_svg}
                            className="w-10"
                        />
                    </div>
                    <div className="bg-gray-200 p-4 mb-4 shadow-lg rounded">
                        <Formik
                            initialValues={{
                                social_network_id: id,
                                show_button_text: false,
                                button_text: newSocialNetwork.name,
                                value: "",
                            }}
                            validationSchema={validationSchema}
                            onSubmit={async (values) => {
                                await dispatch(postData(values));
                                history.push("/profile");
                            }}
                        >
                            {({ values, errors, touched }) => (
                                <Form>
                                    <div className="mb-2">
                                        <label className="flex items-center cursor-pointer">
                                            <h3 className="mr-3 text-gray-700 font-medium">
                                                Show Button With Text:
                                            </h3>
                                            <div className="relative">
                                                <Field
                                                    type="checkbox"
                                                    name="show_button_text"
                                                    className="sr-only"
                                                />
                                                <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>
                                                <div className="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
                                            </div>
                                        </label>
                                    </div>

                                    <div className="mb-4">
                                        <label>
                                            <Field
                                                type="text"
                                                name="button_text"
                                                className="w-full px-2 py-1 mb-2"
                                            />
                                            <ErrorMessage
                                                name="button_text"
                                                component="div"
                                                className="text-red-500 text-xs italic bg-red-200 px-2 py-1 rounded"
                                            />
                                        </label>
                                    </div>

                                    <div className="mb-4">
                                        <label>
                                            <h3>
                                                {newSocialNetwork.placeholder}
                                            </h3>
                                            <Field
                                                type="text"
                                                name="value"
                                                className="w-full px-2 py-1 mb-2"
                                                placeholder="Fill here"
                                            />
                                            <ErrorMessage
                                                name="value"
                                                component="div"
                                                className="text-red-500 text-xs italic bg-red-200 px-2 py-1 rounded"
                                            />
                                        </label>
                                    </div>
                                    <div className="flex justify-center">
                                        <button
                                            type="submit"
                                            className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-400 text-gray-800 hover:text-gray-700"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            )}
        </SecondScreen>
    );
};
export default AboutLinkCreatePage;
