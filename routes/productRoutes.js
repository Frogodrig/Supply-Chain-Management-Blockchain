const express = require('express');
const router = express.Router();
const {
    addProduct,
    getAllProducts,
    getMyProducts,
    getSingleProduct,
  } = require("../controllers/products")
  
  //Routes
  router.post("/addProduct", ()=>{
    addProduct
  })
  router.get("/getAllProducts", ()=>{
    getAllProducts
  })
  router.get("/getMyProducts", ()=>{
    getMyProducts
  })
  router.get("/getSingleProduct", ()=>{
    getSingleProduct
  })
  
  module.exports = router
  