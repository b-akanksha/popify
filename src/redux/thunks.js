import { hideLoader, setAuthToken, showAlert, showLoader } from "./actions";
import { getAuth } from "./services";

export const getAuthThunk = () => {
    return async (dispatch) => {
        dispatch(showLoader());
        try {
            const response = await getAuth();
            if (response.status === 200) {
                dispatch(setAuthToken(response.data.access_token));
                dispatch(hideLoader())
            } else {
                dispatch(hideLoader())
                dispatch(showAlert('Authentication failed!'))
            }
        } catch (error) {
            dispatch(hideLoader())
            dispatch(showAlert('Authentication failed!'))
        }
    };
};