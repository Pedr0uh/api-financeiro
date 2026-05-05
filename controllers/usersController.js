const usersModel = require("../models/usersModel");

const getAllUsers = (req, res) => {
    const usuarios = usersModel.getAllUsers();
    res.send(usuarios);
};

const createUser = (req, res) => {
    const nome = req.body.nome;

    const novoUsuario = usersModel.createUser(nome);

    res.send(novoUsuario);
};

module.exports = {
    getAllUsers,
    createUser
};