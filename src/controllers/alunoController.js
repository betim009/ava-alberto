const alunoService = require('../services/alunoService');

async function getAlunos(_req, res, next) {
  try {
    const alunos = await alunoService.listAlunos();
    res.json(alunos);
  } catch (err) {
    next(err);
  }
}

async function postAluno(req, res, next) {
  try {
    const aluno = await alunoService.createAluno(req.body);
    res.status(201).json(aluno);
  } catch (err) {
    next(err);
  }
}

module.exports = {
  getAlunos,
  postAluno,
};
