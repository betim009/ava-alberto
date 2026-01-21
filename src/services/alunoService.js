const Aluno = require('../models/Aluno');

async function listAlunos() {
  return Aluno.find().lean();
}

async function createAluno(payload) {
  return Aluno.create(payload);
}

module.exports = {
  listAlunos,
  createAluno,
};
