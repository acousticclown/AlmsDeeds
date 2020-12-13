import {instance} from "../../../request";

export const getDonations = () => {
  return (dispatch) => {
    instance
      .get("/aidInfo/1/8")
      .then((response) => {
          console.log(response)
        if (response.data.data) {

          dispatch({
            type: "GET_DONATIONS",
            payload: response.data.data,
          });
        }
      })
      .catch((err) => console.log(err));
  };
};

export const getPersonById = (aidId, dispatch) => {
    return instance
        .post("/aidDetailsById", {
            aidId
        })
        .then((response) => {
            console.log(response.data.data)
          if (response.data.data) {
  
            dispatch({
              type: "GET_PERSON_BY_ID",
              payload: response.data.data,
            });
          }
        })
        .catch((err) => console.log(err));
  };