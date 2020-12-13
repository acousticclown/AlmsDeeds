
import { history } from "../../../history";

import {authInstance} from "../../../request";

export const signupWithEmailAndPassword = (user) => {
  console.log(user)
  return (dispatch) => {
    authInstance
      .post("/signup", user)
      .then((response) => {
        console.log(response)
        if (response.data) {
          loggedInUser = response.data.data;

          localStorage.setItem("auth-token", response.data.token);

          dispatch({
            type: "SIGNUP_WITH_EMAIL_AND_PASSWORD",
            payload: response.data,
          });

          history.push("/login");
        }
      })
      .catch((err) => console.log(err));
  };
};

