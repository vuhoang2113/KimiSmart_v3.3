/*
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
*/

export const changePasswordReducer = {
    pending: (state, action) => {
        // state.componentStatus.login.processing = true;
        // state.componentStatus.login.resolved = false;
        state.response.changePassword.success = null;
        state.response.changePassword.status_code = null;
        state.response.changePassword.message = null;
        state.response.changePassword.data = null;
    },
    fulfilled: (state, action) => {
        state.response.changePassword.success = action.payload.success;
        state.response.changePassword.status_code = action.payload.status_code;
        state.response.changePassword.message = action.payload.message;
        state.response.changePassword.data = null;
    },
    rejected: (state, action) => {
        state.response.changePassword.success =
            action.payload?.data.success || false;
        state.response.changePassword.status_code =
            action.payload?.data.status_code || null;
        state.response.changePassword.message =
            action.payload?.data.message || null;
        state.response.changePassword.data = action.payload?.data.data || null;
    },
};
