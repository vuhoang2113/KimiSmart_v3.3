import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { useQuery } from "../../../../utils/router";
import ValidateConfig from "../../../../utils/validateConfig";
import { putData, deleteData } from "../../AboutSlice";
import { selectUser } from "../../../profile/profileSlice";

import SecondScreen from "../../../../common/screen/auth/SecondScreen";
import { BsFillTrashFill } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";

const AboutLinkEditPage = () => {
    const query = useQuery();
    const id = query.get("id");
    const type = query.get("type");

    const header = {
        leftBtn: true,
        leftBtnLink: "/about",
        leftBtnIcon: <IoIosArrowBack />,
        title: "Select Social Item",
        rightBtn: false,
        rightBtnLink: null,
        rightBtnIcon: null,
    };

    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    let socialLink = null;
    if (user && user.about && _.isArray(user.about)) {
        user.about.map((item) => {
            if (item.id == id) {
                socialLink = item;
            }
        });
    }

    const validationSchema = Yup.object().shape({
        button_text: ValidateConfig.required,
        value: ValidateConfig.required,
    });

    const deleteItem = () => {
        dispatch(deleteData(id)).then(() => {
            history.push("/profile");
        });
    };

    return (
        <SecondScreen header={header}>
            {socialLink && (
                <div className="h-full w-full bg-gray-200 px-4 pt-4">
                    <div className="flex justify-center items-center bg-white p-4 mb-4 shadow-lg rounded">
                        <img
                            src={socialLink?.social_network.path_icon_svg}
                            className="w-10"
                        />
                    </div>
                    <div>
                        <Formik
                            initialValues={{
                                id: id,
                                show_button_text:
                                    socialLink?.show_button_text || false,
                                button_text: socialLink?.button_text || "",
                                value: socialLink?.value || "",
                            }}
                            validationSchema={validationSchema}
                            onSubmit={async (values) => {
                                const payload = {
                                    id: values.id,
                                    data: {
                                        show_button_text:
                                            values.show_button_text,
                                        button_text: values.button_text,
                                        value: values.value,
                                    },
                                };
                                await dispatch(putData(payload));
                                history.push("/profile");
                            }}
                        >
                            {({ values, errors, touched }) => (
                                <Form>
                                    <div className="mb-2">
                                        <label className="flex items-center cursor-pointer">
                                            <div className="mr-3 text-gray-700 font-medium">
                                                Show Button With Text:
                                            </div>
                                            <div className="relative">
                                                <Field name="show_button_text">
                                                    {({
                                                        field,
                                                        form: {
                                                            touched,
                                                            errors,
                                                            values,
                                                        },
                                                        meta,
                                                    }) => (
                                                        <input
                                                            type="checkbox"
                                                            name="show_button_text"
                                                            className="sr-only"
                                                            value={
                                                                values.show_button_text
                                                            }
                                                            defaultChecked={
                                                                values.show_button_text
                                                                    ? true
                                                                    : false
                                                            }
                                                            onChange={() => {
                                                                values.show_button_text =
                                                                    !values.show_button_text;
                                                            }}
                                                        />
                                                    )}
                                                </Field>
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
                                                {
                                                    socialLink?.social_network
                                                        .placeholder
                                                }
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
            <div className="fixed bottom-2 right-2">
                <button
                    type="button"
                    className="bg-red-500 text-yellow-400 px-4 py-2 rounded hover:bg-red-700 hover:text-yellow-200 transform hover:scale-110"
                    onClick={deleteItem}
                >
                    <BsFillTrashFill />
                </button>
            </div>
        </SecondScreen>
    );
};
export default AboutLinkEditPage;
