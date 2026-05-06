const usersModel = require("../models/usersModel");

// Esta funcao obtém todos os usuários do modelo e envia a resposta 
const getAllUsers = (req, res) => {
    const usuarios = usersModel.getAllUsers();
    res.send(usuarios);
};

// Esta funcao cria um novo usuário usando o modelo e envia a resposta
const createUser = (req, res) => {
    const nome = req.body.nome;

    const novoUsuario = usersModel.createUser(nome);

    res.send(novoUsuario);
};

// Esta funcao obtém um usuário por id usando o modelo e envia a resposta
const getUserById = (req, res) => {
    const id = Number(req.params.id);
    const usuario = usersModel.getUserById(id);

    if (!usuario) {
        return res.status(404).send("Usuário não encontrado!");
    }

    res.send(usuario);
};

module.exports = {
    getAllUsers,
    createUser,
    getUserById
};