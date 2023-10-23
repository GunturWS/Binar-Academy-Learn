import axios from "axios";
import { setIsLoggedIn, setToken, setUser } from "../reducers/authReducer";

export const getMe = { navigate, navigatePathSuccess, navigatePathError} => async (dispatch, getState) => {
    try{
        const token = getState().auth;
        if (!token) return;

        const response = await axios.get(
            `${import.meta.env.VITE_API_URL}/api/v1/auth/me`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        )
        
        const { data } = response.data;
        dispatch(setUser(data));


        if (navigatePathSuccess) navigate(navigatePathSuccess);
    } catch (error) {
        if (axios.isAxiosError(error)) {
            if (error.response.status === 401) {
                dispatch(setUser(null));
                dispatch(setIsLoggedIn(false));
                dispatch(setToken(null));


                if (navigatePathError) navigate(navigatePathError)
                return;
            }

            alert(error?.response?.data?.message);
            return;
        }
        alert(error?.message)
    }
}