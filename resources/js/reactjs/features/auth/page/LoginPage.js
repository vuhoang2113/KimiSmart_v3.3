import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import ValidateConfig from "../../../utils/validateConfig";
import {
    fetchLogin,
    selectComponentStatusLoginResolved,
    selectMessage,
    authActions,
} from "../authSlice";

import { fetchUser } from "../../profile/profileSlice";
import { fetchAll } from "../../about/AboutSlice";
import { toast } from "react-toastify";

import FirstScreen from "../../../common/screen/guest/FirstScreen";

const LoginPage = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const loginResolved = useSelector(selectComponentStatusLoginResolved);
    const message = useSelector(selectMessage);
    useEffect(async () => {
        if (loginResolved === true) {
            const resultAll = await dispatch(fetchAll());
            const resultUser = await dispatch(fetchUser());
            if (
                resultAll.payload.success === true &&
                resultUser.payload.success === true
            ) {
                history.push("/");
            }
        } else {
            if (message !== null) {
                toast.error(message);
                dispatch(authActions.deleteMessage());
            }
        }
    }, [loginResolved]);

    useEffect(async () => {
        if (loginResolved === false) {
            if (message !== null) {
                toast.error(message);
                dispatch(authActions.deleteMessage());
            }
        }
    }, [message]);

    const LoginSchema = Yup.object().shape({
        email: ValidateConfig.email,
        password: ValidateConfig.password,
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
                            }}
                            validationSchema={LoginSchema}
                            onSubmit={(values) => {
                                dispatch(fetchLogin(values));
                            }}
                            className="mb-2"
                        >
                            {({ errors, touched }) => (
                                <>
                                    <Form>
                                        <h2 className="text-3xl text-center text-gray-800 mb-6">
                                            Login
                                        </h2>
                                        <div className="">
                                            <div className="mb-4">
                                                <label>
                                                    <div>
                                                        <h3 className="mb-4 text-xl">
                                                            Username :{" "}
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
                                            <div className="mb-8">
                                                <label>
                                                    <div>
                                                        <h3 className="mb-4 text-xl">
                                                            Password :{" "}
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
                                            <div className="mb-6">
                                                <button
                                                    type="submit"
                                                    className="w-full px-4 py-2 rounded-xl bg-gray-900 text-white hover:bg-gray-800"
                                                >
                                                    Login
                                                </button>
                                            </div>
                                        </div>
                                    </Form>
                                </>
                            )}
                        </Formik>
                        <div className="flex justify-end">
                            <NavLink to="/register">
                                <button
                                    type="button"
                                    className="text-center underline text-black hover:text-gray-900"
                                >
                                    Register ?
                                </button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </FirstScreen>
    );
};

export default LoginPage;
