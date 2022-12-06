import { setAuthToken, showAlert } from "./actions";
import { getAuth } from "./services";

export const getAuthThunk = () => {
    return async (dispatch) => {
        try {
            const response = await getAuth();
            if (response.status === 200) {
                dispatch(setAuthToken(response.data.access_token));
            } else {
                dispatch(showAlert('Authentication failed!'))
            }
        } catch (error) {
            dispatch(showAlert('Authentication failed!'))
        }
    };
};