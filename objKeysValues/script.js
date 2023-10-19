// Objeto pessoa
var pessoa = {
    nome: "Pimponha",
    idade: 30,
    profissao: "Palhaço"
};

// Função para atualizar o valor na div
function atualizarValorPropriedade() {
    var select = document.getElementById("propriedadeSelect");
    var escolha = select.value;
    var valor = pessoa[escolha];
    var propriedadeValorDiv = document.getElementById("propriedadeValor");
    propriedadeValorDiv.innerHTML = "Valor da propriedade: " + valor;
}

// Event listener para atualizar o valor quando a opção é alterada
var selectElement = document.getElementById("propriedadeSelect");
selectElement.addEventListener("change", atualizarValorPropriedade);

// Inicialmente, exibir o valor da propriedade selecionada
atualizarValorPropriedade();