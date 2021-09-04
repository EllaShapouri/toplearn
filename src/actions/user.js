export const addUser = (user) => {
    return async (dispatch) => {
        await dispatch({ type: "SET_USER", payload: user });
    };
};

export const logoutUser = () => {
    return async (dispatch) => {
        await dispatch({ type: "CLEAR_USER", payload: {} });
    };
};
