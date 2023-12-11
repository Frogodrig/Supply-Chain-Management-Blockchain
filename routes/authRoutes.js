const express = require('express');
const router = express.Router();
const {
addParty,
sellProduct
  } = require("../controllers/auth")
  
  //Routes
  router.post("/addParty", () => {
    addParty
  })
  router.post("/sellProduct", ()=>{
    sellProduct
  })
  
  module.exports = router
  