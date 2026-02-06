const express = require('express');
const alunoRoutes = require('./alunoRoutes');
const pacoteRoutes = require('./pacoteRoutes');
const { errorHandler } = require('../middlewares/errorHandler');

const router = express.Router();

router.use('/alunos', alunoRoutes);
router.use('/', pacoteRoutes);
router.use(errorHandler);

module.exports = router;
