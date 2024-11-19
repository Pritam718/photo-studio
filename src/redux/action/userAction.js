import axios from "axios";
const ACTION_TYPES = {
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGOUT: "LOGOUT",
};

export const checkAuth = () => async (dispatch) => {
  try {
    const url = "/api/user/getuser";
    const { data } = await axios.get(url);

    if (!!data?.user) {
      dispatch(loginSuccessAction(data?.user));
    } else {
      dispatch(logoutAction());
    }
  } catch (err) {
    dispatch(logoutAction());
  }
};

export const loginSuccessAction = (payload) => {
  return {
    type: ACTION_TYPES.LOGIN_SUCCESS,
    payload,
  };
};

export const logoutAction = () => {
  return {
    type: ACTION_TYPES.LOGOUT,
  };
};
