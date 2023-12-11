const express = require('express');
const router = express.Router();
const { supplychaincontract } = require('../app');

exports.addParty = async (req, res) => {
  try {
    const { role, id_, name, email } = req.body;
    const user = { role, id_, name, email };
    const result = await supplychaincontract.methods.addParty(user).send({ from: '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80' });
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.sellProduct = async (req, res) => {
  try {
    const { partyId, barcodeId, currentTime } = req.body;
    const result = await supplychaincontract.methods.sellProduct(partyId, barcodeId, currentTime).send({ from: '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80' });
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = router;
