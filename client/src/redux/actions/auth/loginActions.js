
import { history } from "../../../history";
import {authInstance} from "../../../request";


export const loginWithEmailAndPassword = (user) => {
  return (dispatch) => {
    authInstance
      .post("/login", {
        email: user.email,
        password: user.password,
      })
      .then((response) => {
        var loggedInUser;

        if (response.data) {
          loggedInUser = response.data.data;
          console.log(loggedInUser);

          dispatch({
            type: "LOGIN_WITH_EMAIL_AND_PASSWORD",
            payload: { loggedInUser, loggedInWith: "emailAndPassword" },
          });
        }
      })
      .catch((err) => console.log(err));
  };
};

export const logoutWithEmailAndPassword = () => {
  return (dispatch) => {
    dispatch({ type: "LOGOUT_WITH_EMAIL_AND_PASSWORD" });
    
    localStorage.removeItem('auth-token');
    history.push("/login");
  };
};

export const logoutWithEmail = () => {
  return (dispatch) => {
    dispatch({ type: "LOGOUT_WITH_EMAIL", payload: {} });
    history.push("/login");
  };
};

export const changeRole = (role, loggedInWith) => {
  return (dispatch) => dispatch({ type: "CHANGE_ROLE", userRole: role, loggedInWith });
};
