        // Objeto pessoa
        var pessoa = {
            nome: "McShadow",
            idade: 132,
            profissao: "Mágico"
        };

        // Função para selecionar o valor da propriedade
        function selecionarValorPropriedade(objeto, propriedade) {
            return objeto[propriedade];
        }

        // Função para atualizar o valor na div
        function atualizarValorPropriedade() {
            var select = document.getElementById("propriedadeSelect");
            var escolha = select.value;
            var valor = selecionarValorPropriedade(pessoa, escolha);
            var propriedadeValorDiv = document.getElementById("propriedadeValor");
            propriedadeValorDiv.innerHTML = "Valor da propriedade: " + valor;
        }

        // Event listener para atualizar o valor quando a opção é alterada
        var selectElement = document.getElementById("propriedadeSelect");
        selectElement.addEventListener("change", atualizarValorPropriedade);

        // Inicialmente, exibir o valor da propriedade selecionada
        atualizarValorPropriedade();