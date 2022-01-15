import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

import { postChangePassword } from "../../../../auth/authSlice";
import ValidateConfig from "../../../../../utils/validateConfig";

const validationSchema = Yup.object().shape({
    current_password: ValidateConfig.password,
    new_password: ValidateConfig.password,
});

const ChangePassword = () => {
    const dispatch = useDispatch();
    return (
        <div className="bg-gradient-to-r from-gray-400 to-gray-200 px-6 py-4 mb-4 rounded shadow">
            <Formik
                initialValues={{
                    current_password: "",
                    new_password: "",
                }}
                validationSchema={validationSchema}
                onSubmit={async (values) => {
                    const result = await dispatch(postChangePassword(values));
                    if (result.payload.success === true) {
                        toast.success(result.payload.message);
                    } else {
                        toast.error(result.payload.message);
                    }
                }}
            >
                {({ errors, touched }) => (
                    <Form>
                        <div>
                            <label>
                                <div>
                                    <h3 className="text-base mb-2">
                                        Current Password
                                    </h3>
                                    <Field
                                        type="password"
                                        name="current_password"
                                        className="w-full px-2 py-2 mb-2"
                                    />
                                    <ErrorMessage
                                        name="current_password"
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
                                        New Password
                                    </h3>
                                    <Field
                                        type="password"
                                        name="new_password"
                                        className="w-full px-2 py-2 mb-2"
                                    />
                                    <ErrorMessage
                                        name="new_password"
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
export default ChangePassword;
