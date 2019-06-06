'use strict';

// Router
const router = require('express').Router();
const quotation = require('./index');

// quotations
router.get('/dolar', quotation.quotationUsd);
router.get('/euro', quotation.quotationEur);
router.get('/real', quotation.quotationBrl);
router.post('/', quotation.buggyRoute);

// Export the router
module.exports = router;