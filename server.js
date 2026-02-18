const express = require("express");

const app = express();

app.use(express.json());

const usuarios = [
    {id: 1, nome: "Pedro"},
    {id: 2, nome: "Waleria"},
];

// Rota principal --------------------------------------

app.get("/", (req, res) => {
    res.send("Home da API com express!");
});

// Rota de /users --------------------------------------

// get da rota /users
app.get("/users", (req, res) => {
    
    res.send(usuarios);

});

app.get("/users/:id", (req, res) => {
    const id = req.params.id;

    const usuario = usuarios.find(u => u.id == id);

    if (!usuario) {
        return res.send("Usuario nao encontrado!")
    }

    res.send(usuario);

});

app.delete("/users/:id", (req, res) => {
    const id = req.params.id;

    const index = usuarios.findIndex(u => u.id == id);

    if(index == 1) {
        return res.send("Usuario nao encontrado!")
    }

    usuarios.splice(index, 1);

    res.send("Usuario removido com sucesso!")
});


// post da rota /users
app.post("/users", (req, res) => {

    const novoUsuario = {
        id: usuarios.length + 1,
        nome: req.body.nome
    };

    usuarios.push(novoUsuario);

    res.send(novoUsuario);

});

// Rotas /products ------------------------------------

// get da rota /products
app.get("/products", (req, res) => {
    res.send("Rota de produtos");
});


app.listen(3000, () => {
    console.log("Servidor na porta 3000!");
});

