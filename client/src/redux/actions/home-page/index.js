import {instance } from "../../../request"

export const getAidData = () => {
  return (dispatch) => {
    instance
    .get("/aidAnalysis")
    .then((response) => {
          console.log(response)
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

  export const getDashboardData = () => {
    return (dispatch) => {
      instance
        .get("/Analytics")
        .then((response) => {
          if (response.data.data) {
  
            dispatch({
              type: "GET_DASHBOARD_DATA",
              payload: response.data.data,
            });
          }
        })
        .catch((err) => console.log(err));
    };
  };
  
  