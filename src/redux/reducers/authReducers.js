// src/redux/reducers/authReducer.js
const initialState = {
    isAuthenticated: false,
    user: null,
    check: true
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        //console.log(action.payload,"hiiiiiiiii")
        return {
          ...state,
          isAuthenticated: true,
          user: action.payload,
          check:false
        };
      case 'LOGOUT':
        return {
          ...state,
          isAuthenticated: false,
          user: null,
          check:false
        };
      default:
        return state;
    }
  };
  
  export default authReducer;
  