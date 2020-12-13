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
  var cloudinary = require('cloudinary').v2;

  cloudinary.config({ 
      
      cloud_name: 'nishicloud', 
      api_key: '792541339391969', 
      api_secret: 'ZNY1ZEg2UCzRVwf07v3MYbFK6ZY' 
    });
  

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

   const uploadImage= async (req, res) => {
    let picUrl= req.file;
    let id = req.user.id;

    if (picUrl== undefined) {
      //return res.send(`You must select a file.`); 
      console.log("no file found");
      return badRequestError(res, "Upload an Image");
  
    }

   cloudinary.uploader.upload(picUrl.path,  function(error, result) 
    {
        console.log(result, error)
        //console.log(result.url);
        var imageurl=result.url;
       
      /* const [error2,imageUpload ] = await to(
          Users.query().insert({image:imageurl}).where("id",id)
          .returning("*")
       
        )
        console.log(imageUpload);
        */
       
    
    });
   /* const [error,imageUpload ] = await to(
      Users.query().insert({image:imageurl}).where("id",id)
      .returning("*")
   
    )*/

   
    console.log("ERROR IS "+imageUpload);
 if (error){ return badRequestError(res, "Error while Uploading ");}
 else{
    //return okResponse(res, imageUpload, "Succesfully image uploaded");

 }

   
    /*const [error,userDetails ] = await to(
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
     );*/
   /*  console.log("ERROR IS "+error);
     if (error){ return badRequestError(res, "Error while Uploading ");}
     else{
        return okResponse(res, imageUpload, "Succesfully image uploaded");
 
     }*/
    }
   




   
   module.exports = {
    userDetails  ,
    Analytics ,
    uploadImage
 };
 