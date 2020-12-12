const {
    okResponse,
    badRequestError,
    to,
    unverifiedError,
    loginResponse,
  } = require("../../../global_functions");
const Requirements = require("../../models/needModel");
const Users = require("../../models/userModel");







const AidInfo = async (req, res) => {

  const [error, Aidinfo] = await to(
    Requirements.query().select("aidId", "category", "amount", "urgency")


    .returning("*")
    .withGraphFetched("[patientDetails(SelectFullName), ReqDon(DonatedSum)]")
    .modifiers({
      SelectFullName(builder){
        builder.select("fullName");
      },
      DonatedSum(builder) {
        builder.groupBy("aidId").sum("amount");
      }
    })
    ); 

    console.log(error);
    if(error){
      return badRequestError(res, "unable to fetch Aid information");
    }
    else{
      console.log(Aidinfo);
        /*for(let i=0;i<Aidinfo.length;i++){
    if(Aidinfo[i].amount<=Aidinfo[i].ReqDon.Dsum){
        
    }
    }*/
 
  return okResponse(res, Aidinfo, "Aids details");

}
}



  const AidDetailsById = async (req, res) => {

    const AidId = req.body.aidId;
     console.log("AidId",AidId);
  
    const [error, Aiddetails] = await to(Requirements.query().where("aidId", AidId).first()
      .withGraphFetched("patientDetails()")
     /* .modifiers({
        Select(builder){
         
        }
      })*/
      ); 
      if(error){
        return badRequestError(res, "unable to fetch Aid details");
      }
    // console.log(profiledetails)
    return okResponse(res, Aiddetails, "Aids details");
  
  }










  module.exports = {
    AidDetailsById,
    AidInfo
    };