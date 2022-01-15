import LocalStorageService from "../../../app/localStorageService";

/*

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
*/

export const fetchLogoutReducer = {
    pending: (state, action) => {
        // state.componentStatus.login.processing = true;
        // state.componentStatus.login.resolved = false;
        // state.response.success = null;
        // state.response.status_code = null;
        // state.response.message = null;
        // state.response.data.user = null;
        // state.response.data.token = null;
    },
    fulfilled: (state, action) => {
        // state.response.success = action.payload.success;
        // state.response.status_code = action.payload.status_code;
        // state.response.message = action.payload.message;
        state.response.auth.data.user = null;
        state.response.auth.data.token = null;

        // state.componentStatus.login.processing = false;

        // if (action.payload.success == true) {
        //     state.componentStatus.login.resolved = true;
        //     LocalStorageService.setToken(action.payload.data.token);
        // } else {
        //     state.componentStatus.login.resolved = false;
        // }
    },
    rejected: (state, action) => {
        state.response.auth.success = action.payload?.data.success || false;
        state.response.auth.status_code =
            action.payload?.data.status_code || null;
        state.response.auth.message = action.payload?.data.message || null;
        // state.response.data.user = action.payload.data.data.user;
        // state.response.data.token = action.payload.data.data.token;
    },
};
