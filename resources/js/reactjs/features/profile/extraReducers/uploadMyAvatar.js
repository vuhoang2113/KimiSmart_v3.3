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
            uploadAvatar: {
                success: null,
                status_code: null,
                message: null,
                data: null,
            },
        },
    },
*/

export const uploadMyAvatarReducer = {
    pending: (state, action) => {
        state.componentStatus.update.processing = true;
        state.componentStatus.update.resolved = false;

        state.response.uploadAvatar.success = null;
        state.response.uploadAvatar.status_code = null;
        state.response.uploadAvatar.message = null;
        state.response.uploadAvatar.data = null;
    },
    fulfilled: (state, action) => {
        state.response.uploadAvatar.success = action.payload.success;
        state.response.uploadAvatar.status_code = action.payload.status_code;
        state.response.uploadAvatar.message = action.payload.message;
        state.response.uploadAvatar.data = action.payload.data;

        state.componentStatus.update.processing = false;
        if (action.payload.success == true) {
            state.response.user.data.profile_photo_url =
                action.payload.data.url;
            state.componentStatus.update.resolved = true;
        } else {
            state.componentStatus.update.resolved = false;
        }
    },
    rejected: (state, action) => {
        state.componentStatus.update.processing = false;
        state.componentStatus.update.resolved = false;

        state.response.uploadAvatar.success = null;
        state.response.uploadAvatar.status_code = null;
        state.response.uploadAvatar.message = null;
        state.response.uploadAvatar.data = null;
    },
};
