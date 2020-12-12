
import { history } from "../../../history";

import {authInstance} from "../../../request";

export const signupWithEmailAndPassword = (user) => {
  return (dispatch) => {
    authInstance
      .post("/signup",{
       email:user.email,
       password:user.password,
       accHash:user.accHash,
       fullName:user.fullName
      })
      .then((response) => {
        console.log(response)
        if (response.data) {
         
          dispatch({
            type: "SIGNUP_WITH_EMAIL_AND_PASSWORD",
            payload: response.data,
          });
        }
      })
      .catch((err) => console.log(err));
  };
};
//       .then((response) => {
//         var loggedInUser;
// console.log(response);
//         if (response.data) {
//           loggedInUser = response.data.user;
//           localStorage.setItem("auth-token", response.data.token);
//           dispatch({
//             type: "SIGNUP_WITH_EMAIL_AND_PASSWORD",
//             payload: { loggedInUser, loggedInWith: "emailAndPassword" },
//           });

//           history.push("/");
//         }
//       })
//       .catch((err) => console.log(err));
//   };
// };
