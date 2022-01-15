/*
    initialState: {
        componentStatus: {
            update: {
                processing: false,
                resolved: false,
            },
        },
        response: {
            user: {
                success: null,
                status_code: null,
                message: null,
                data: null,
            },
            uploadAvatar: {
                success: null,
                status_code: null,
                message: null,
                data: null,
            },
            uploadBackground: {
                success: null,
                status_code: null,
                message: null,
                data: null,
            },
        },
    },
*/

export const fetchUserReducer = {
    pending: (state, action) => {
        state.componentStatus.update.processing = true;
        state.componentStatus.update.resolved = false;

        state.response.user.success = null;
        state.response.user.status_code = null;
        state.response.user.message = null;
        state.response.user.data = null;
    },
    fulfilled: (state, action) => {
        state.response.user.success = action.payload.success;
        state.response.user.status_code = action.payload.status_code;
        state.response.user.message = action.payload.message;
        state.response.user.data = action.payload.data;
    },
    rejected: (state, action) => {
        state.response.user.success = action.payload?.success;
        state.response.user.status_code = action.payload?.status_code;
        state.response.user.message = action.payload?.message;
        state.response.user.data = action.payload?.data;
    },
};
