import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import ValidateConfig from "../../../../../utils/validateConfig";
import { toast } from "react-toastify";
import { response } from "../../../../../common/message/response";
import {
    putMe,
    selectUser,
    selectUpdate,
    selectError,
} from "../../../profileSlice";

const UserInformation = () => {
    const dispatch = useDispatch();
    const profileData = useSelector(selectUser);

    const validationSchema = Yup.object().shape({
        name: ValidateConfig.name,
        introduction: ValidateConfig.introduction,
        email: ValidateConfig.email,
        phone_number: ValidateConfig.phone_number,
    });

    return (
        <div className="bg-gradient-to-r from-gray-400 to-gray-200 px-6 py-4 mb-4 rounded shadow">
            <Formik
                initialValues={{
                    name: profileData?.name || "",
                    introduction: profileData?.introduction || "",
                    email: profileData?.email || "",
                    phone_number: profileData?.phone_number || "",
                }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    dispatch(putMe(values));
                    toast.success(response.success);
                }}
            >
                {({ errors, touched }) => (
                    <Form>
                        <div>
                            <label>
                                <div>
                                    <h3 className="text-base mb-2">Name</h3>
                                    <Field
                                        type="text"
                                        name="name"
                                        className="w-full px-2 py-2 mb-2 rounded"
                                    />
                                    <ErrorMessage
                                        name="name"
                                        component="div"
                                        className="text-red-500 text-xs italic bg-red-200 px-2 py-1 rounded"
                                    />
                                </div>
                            </label>
                        </div>
                        <div>
                            <label>
                                <div>
                                    <h3 className="text-base mb-2">
                                        Introduction
                                    </h3>
                                    <Field
                                        type="text"
                                        name="introduction"
                                        className="w-full px-2 py-2 mb-2 rounded"
                                    />
                                    <ErrorMessage
                                        name="introduction"
                                        component="div"
                                        className="text-red-500 text-xs italic bg-red-200 px-2 py-1 rounded"
                                    />
                                </div>
                            </label>
                        </div>
                        <div>
                            <label>
                                <div>
                                    <h3 className="text-base mb-2">Email</h3>
                                    <Field
                                        type="text"
                                        name="email"
                                        className="w-full px-2 py-2 mb-2 rounded"
                                    />
                                    <ErrorMessage
                                        name="email"
                                        component="div"
                                        className="text-red-500 text-xs italic bg-red-200 px-2 py-1 rounded"
                                    />
                                </div>
                            </label>
                        </div>
                        <div>
                            <label>
                                <div>
                                    <h3 className="text-base mb-2">
                                        Phone Number
                                    </h3>
                                    <Field
                                        type="text"
                                        name="phone_number"
                                        className="w-full px-2 py-2 mb-2 rounded"
                                    />
                                    <ErrorMessage
                                        name="phone_number"
                                        component="div"
                                        className="text-red-500 text-xs italic bg-red-200 px-2 py-1 rounded"
                                    />
                                </div>
                            </label>
                        </div>

                        <div className="flex justify-center mb-4">
                            <button
                                type="submit"
                                className="px-4 py-2 rounded-xl bg-gray-900 text-white hover:bg-gray-800"
                            >
                                Save
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};
export default UserInformation;
