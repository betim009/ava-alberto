const Aluno = require('../models/Aluno');

async function listAlunos() {
  return Aluno.find().lean();
}

async function createAluno(payload) {
  return Aluno.create(payload);
}

async function loginAluno(payload) {
  const { nome, senha } = payload || {};
  if (!nome || !senha) {
    const err = new Error('Nome e senha sao obrigatorios');
    err.status = 400;
    throw err;
  }

  const aluno = await Aluno.findOne({ nome, senha }).lean();
  if (!aluno) {
    const err = new Error('Credenciais invalidas');
    err.status = 401;
    throw err;
  }

  return { nome: aluno.nome, tipo: aluno.tipo };
}

module.exports = {
  listAlunos,
  createAluno,
  loginAluno,
};
