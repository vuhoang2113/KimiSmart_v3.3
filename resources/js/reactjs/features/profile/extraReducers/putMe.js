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

export const putMeReducer = {
    pending: (state, action) => {
        state.componentStatus.update.updating = true;
        state.componentStatus.update.updated = false;

        state.response.user.success = null;
        state.response.user.status_code = null;
        state.response.user.message = null;
        state.response.user.data = null;
    },
    fulfilled: (state, action) => {
        state.response.user.success = action.payload.success;
        state.response.user.status_code = action.payload.success.status_code;
        state.response.user.message = action.payload.success.message;
        state.response.user.data = action.payload.data;

        if (action.payload.success == true) {
            state.componentStatus.update.updating = false;
            state.componentStatus.update.updated = true;
        } else {
            state.componentStatus.update.updating = false;
            state.componentStatus.update.updated = false;
        }
    },
    rejected: (state, action) => {
        state.componentStatus.update.updating = false;
        state.componentStatus.update.updated = false;

        state.response.user.success = action.payload.success;
        state.response.user.status_code = action.payload.success.status_code;
        state.response.user.message = action.payload.success.message;
        state.response.user.data = action.payload.data;
    },
};
