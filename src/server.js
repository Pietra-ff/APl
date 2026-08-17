const express = require("express");
const cors = require("cors");

const app = express();

// Middlewares obrigatórios para ler JSON
app.use(cors());
app.use(express.json());

// Rota POST para criar usuário
app.post("/api/users", (req, res) => {
  const { nome, email } = req.body;
  res.status(201).json({
    id: 1,
    nome: nome,
    email: email
  });
});

// Rota GET para listar usuários
app.get("/api/users", (req, res) => {
  res.json([
    { id: 1, nome: "Maria", email: "maria@email.com" }
  ]);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});