const express = require('express');
const router = express.Router();
const { supplychaincontract } = require('./web3setup');

router.post('/addProduct', async (req, res) => {
    const { name, manufacturerName, manufacturer, manDateEpoch, expDateEpoch, isInBatch, batchCount, barcodeId, productImage, productType, scientificName, usage, composition, sideEffects } = req.body;
    try {
        const product = {
            name, manufacturerName, manufacturer, manDateEpoch, expDateEpoch, isInBatch, batchCount, barcodeId, productImage, productType, scientificName, usage, composition, sideEffects
        };
        const currentTime = ''
        const result = await supplychaincontract.methods.addProduct(product, currentTime).send({ from: 'YOUR_WALLET_ADDRESS' });
        res.send(result);
    } catch (error) {
        res.status(500).send(error.toString());
    }
});


router.get('/getAllProducts', async (req, res) => {
    try {
        const products = await supplychaincontract.methods.getAllProducts().call();
        res.send(products);
    } catch (error) {
        res.status(500).send(error.toString());
    }
});


router.get('/getMyProducts', async (req, res) => {
    const userAddress =''
    try {
        const myProducts = await supplychaincontract.methods.getMyProducts().call({ from: userAddress });
        res.send(myProducts);
    } catch (error) {
        res.status(500).send(error.toString());
    }
});



router.get('/getSingleProduct', async (req, res) => {
    const { barcodeId } = req.query;
    try {
        const product = await supplychaincontract.methods.getSingleProduct(barcodeId).call();
        res.send(product);
    } catch (error) {
        res.status(500).send(error.toString());
    }
});



module.exports = router;
