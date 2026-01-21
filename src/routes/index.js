const express = require('express');
const alunoRoutes = require('./alunoRoutes');
const { errorHandler } = require('../middlewares/errorHandler');

const router = express.Router();

router.use('/alunos', alunoRoutes);
router.use(errorHandler);

module.exports = router;
