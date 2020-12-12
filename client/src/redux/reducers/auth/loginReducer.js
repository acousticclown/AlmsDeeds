export const login = (state = { userRole: "" }, action) => {
  switch (action.type) {
    case "LOGIN_WITH_EMAIL_AND_PASSWORD": {
      return { ...state, userRole: "admin", values: action.payload };
    }
    case "LOGOUT_WITH_EMAIL_AND_PASSWORD": {
      return { ...state, userRole: "", values: action.payload };
    }
    case "CHANGE_ROLE": {
      return { ...state, userRole: action.userRole };
    }
    default: {
      return state;
    }
  }
};
