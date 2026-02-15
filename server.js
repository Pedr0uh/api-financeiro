const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Home da API com express!");
});

app.listen(3000, () => {
    console.log("Servidor na porta 3000!");
});

