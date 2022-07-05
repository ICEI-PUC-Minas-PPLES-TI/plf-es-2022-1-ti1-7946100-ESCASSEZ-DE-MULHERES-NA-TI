// declara um conjunto inicial de contatos
var db_contatos_inicial = {
    "data": [
        {
            "id": 1,
            "nome": "Mariana Ferreira",
            "email": "mari2305@april.biz",
            "empresa": "Google",
			"nota": 5,
            "comentario": "Empresa preocupada com o bem-estar do trabalhador. Salário alto e oportunidades de crescimento."
        },
        {
            "id": 2,
            "nome": "Ana Fernandes Souza",
            "email": "anafs123@gmail.com",
            "empresa": "IBM",
            "nota": 2,
            "comentario": "Jornada de trabalho intensa sem gratificações. Fui demitida sem justa causa pelo RH. Salário alto e boa estrutura."
        },
        {
            "id": 3,
            "nome": "Lana Del Rey",
            "email": "laninhadelrey@hotmail.com",
            "empresa": "Informática LTDA",
            "nota": 4,
            "comentario": "Estrutura boa e ambiente respeitoso. Salário compatível com o mercado e oportunidades de crescimento dentro da empresa."
        },
    ]
}

// Caso os dados já estejam no Local Storage, caso contrário, carrega os dados iniciais
var db = JSON.parse(localStorage.getItem('db_contato'));
if (!db) {
    db = db_contatos_inicial
};

// Exibe mensagem em um elemento de ID msg
function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function insertContato(contato) {
    // Calcula novo Id a partir do último código existente no array (PODE GERAR ERRO SE A BASE ESTIVER VAZIA)
    let novoId = 1;
    if (db.data.length != 0) 
      novoId = db.data[db.data.length - 1].id + 1;
    let novoContato = {
        "id": novoId,
        "nome": contato.nome,
        "email" : contato.email,
        "empresa" : contato.empresa,
        "nota": contato.nota,
        "comentario": contato.comentario
    };

    // Insere o novo objeto no array
    db.data.push(novoContato);
    displayMessage("Contato inserido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_contato', JSON.stringify(db));
}

function updateContato(id, contato) {
    // Localiza o indice do objeto a ser alterado no array a partir do seu ID
    let index = db.data.map(obj => obj.id).indexOf(id);

    // Altera os dados do objeto no array
    db.data[index].nome = contato.nome,
    db.data[index].email = contato.email,
    db.data[index].cidade = contato.empresa,
    db.data[index].categoria = contato.nota,
    db.data[index].website = contato.comentario,

    displayMessage("Contato alterado com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_contato', JSON.stringify(db));
}

function deleteContato(id) {    
    // Filtra o array removendo o elemento com o id passado
    db.data = db.data.filter(function (element) { return element.id != id });

    displayMessage("Contato removido com sucesso");

    // Atualiza os dados no Local Storage
    localStorage.setItem('db_contato', JSON.stringify(db));
}