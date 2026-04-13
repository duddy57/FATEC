const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const contatoRouter = require("./routers/contato_router");

app.use(express.json());

app.get("/", (req, res) => {
	res.json({ message: "Bem-vindo à API de Contatos!" });
});

app.use("/contatos", contatoRouter);

app.use((req, res) => {
	res.status(404).json({ message: "Rota não encontrada" });
});

mongoose.connect(process.env.MONGODB_URI);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Erro de conexão ao MongoDB:"));
db.once("open", () => {
	console.log("Conectado ao MongoDB Atlas!");
});

if (require.main === module) {
	const PORT = process.env.PORT || 3000;
	app.listen(PORT, () => {
		console.log(`Servidor rodando na porta ${PORT}`);
	});
}

module.exports = app;