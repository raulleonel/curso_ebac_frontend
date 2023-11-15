$(document).ready(function () { /* Inicializar o código > O método $(document).ready() garante que o código dentro dele seja executado apenas depois que o documento HTML foi totalmente carregado. Isso garante que todos os elementos necessários estejam disponíveis antes que o código tente interagir com eles. */
    $('form').on('submit', function (e) { /* Lidar com o envio do formulário > Este código usa o método .on() do jQuery para anexar um manipulador de eventos ao elemento form. O manipulador de eventos é acionado sempre que o formulário é enviado. O parâmetro e representa o objeto de evento, que contém informações sobre o evento. */
        e.preventDefault(); /* Prevenir o comportamento padrão do formulário > Esta linha usa o método e.preventDefault() para impedir o comportamento padrão do envio do formulário, que é recarregar a página. Isso nos permite lidar com o envio do formulário sem realmente enviar o formulário para o servidor. */

        var tarefa = $("#tarefa").val(); /* Obter o valor do campo de entrada da tarefa > Esta linha recupera o valor do campo de entrada com o ID tarefa. O valor representa o texto inserido pelo usuário como descrição da tarefa. */

        const novoItem = $("<li>" + tarefa + "</li>"); /* Criar um novo item da lista > Esta linha cria um novo elemento HTML <li> usando o $() do jQuery, que leva uma string representando o conteúdo HTML como argumento. A descrição da tarefa é inserida dentro da tag <li>. */

        $("#tarefas").append(novoItem); /* Adicionar o novo item da lista à lista > Esta linha anexa o elemento <li> recém-criado ao elemento <ul> com o ID tarefas. Isso efetivamente adiciona a nova tarefa à lista. */
        $("#tarefa").val(""); /* Limpar o campo de entrada da tarefa > Esta linha limpa o valor do campo de entrada com o ID tarefa. Isso garante que o campo de entrada esteja vazio após cada tarefa ser adicionada à lista. */

        $("#tarefas li").click(function() { /* Adicionar um manipulador de eventos de clique aos itens da lista > Esta linha anexa um manipulador de eventos de clique a todos os elementos <li> dentro do elemento <ul> com o ID tarefas. O manipulador de eventos é acionado sempre que um item da lista é clicado. */
            $(novoItem).css("text-decoration", "line-through"); /* Aplicar a decoração de linha através do item clicado > Esta linha aplica a propriedade CSS text-decoration com o valor line-through ao elemento novoItem. Isso efetivamente desenha uma linha através do texto do item da lista clicado, marcando-o como concluído. */
            });
    });

    })