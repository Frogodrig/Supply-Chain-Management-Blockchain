const express = require('express');
const router = express.Router();
const { supplychaincontract } = require('../app');

exports.getMyDetails = async (req, res) => {
  try {
    const userWalletAddress = 'USER_WALLET_ADDRESS'; // Replace with actual user wallet address
    const details = await supplychaincontract.methods.getMyDetails().call({ from: userWalletAddress });
    res.send(details);
  } catch (error) {
    res.status(500).send(error.toString());
  }
};

exports.getUserDetails = async (req, res) => {
  const userId = req.query.userId; // Assuming user ID is passed as a query parameter
  try {
    const userDetails = await supplychaincontract.methods.getUserDetails(userId).call();
    res.send(userDetails);
  } catch (error) {
    res.status(500).send(error.toString());
  }
};

module.exports = router;
