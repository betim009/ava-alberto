const Aluno = require('../models/Aluno');
const Pacote = require('../models/Pacote');

async function listPacotes() {
  return Pacote.find().lean();
}

async function listPacotesPorAluno(alunoId) {
  if (!alunoId) {
    const err = new Error('AlunoId é obrigatório');
    err.status = 400;
    throw err;
  }

  return Pacote.find({ alunoId }).lean();
}

async function createPacote(payload) {
  const { alunoId, nomeAluno } = payload || {};
  if (!alunoId) {
    const err = new Error('AlunoId é obrigatório');
    err.status = 400;
    throw err;
  }

  let nomeAlunoFinal = nomeAluno;
  if (!nomeAlunoFinal) {
    const aluno = await Aluno.findById(alunoId).lean();
    if (!aluno) {
      const err = new Error('Aluno não encontrado');
      err.status = 404;
      throw err;
    }
    nomeAlunoFinal = aluno.nome;
  }

  return Pacote.create({ ...payload, nomeAluno: nomeAlunoFinal });
}

async function addAula(pacoteId, aula) {
  if (!pacoteId) {
    const err = new Error('PacoteId é obrigatório');
    err.status = 400;
    throw err;
  }

  const pacote = await Pacote.findByIdAndUpdate(
    pacoteId,
    { $push: { aulas: aula } },
    { new: true, runValidators: true }
  ).lean();

  if (!pacote) {
    const err = new Error('Pacote não encontrado');
    err.status = 404;
    throw err;
  }

  return pacote;
}

async function updatePacote(pacoteId, updates) {
  if (!pacoteId) {
    const err = new Error('PacoteId é obrigatório');
    err.status = 400;
    throw err;
  }

  const pacote = await Pacote.findByIdAndUpdate(
    pacoteId,
    { $set: updates },
    { new: true, runValidators: true }
  ).lean();

  if (!pacote) {
    const err = new Error('Pacote não encontrado');
    err.status = 404;
    throw err;
  }

  return pacote;
}

module.exports = {
  listPacotes,
  listPacotesPorAluno,
  createPacote,
  addAula,
  updatePacote,
};
