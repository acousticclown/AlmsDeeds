const {
    okResponse,
    badRequestError,
    to,
    unverifiedError,
    loginResponse,
  } = require("../../../global_functions");
const Requirements = require("../../models/needModel");
const Users = require("../../models/userModel");
const { array } = require("../../middleware/upload");







const AidInfo = async (req, res) => {

  let size= req.params.size;
  let pgno= req.params.pgno;
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
      let aidInfo= new Array();
      let aidInform= new Array();
      
      let start=(size*pgno)-1 ;
        for(let i=0;i<size;i++)
        {
          aidInfo[i]=Aidinfo[start];
          start--;
    
        }
        let k=0;
        for(let i=size-1;i>=0;i--)
        {
          aidInform[k]=aidInfo[i];
          start--;
          k++;
    
        }
 
  return okResponse(res, aidInform, "Aids details");

}
}



  const AidDetailsById = async (req, res) => {

    const AidId = req.body.aidId;
     console.log("AidId",AidId);
  
    const [error, Aiddetails] = await to(Requirements.query().where("aidId", AidId).first()
      .withGraphFetched("[patientDetails, ReqDon(sum)]")
     .modifiers({
        sum(builder){
          builder.select("aidId").groupBy("aidId").sum("amount");
        
        }
      })
      ); 
      if(error){
        return badRequestError(res, "unable to fetch Aid details");
      }
      let status="pending";
      let remainAmount =Number(Aiddetails.amount)-Number(Aiddetails.ReqDon.sum)
        
      if(remainAmount==0){
       status="completed"
      }
      else{
        status="pending";
      }
    // console.log(profiledetails)
    let aidDetailsById={
      Aiddetails:Aiddetails,
      status:status,
      donationRequires:remainAmount
    }
    return okResponse(res, aidDetailsById, "Aids details");
  
  }










  module.exports = {
    AidDetailsById,
    AidInfo
    };