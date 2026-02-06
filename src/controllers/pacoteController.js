const pacoteService = require('../services/pacoteService');

async function getPacotes(_req, res, next) {
  try {
    const pacotes = await pacoteService.listPacotes();
    res.json({ resultado: { data: pacotes } });
  } catch (err) {
    next(err);
  }
}

async function getPacotesPorAluno(req, res, next) {
  try {
    const { alunoId } = req.params;
    const pacotes = await pacoteService.listPacotesPorAluno(alunoId);
    res.json({ resultado: { data: pacotes } });
  } catch (err) {
    next(err);
  }
}

async function postPacote(req, res, next) {
  try {
    const pacote = await pacoteService.createPacote(req.body);
    res.status(201).json(pacote);
  } catch (err) {
    next(err);
  }
}

async function postAula(req, res, next) {
  try {
    const { pacoteId } = req.params;
    const pacote = await pacoteService.addAula(pacoteId, req.body);
    res.status(201).json(pacote);
  } catch (err) {
    next(err);
  }
}

async function patchPacote(req, res, next) {
  try {
    const { pacoteId } = req.params;
    const pacote = await pacoteService.updatePacote(pacoteId, req.body);
    res.json(pacote);
  } catch (err) {
    next(err);
  }
}

module.exports = {
  getPacotes,
  getPacotesPorAluno,
  postPacote,
  postAula,
  patchPacote,
};
