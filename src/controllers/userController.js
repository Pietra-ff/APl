const userModel = require("../models/userModel");

async function listar(req, res) {
const users = await userModel.getUsers();

return res.json(users);
}

async function criar(req, res) {
const { nome, email } = req.body;

const user = await userModel.createUser(
nome,
email
);

return res.status(201).json(user);
}

module.exports = {
listar,
criar
};