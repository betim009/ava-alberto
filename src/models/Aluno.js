const mongoose = require("mongoose");

const alunoSchema = new mongoose.Schema(
  {
    nome: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    senha: {
      type: String,
      required: true,
    },
    tipo: {
      type: String,
      enum: ['admim', 'aluno'],
      default: 'aluno'
    },
    status: {
      type: Boolean,
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

