const express = require("express");
const router = express.Router();

const usersController = require("../controllers/usersController");

// Rotas dos usuarios

// Rota para obter todos os usuarios (get)
router.get("/", usersController.getAllUsers);

// Rota para obter um usuario por id (get)
router.get("/:id", usersController.getUserById);

// Rota para criar um novo usuario (post)
router.post("/", usersController.createUser);


module.exports = router;