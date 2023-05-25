axios.get('http://localhost:8080/lerusuarios')
    .then(function (response) {
        const usuarios = response.data;
        const tabelaUsuarios = document.getElementById('tabela-usuarios');

        usuarios.forEach(function (usuario) {
            const row = document.createElement('tr');

            const idCell = document.createElement('td');
            idCell.textContent = usuario.id;
            row.appendChild(idCell);

            const nomeCell = document.createElement('td');
            nomeCell.textContent = usuario.nome_vinicola; // Altere para o campo correto
            row.appendChild(nomeCell);

            const cnpjCell = document.createElement('td');
            cnpjCell.textContent = usuario.cnpj; // Altere para o campo correto
            row.appendChild(cnpjCell);

            const actionsCell = document.createElement('td');
            // Adicione aqui os botões de ação para cada usuário, como editar ou excluir
            row.appendChild(actionsCell);

            tabelaUsuarios.querySelector('tbody').appendChild(row);
        });
    })
    .catch(function (error) {
        console.error(error);
    });
