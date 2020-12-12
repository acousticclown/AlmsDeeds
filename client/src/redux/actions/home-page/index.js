import {instance } from "../../../request"

export const getAidData = () => {
    return (dispatch) => {
      instance
        .get("/aidAnalysis")
        .then((response) => {
          if (response.data.data) {
  
            dispatch({
              type: "GET_AID_DATA",
              payload: response.data.data,
            });
          }
        })
        .catch((err) => console.log(err));
    };
  };
  