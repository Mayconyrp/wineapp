const express = require("express")
const app = express()
const cors = require("cors")
const axios = require('axios');
// Import BD
const wineappbd = require("./database/wineappdb")
const Usuario = require("./models/Usuario")

//Import Controllers
const usuariosController = require("./usuarios/UsuariosController.js")
const previsaoController = require("./Previsao/PrevisaoController.js")

//Configuracoes Express

app.use(cors())
app.use(express.json())

//Conexao c banco de dados
wineappbd
    .authenticate()
    .then(() => {
        console.log("Conexão feita!")
    }).catch((error) => {
        console.log(error)
    })


//Usuarios - Vinicolas
app.use("/", usuariosController)

//API - Previsao climatica
app.use('/', previsaoController)

const port = 8080;

//Porta do servidor
app.listen(8080, () => {
    console.log("Aplicação on-line!");
    console.log(`Rodando na porta: http://localhost:${port}`);

})      