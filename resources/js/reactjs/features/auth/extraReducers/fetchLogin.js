import LocalStorageService from "../../../app/localStorageService";
/*
        componentStatus: {
            login: {
                processing: false,
                resolved: false,
            },
        },
        response.auth: {
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
*/
export const fetchLoginReducer = {
    pending: (state, action) => {
        state.componentStatus.login.processing = true;
        state.componentStatus.login.resolved = false;

        state.response.auth.success = null;
        state.response.auth.status_code = null;
        state.response.auth.message = null;
        state.response.auth.data.user = null;
        state.response.auth.data.token = null;
    },
    fulfilled: (state, action) => {
        state.response.auth.success = action.payload.success;
        state.response.auth.status_code = action.payload.status_code;
        state.response.auth.message = action.payload.message;
        state.response.auth.data.user = action.payload.data.user;
        state.response.auth.data.token = action.payload.data.token;

        state.componentStatus.login.processing = false;

        if (action.payload.success == true) {
            state.componentStatus.login.resolved = true;
            LocalStorageService.setToken(action.payload.data.token);
        } else {
            state.componentStatus.login.resolved = false;
        }
    },
    rejected: (state, action) => {
        state.response.auth.success = action.payload.data.success;
        state.response.auth.status_code = action.payload.data.status_code;
        state.response.auth.message = action.payload.data.message;
        state.response.auth.data.user = action.payload.data.data.user;
        state.response.auth.data.token = action.payload.data.data.token;
    },
};
