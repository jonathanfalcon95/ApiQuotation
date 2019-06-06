'use strict';

const router = require('express').Router();
const middleware = require('./src/middleware');
const errors = require('./src/errors');
const quotationRouter = require('./src/quotation/router');

// Wire up middleware
router.use(middleware.doSomethingInteresting);

// Wire up routers
router.use('/cotizacion', quotationRouter);

// Wire up error-handling middleware
router.use(errors.errorHandler);
router.use(errors.nullRoute);

// Export the router
module.exports = router;
