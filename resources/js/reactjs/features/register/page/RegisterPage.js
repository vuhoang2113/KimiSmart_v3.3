import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchRegister,
    selectComponentStatusRegisterResolved,
    selectComponentStatusRegisterProcessing,
    selectMessage,
    selectData,
    registerActions,
} from "../registerSlice";

import { NavLink, useHistory } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import ValidateConfig from "../../../utils/validateConfig";

import FirstScreen from "../../../common/screen/guest/FirstScreen";
import { toast } from "react-toastify";

const RegisterPage = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const registerSolvedStatus = useSelector(
        selectComponentStatusRegisterResolved
    );
    const registerProcessingStatus = useSelector(
        selectComponentStatusRegisterProcessing
    );
    const message = useSelector(selectMessage);
    const data = useSelector(selectData);

    useEffect(() => {
        if (registerSolvedStatus === false) {
            if (message !== null) {
                if (data.errors) {
                    _.values(data.errors).map((msgErr) => {
                        toast.error(msgErr[0]);
                    });
                }
                dispatch(registerActions.deleteMessage());
            }
        } else {
            if (registerSolvedStatus === true) {
                if (message !== null) {
                    toast.success(message);
                    dispatch(registerActions.deleteMessage());
                    history.push("/login");
                }
            }
        }
    }, [message]);

    const RegisterSchema = Yup.object().shape({
        email: ValidateConfig.email,
        password: ValidateConfig.password,
        name: ValidateConfig.name,
        uid: ValidateConfig.uid,
    });

    return (
        <FirstScreen>
            <div id="page__login" className="h-full w-full">
                <div className="fixed inset-x-0 top-1/4 flex justify-center items-center">
                    <div className="px-4 py-6 bg-gray-500 bg-opacity-90 rounded-lg">
                        <Formik
                            initialValues={{
                                email: "",
                                password: "",
                                confirmPassword: "",
                                name: "",
                                uid: "",
                            }}
                            validationSchema={RegisterSchema}
                            onSubmit={(values) => {
                                dispatch(fetchRegister(values));
                            }}
                            className="mb-2"
                        >
                            {({ errors, touched }) => (
                                <>
                                    <Form>
                                        <h2 className="text-3xl text-center text-gray-800 mb-6">
                                            Register
                                        </h2>
                                        <div>
                                            <div className="mb-4">
                                                <div>
                                                    <label>
                                                        <div>
                                                            <h3 className="text-base mb-2">
                                                                Email :
                                                            </h3>
                                                            <Field
                                                                type="email"
                                                                name="email"
                                                                className="px-2 py-2 mb-2"
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
                                                                Password :
                                                            </h3>
                                                            <Field
                                                                type="password"
                                                                name="password"
                                                                className="px-2 py-2 mb-2"
                                                            />
                                                            <div>
                                                                <ErrorMessage
                                                                    name="password"
                                                                    component="div"
                                                                    className="text-red-500 text-xs italic bg-red-200 px-2 py-1 rounded"
                                                                />
                                                            </div>
                                                        </div>
                                                    </label>
                                                </div>
                                                <div>
                                                    <label>
                                                        <div>
                                                            <h3 className="text-base mb-2">
                                                                Name :
                                                            </h3>
                                                            <Field
                                                                type="text"
                                                                name="name"
                                                                className="px-2 py-2 mb-2"
                                                            />
                                                            <div>
                                                                <ErrorMessage
                                                                    name="name"
                                                                    component="div"
                                                                    className="text-red-500 text-xs italic bg-red-200 px-2 py-1 rounded"
                                                                />
                                                            </div>
                                                        </div>
                                                    </label>
                                                </div>
                                                <div>
                                                    <label>
                                                        <div>
                                                            <h3 className="text-base mb-2">
                                                                KIMI Number :
                                                            </h3>
                                                            <Field
                                                                type="text"
                                                                name="uid"
                                                                className="px-2 py-2 mb-2"
                                                            />
                                                            <div>
                                                                <ErrorMessage
                                                                    name="uid"
                                                                    component="div"
                                                                    className="text-red-500 text-xs italic bg-red-200 px-2 py-1 rounded"
                                                                />
                                                            </div>
                                                        </div>
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="mb-6">
                                                <button
                                                    type="submit"
                                                    className="w-full px-4 py-2 rounded-xl bg-gray-900 text-white hover:bg-gray-800"
                                                >
                                                    Register
                                                </button>
                                            </div>
                                        </div>
                                    </Form>
                                </>
                            )}
                        </Formik>
                        <div className="flex justify-end">
                            <NavLink to="/login">
                                <button
                                    type="button"
                                    className="text-center underline text-black hover:text-gray-900"
                                >
                                    Login ?
                                </button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </FirstScreen>
    );
};

export default RegisterPage;
