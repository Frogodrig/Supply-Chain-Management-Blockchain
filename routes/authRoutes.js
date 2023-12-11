const express = require('express');
const router = express.Router();
const { supplychaincontract } = require('./web3setup');

router.post('/addParty', async (req, res) => {
    try {
        const { role, id_, name, email } = req.body; // Adjust the parameters based on UserDetails structure
        const user = { role, id_, name, email }; // Construct UserDetails object
        const result = await supplychaincontract.methods.addParty(user).send({ from: 'ADMIN_ADDRESS' });
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});



router.post('/sellProduct', async (req, res) => {
    try {
        const { partyId, barcodeId, currentTime } = req.body; // Extract required parameters
        const result = await supplychaincontract.methods.sellProduct(partyId, barcodeId, currentTime).send({ from: 'ADMIN_ADDRESS' });
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});



module.exports = router;
