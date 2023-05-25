const { Sequelize, DataTypes } = require('sequelize');
const wineappbd = require('../database/wineappdb');

const Usuario = wineappbd.define('Usuario', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    nome_vinicola: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cnpj: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    telefone_vinicola: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});

(async () => {
    await Usuario.sync();
    console.log('Tabela de usuários criada!');
})();

//Usuario.sync()
module.exports = Usuario