const express = require('express');
const pacoteController = require('../controllers/pacoteController');

const router = express.Router();

router.get('/pacotes', pacoteController.getPacotes);
router.post('/pacotes', pacoteController.postPacote);
router.patch('/pacotes/:pacoteId', pacoteController.patchPacote);
router.post('/pacotes/:pacoteId/aulas', pacoteController.postAula);
router.get('/alunos/:alunoId/pacotes', pacoteController.getPacotesPorAluno);

module.exports = router;
