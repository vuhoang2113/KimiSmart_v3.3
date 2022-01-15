/*
    initialState: {
        componentStatus: {
            register: {
                processing: false,
                resolved: false,
            },
        },
        response: {
            success: null,
            status_code: null,
            message: null,
            data: null,
        },
    },
*/

export const fetchRegisterReduce = {
    pending: (state, action) => {
        state.componentStatus.register.processing = true;
        state.componentStatus.register.resolved = false;

        state.response.success = null;
        state.response.status_code = null;
        state.response.message = null;
        state.response.data = null;
    },
    fulfilled: (state, action) => {
        state.response.success = action.payload.success;
        state.response.status_code = action.payload.status_code;
        state.response.message = action.payload.message;
        state.response.data = action.payload.data;

        state.componentStatus.register.processing = true;

        if (action.payload.success == true) {
            state.componentStatus.register.resolved = true;
        } else {
            state.componentStatus.register.resolved = false;
        }
    },
    rejected: (state, action) => {
        state.componentStatus.register.processing = false;
        state.componentStatus.register.resolved = false;

        state.response.success = action.payload.success || false;
        state.response.status_code =
            action.payload.status_code || action.payload.status;
        state.response.message =
            action.payload.message || action.payload.data.message;
        state.response.data = action.payload.data || action.payload.data.errors;
    },
};
