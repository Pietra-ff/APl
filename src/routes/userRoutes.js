const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");

router.put(
"/users/:id",
userController.atualizar
);

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Usando as rotas importadas
app.use("/api/users", userRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});