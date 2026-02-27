const userModel = require("../models/userModel");

const getAllUsers = (req, res) => {
    res.send(userModel.getAll());
};

module.exports = {
    getAllUsers
}