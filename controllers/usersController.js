const usersModel = require("../models/usersModel");

const getAllUsers = (req, res) => {
    const usuarios = usersModel.getAllUsers();
    res.send(usuarios);
};

module.exports = {
    getAllUsers
};