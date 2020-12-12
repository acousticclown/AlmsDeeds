const {
    okResponse,
    badRequestError,
    to,
    unverifiedError,
    loginResponse,
  } = require("../../../global_functions");
  const Users = require("../../models/userModel");
  const Requirements = require("../../models/needModel");  
  const Donate = require("../../models/donateModel");
 

  const userDetails = async (req, res) => {
    let userId= req.user.id;
     const [error,userDetails ] = await to(
         Users.query().select("fullName","email","accHash","image").where("id",userId)
         .returning("*")
         .withGraphFetched("[uDonations(totalSum) , uNeeds(totalReq)]")
         .modifiers({
             totalSum(builder) {
             builder.sum("amount").groupBy("donatorId");
           },
           totalReq(builder){
               builder.select("patientId").count("patientId").groupBy("patientId");
           }

         })
     );
     console.log("ERROR IS "+error);
     if (error) return badRequestError(res, "unable to fetch");
     else{
        return okResponse(res, userDetails, "No of Demands fullfill");
 
     }
   };

   const Analytics=  async (req, res) => {
    //let userId= req.user.id;
    const [error, TotalUsers] = await to(
      Users.query().count("id")
         )

         const [error2, TotalDonation] = await to(
          Donate.query().sum("amount")
             )
       
             const [error3, TotalTransaction] = await to(
              Donate.query().count("donatorId")
                 )
                 const [error4, TotalAids] = await to(
                  Requirements.query().count("aidId")
                     )
               

    let Analytics={
      TotalUsers:TotalUsers,
      TotalDonation:TotalDonation,
      TotalTransaction:TotalTransaction,
      TotalAids:TotalAids
    }

     console.log("ERROR IS "+error2);
     if (error) return badRequestError(res, "unable to fetch");
     else{
        return okResponse(res, Analytics, "No of Demands fullfill");
 
     }
   };

   
   module.exports = {
    userDetails  ,
    Analytics 
 };
 