const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const middlewareError = require('./errors/errors');

dotenv.config();

const app = express();
app.use(express.json());

const contatoRouter = require('./routes/contatoRoutes');
app.use('/contatos', contatoRouter);
app.use(middlewareError); // Adiciona o middleware de erro para rotas não encontradas

mongoose.connect(process.env.MONGODB_URI);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro de conexão ao MongoDB:'));
db.once('open', () => {
  console.log('Conectado ao MongoDB Atlas!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

module.exports = app; // Exporta o app para os testes