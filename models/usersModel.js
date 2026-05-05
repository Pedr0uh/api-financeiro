let usuarios = [
    {id: 1, nome: "Pedro"},
    {id: 2, nome: "Waleria"}
];

//GET
const getAllUsers = () => {
    return usuarios;
};

//POST
const createUser = (nome) => {
    const novoUsuario = {
        id: usuarios.length + 1,
        nome: nome
    };

    usuarios.push(novoUsuario);
    
    return novoUsuario;
};

module.exports = {
    getAllUsers,
    createUser
};