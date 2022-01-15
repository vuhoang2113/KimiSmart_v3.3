import { createSlice } from "@reduxjs/toolkit";

import LocalStorageService from "../../app/localStorageService";

import { fetchLogin } from "./thunk/fetchLogin";
export { fetchLogin } from "./thunk/fetchLogin";
import { fetchLogout } from "./thunk/fetchLogout";
export { fetchLogout } from "./thunk/fetchLogout";
import { postChangePassword } from "./thunk/postChangePassword";
export { postChangePassword } from "./thunk/postChangePassword";

import { fetchLoginReducer } from "./extraReducers/fetchLogin";
import { fetchLogoutReducer } from "./extraReducers/fetchLogout";
import { changePasswordReducer } from "./extraReducers/changePassword";

const deleteLocalStorage = () => {
    LocalStorageService.deleteToken();
    LocalStorageService.deletePersistAuth();
    LocalStorageService.deletePersistProfile();
};

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        componentStatus: {
            login: {
                processing: false,
                resolved: false,
            },
        },
        response: {
            auth: {
                success: null,
                status_code: null,
                message: null,
                data: {
                    user: null,
                    token: null,
                },
            },
            changePassword: {
                success: null,
                status_code: null,
                message: null,
                data: null,
            },
        },
    },
    reducers: {
        deleteMessage(state) {
            state.response.message = null;
        },
        logout(state) {
            state.componentStatus.login.processing = false;
            state.componentStatus.login.resolved = false;
            state.response.auth.data.user = null;
            state.response.auth.data.token = null;
            deleteLocalStorage();
        },
    },
    extraReducers(builder) {
        /* Fetch Login */
        builder
            .addCase(fetchLogin.pending, fetchLoginReducer.pending)
            .addCase(fetchLogin.fulfilled, fetchLoginReducer.fulfilled)
            .addCase(fetchLogin.rejected, fetchLoginReducer.rejected);
        /* Fetch Logout */
        builder
            .addCase(fetchLogout.pending, fetchLogoutReducer.rejected)
            .addCase(fetchLogout.fulfilled, fetchLogoutReducer.fulfilled)
            .addCase(fetchLogout.rejected, fetchLogoutReducer.rejected);

        /* Change Password */
        builder
            .addCase(postChangePassword.pending, changePasswordReducer.pending)
            .addCase(
                postChangePassword.fulfilled,
                changePasswordReducer.fulfilled
            )
            .addCase(
                postChangePassword.rejected,
                changePasswordReducer.rejected
            );
    },
});
/* Action */
export const authActions = authSlice.actions;

/* Selectors */
export const selectStateAuth = (state) => state.auth;

export const selectComponentStatusLoginProcessing = (state) =>
    state.auth?.componentStatus.login.processing || null;
export const selectComponentStatusLoginResolved = (state) =>
    state.auth?.componentStatus.login.resolved || null;

export const selectSuccess = (state) =>
    state.auth?.response.auth.success || null;
export const selectStatusCode = (state) =>
    state.auth?.response.auth.status_code || null;
export const selectMessage = (state) =>
    state.auth?.response.auth.message || null;
export const selectAuthUser = (state) =>
    state.auth?.response.auth.data.user || null;
export const selectToken = (state) =>
    state.auth?.response.auth.data.token || null;

/* Reducer */
const authReducer = authSlice.reducer;
export default authReducer;
