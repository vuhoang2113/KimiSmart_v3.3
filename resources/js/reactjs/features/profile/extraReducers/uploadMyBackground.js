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

export const uploadMyBackgroundReducer = {
    pending: (state, action) => {
        state.componentStatus.update.processing = true;
        state.componentStatus.update.resolved = false;

        state.response.uploadBackground.success = null;
        state.response.uploadBackground.status_code = null;
        state.response.uploadBackground.message = null;
        state.response.uploadBackground.data = null;
    },
    fulfilled: (state, action) => {
        state.response.uploadBackground.success = action.payload.success;
        state.response.uploadBackground.status_code =
            action.payload.status_code;
        state.response.uploadBackground.message = action.payload.message;
        state.response.uploadBackground.data = action.payload.data;

        state.componentStatus.update.processing = false;
        if (action.payload.success == true) {
            state.response.user.data.background_url = action.payload.data.url;
            state.componentStatus.update.resolved = true;
        } else {
            state.componentStatus.update.resolved = false;
        }
    },
    rejected: (state, action) => {
        state.componentStatus.update.processing = false;
        state.componentStatus.update.resolved = false;

        state.response.uploadBackground.success = null;
        state.response.uploadBackground.status_code = null;
        state.response.uploadBackground.message = null;
        state.response.uploadBackground.data = null;
    },
};
