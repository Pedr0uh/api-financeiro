// Simulando um banco de dados com um array
let usuarios = [
    {id: 1, nome: "Pedro"},
    {id: 2, nome: "Waleria"}
];

//funcao para obter todos os usuarios (get)
const getAllUsers = () => {
    return usuarios;
};

//funcao para criar um novo usuario (post)
const createUser = (nome) => {
    const novoUsuario = {
        id: usuarios.length + 1,
        nome: nome
    };

    usuarios.push(novoUsuario);
    
    return novoUsuario;
};

// funcao para obter um usuario por id (get)
const getUserById = (id) => {
    return usuarios.find((usuarios) => usuarios.id === id);
};


module.exports = {
    getAllUsers,
    createUser,
    getUserById
};