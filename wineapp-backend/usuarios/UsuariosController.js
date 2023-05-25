const express = require("express")
const router = express.Router()
const Usuario = require("../models/Usuario")



router.get('/teste', (req, res) => {
    res.send("Testando rota do controller")
});

//API PARA CRIAÇÃO DE DADOS
router.post('/usuarios', (req, res) => {
    const { nome_vinicola, cnpj, email, telefone_vinicola, password } = req.body;

    Usuario.create({
        nome_vinicola,
        cnpj,
        email,
        telefone_vinicola,
        password,
    })
        .then((usuariocadastro) => {
            console.log(usuariocadastro.toJSON())
            res.status(201).send(usuariocadastro);
        })
        .catch((error) => {
            console.error(error);
            res.status(500).send('Erro ao criar o usuário');
        });
});

//API PARA LEITURA DE DADOS
router.get('/lerusuarios', (req, res) => {
    Usuario.findAll()
        .then((usuarios) => {
            res.status(200).send(usuarios);
        })
        .catch((error) => {
            console.error(error);
            res.status(500).send('Erro ao buscar os usuários');
        });
});
// API PARA ATUALIZAÇÃO DE DADOS
router.put('/usuarios/:id', (req, res) => {
    const userId = req.params.id;
    const { nome_vinicola, cnpj, email, telefone_vinicola, password } = req.body;

    Usuario.findByPk(userId)
        .then((usuario) => {
            if (usuario) {
                // Atualizar os dados do usuário
                usuario.nome_vinicola = nome_vinicola;
                usuario.cnpj = cnpj;
                usuario.email = email;
                usuario.telefone_vinicola = telefone_vinicola;
                usuario.password = password;

                usuario.save()
                    .then((usuarioAtualizado) => {
                        console.log(usuarioAtualizado.toJSON());
                        res.status(200).send(usuarioAtualizado);
                    })
                    .catch((error) => {
                        console.error(error);
                        res.status(500).send('Erro ao atualizar o usuário');
                    });
            } else {
                res.status(404).send('Usuário não encontrado');
            }
        })
        .catch((error) => {
            console.error(error);
            res.status(500).send('Erro ao buscar o usuário');
        });
});

//API PARA EXCLUSÃO DE DADOS
router.delete("/listar/:id", (req, res) => {
    var id = req.params.id;
    Usuario.destroy({
        where: {
            id: id
        }
    }).then(() => {
        res.redirect("/listar");
    }).catch((error) => {
        console.log(error);
        res.send("Erro ao excluir usuário.");
    });
});



module.exports = router;
