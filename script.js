document.addEventListener("DOMContentLoaded", function() {
    // Captura o formulário
    var formulario = document.getElementById("formulario");

    // Adiciona um evento de envio ao formulário
    formulario.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita o envio padrão do formulário

        // Obtém os valores dos campos do formulário
        var nome = document.getElementById("nome").value;
        var email = document.getElementById("email").value;
        var telefone = document.getElementById("telefone").value;
        var nascimento = document.getElementById("nascimento").value;
        var cep = document.getElementById("cep").value;
        var logradouro = document.getElementById("logradouro").value;
        var numero = document.getElementById("numero").value;
        var bairro = document.getElementById("bairro").value;
        var cidade = document.getElementById("cidade").value;

        // Redireciona o usuário para a página de destino com os dados como parâmetros da URL
        window.location.href = "pagina_destino.html?nome=" + encodeURIComponent(nome) +
                                "&email=" + encodeURIComponent(email) +
                                "&telefone=" + encodeURIComponent(telefone) +
                                "&nascimento=" + encodeURIComponent(nascimento) +
                                "&cep=" + encodeURIComponent(cep) +
                                "&logradouro=" + encodeURIComponent(logradouro) +
                                "&numero=" + encodeURIComponent(numero) +
                                "&bairro=" + encodeURIComponent(bairro) +
                                "&cidade=" + encodeURIComponent(cidade);

        // Extrair os parâmetros da URL
        var params = new URLSearchParams(window.location.search);

        // Obter os valores dos parâmetros
        var nomeParam = params.get('nome');
        var emailParam = params.get('email');
        var telefoneParam = params.get('telefone');
        var nascimentoParam = params.get('nascimento');
        var cepParam = params.get('cep');
        var logradouroParam = params.get('logradouro');
        var numeroParam = params.get('numero');
        var bairroParam = params.get('bairro');
        var cidadeParam = params.get('cidade');

        // Inserir os dados no HTML da página
        var dadosFormulario = document.getElementById('dados-formulario');
        dadosFormulario.innerHTML = "<p><strong>Nome:</strong> " + nomeParam + "</p>" +
                                     "<p><strong>Email:</strong> " + emailParam + "</p>" +
                                     "<p><strong>Telefone:</strong> " + telefoneParam + "</p>" +
                                     "<p><strong>Nascimento:</strong> " + nascimentoParam + "</p>" +
                                     "<p><strong>CEP:</strong> " + cepParam + "</p>" +
                                     "<p><strong>Logradouro:</strong> " + logradouroParam + "</p>" +
                                     "<p><strong>Número:</strong> " + numeroParam + "</p>" +
                                     "<p><strong>Bairro:</strong> " + bairroParam + "</p>" +
                                     "<p><strong>Cidade:</strong> " + cidadeParam + "</p>";
    });
});