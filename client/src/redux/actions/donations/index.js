import {instance} from "../../../request";

export const getDonations = () => {
  return (dispatch) => {
    instance
      .get("/aidInfo")
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
            return response.data.data
            // dispatch({
              //   type: "GET_PERSON_BY_ID",
            //   payload: response.data.data,
            // });
          }
        })
        .catch((err) => console.log(err));
  };
  export const getRecentDonations = () => {
    return (dispatch) => {
      instance
        .get("/recentDonation")
        .then((response) => {
            console.log(response)
          if (response.data.data) {
  
            dispatch({
              type: "GET_RECENT_DONATIONS",
              payload: response.data.data,
            });
          }
        })
        .catch((err) => console.log(err));
    };
  };

  export const getTopDonators = () => {
    return (dispatch) => {
      instance
        .get("/topDonation")
        .then((response) => {
            console.log(response)
          if (response.data.data) {
  
            dispatch({
              type: "GET_TOP_DONATORS",
              payload: response.data.data,
            });
          }
        })
        .catch((err) => console.log(err));
    };
  };