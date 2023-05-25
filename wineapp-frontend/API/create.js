function cadastrarUsuario() {
    const nome_vinicola = document.getElementById('nome_vinicola').value;
    const cnpj = document.getElementById('cnpj').value;
    const email = document.getElementById('email').value;
    const telefone_vinicola = document.getElementById('telefone_vinicola').value;
    const password = document.getElementById('password').value;

    const usuario = {
        nome_vinicola,
        cnpj,
        email,
        telefone_vinicola,
        password
    };

    axios.post('http://localhost:8080/usuarios', usuario)
        .then(function (response) {
            console.log(response.data);
            alert('Cadastro realizado com sucesso');
            // Faça algo com a resposta (por exemplo, exiba uma mensagem de sucesso)

            // Limpar o formulário
            document.getElementById('nome_vinicola').value = '';
            document.getElementById('cnpj').value = '';
            document.getElementById('email').value = '';
            document.getElementById('telefone_vinicola').value = '';
            document.getElementById('password').value = '';
        })
        .catch(function (error) {
            console.error(error);
            // Trate o erro adequadamente (por exemplo, exiba uma mensagem de erro)
        });
}
