const express = require('express');
const userRoutes = require('./userRoutes');
const { errorHandler } = require('../middlewares/errorHandler');

const router = express.Router();

router.use('/users', userRoutes);
router.use(errorHandler);

module.exports = router;
