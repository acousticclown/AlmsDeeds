const express = require("express");
const router  = express.Router();
const UserAuthController=require("../controllers/index").UserAuthController;
const ReqController=require("../controllers/index").ReqController;
const ReqssController=require('../controllers/index').ReqssController;
const ReqspController=require("../controllers/index").ReqspController;
const UserController=require("../controllers/index").UserController;

const VerifyUserJWT=require("../middleware/jwt").VerifyUserJWT;

//CHECK ROUTES
router.get("/check",VerifyUserJWT,(req,res)=>{
    console.log("Value fetched from token userid, accHash, email")
    console.log(req.user.id);
    console.log(req.user.accHash);
    console.log(req.user.email);

res.send("Welcome ! Everything is perfectly setUp")
});

router.get("/checkHeroku",(req,res)=>{
    res.send("Welcome ! Heroku deployement is perfectly done")
});


//AUTHENTICATION routes
router.post('/signup',UserAuthController.SignUp);
router.post('/login',UserAuthController.Login);
router.post('/changeuserpassword',VerifyUserJWT,UserAuthController.ChangePassword);

//AID routes
router.get('/aidAnalysis',ReqController.AidAnalysis);
router.get('/aidDetailsById',ReqssController.AidDetailsById);


//Dashboard routes
router.get('/userDetails',UserController.userDetails);
router.get('/analytics',UserController.Analytics);

//AID Request routes
router.post('/aidreq',VerifyUserJWT,ReqspController.AidRequestForm);

//Donate routes
router.post('/donate',VerifyUserJWT,ReqspController.DonateForm);


module.exports = router;