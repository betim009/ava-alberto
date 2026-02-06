const mongoose = require('mongoose');

const pacoteSchema = new mongoose.Schema(
  {
    alunoId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Aluno',
      required: true,
      index: true,
    },
    nomeAluno: {
      type: String,
      trim: true,
    },
    nomePacote: {
      type: String,
      enum: ['Avulso', '5 Aulas', '10 Aulas', 'Mensal', 'Dois Meses', 'Especial'],
      required: true,
    },
    dataCompra: {
      type: Date,
      required: true,
    },
    dataFinalPacote: {
      type: Date,
    },
    aulas: {
      type: [
        {
          data: {
            type: Date,
            required: true,
          },
          status: {
            type: String,
            enum: ['marcada', 'realizada', 'cancelada'],
            default: 'marcada',
          },
        },
      ],
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Pacote', pacoteSchema);
