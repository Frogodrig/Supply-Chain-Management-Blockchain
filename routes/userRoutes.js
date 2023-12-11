const express = require('express');
const router = express.Router();
const {
    getMyDetails,
    getUserDetails
  } = require("../controllers/user")
  
  //Routes
  router.get("/getMyDetails", getMyDetails)
  router.get("/getUserDetails", getUserDetails)
  
  module.exports = router
  