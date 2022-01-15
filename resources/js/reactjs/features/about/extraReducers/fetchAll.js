/*
    initialState: {
        componentStatus: {},
        response: {
            success: null,
            status_code: null,
            message: null,
            data: null,
        },
    },
*/

export const fetchAllReducer = {
    pending: (state, action) => {
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
    },
    rejected: (state, action) => {
        state.response.success = null;
        state.response.status_code = null;
        state.response.message = null;
        state.response.data = null;
    },
};
