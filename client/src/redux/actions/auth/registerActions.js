// import * as firebase from "firebase/app";
import { history } from "../../../history";
import {authInstance} from "../../../request";

export const signupWithEmailAndPassword = (user) => {
  console.log(user)
  return (dispatch) => {
    authInstance
      .post("/signup", user)
      .then((response) => {
        var loggedInUser;

        if (response.data) {
          loggedInUser = response.data.data;

          localStorage.setItem("auth-token", response.data.token);

          dispatch({
            type: "SIGNUP_WITH_EMAIL_AND_PASSWORD",
            payload: { loggedInUser, loggedInWith: "emailAndPassword" },
          });

          history.push("/login");
        }
      })
      .catch((err) => console.log(err));
  };
};
