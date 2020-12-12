import {instance } from "../../../request"

export const aidRequest = (request) => {
    return (dispatch) => {
      instance
        .post("/aidreq", {
          description:request.description,
          category:request.category,
          image:"",
          document:"",
          contact_no:request.contact_no,
          amount:request.amount,
          urgency:request.urgency ,
        })
        .then((response) => {
          if (response.data.data) {
           
            dispatch({
              type: "REQUEST_AID",
              payload: response.data.data,
            });
          }
        })
        .catch((err) => console.log(err));
    };
  };