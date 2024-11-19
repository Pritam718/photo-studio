// import { configureStore } from '@reduxjs/toolkit'
// import authReducer from './reducers/authReducers'

// export default configureStore({
//   reducer: {
//     auth: authReducer,
//   }
// })
import { createStore, applyMiddleware } from "redux";
//import thunk from "redux-thunk";
import rootReducer from "./reducers"; // Create this file for your root reducer
import axios from "axios";
import { loginSuccessAction, logoutAction } from "./action/userAction";

const asycMiddleware = (store) => (next) => async (action) => {
  switch (action?.type) {
    case "CHECK_AUTH":
      const url = "/api/user/getuser";
      const { data } = await axios.get(url);
      if (!!data?.user) {
        next(loginSuccessAction(data?.user));
      } else {
        next(logoutAction());
      }
  }
  next(action);
};

const store = createStore(rootReducer, applyMiddleware(asycMiddleware));

export default store;
