const express = require('express');
const alunoController = require('../controllers/alunoController');

const router = express.Router();

router.get('/', alunoController.getAlunos);
router.post('/', alunoController.postAluno);
router.post('/login', alunoController.postLogin);

module.exports = router;
