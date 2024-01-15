// import { configureStore } from '@reduxjs/toolkit'
// import authReducer from './reducers/authReducers'

// export default configureStore({
//   reducer: {
//     auth: authReducer,
//   }
// })
import { createStore, applyMiddleware } from "redux";
//import thunk from "redux-thunk";
import { thunk } from "redux-thunk";
import rootReducer from "./reducers"; // Create this file for your root reducer

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;