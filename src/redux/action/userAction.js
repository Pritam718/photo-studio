import axios from "axios";

export const checkAuth = () => async (dispatch) => {
  try {
    const url="/api/user/getuser";
    const { data } = await axios.get(url);
   
    if (!!data?.user) {
      dispatch({ type: "LOGIN_SUCCESS", payload: data?.user });
    } else {
      dispatch({ type: "LOGOUT" });
    }
  } catch (err) {
    dispatch({ type: "LOGOUT" });
  }
};
