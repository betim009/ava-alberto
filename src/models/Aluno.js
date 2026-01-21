const mongoose = require("mongoose");

const alunoSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    status: {
      type: Boolean,
    },
    pacote: {
      type: String,
      enum: ['Avulso', '5 Aulas', '10 Aulas', 'Mensal', 'Dois Meses'],
      default: 'Avulso'
    },
    dataCompra: {
      type: Date,
    },
    dataFinalPacote: {
      type: Date,
    },
    recorrenciaCancelamentos: {
      type: Number,
      default: 0,
      min: 0,
    },

  },
  { timestamps: true },
);

module.exports = mongoose.model("Aluno", alunoSchema);
