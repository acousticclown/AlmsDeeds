export const login = (state = { userRole: "" }, action) => {
  switch (action.type) {
    case "LOGIN_WITH_EMAIL_AND_PASSWORD": {
      return { ...state, userRole: "", values: action.payload };
    }
    case "LOGOUT_WITH_EMAIL_AND_PASSWORD": {
      return { ...state, userRole: "", values: [] };
    }
    case "CHANGE_ROLE": {
      return { ...state, userRole: action.userRole, values:  { loggedInWith: action.loggedInWith } };
    }
    default: {
      return state;
    }
  }
};
