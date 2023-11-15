const nome = [];

$(document).ready(function () {
    $('form').on('submit', function (e) {
        e.preventDefault();

        var tarefa = $("#tarefa").val();

        const novoItem = $("<li>" + tarefa + "</li>");

        const inputFormContato = document.getElementById('tarefa');

        /* impossibilita adicionar atividades duplicadas com o mesmo nome */
        if (nome.includes(inputFormContato.value)) {
            alert(`O nome: ${inputFormContato.value} ja foi inserido`);
            return false;
        } else {
            nome.push(inputFormContato.value);
        }

        $("#tarefas").append(novoItem);
        $("#tarefa").val("");

        $("#tarefas li").click(function() {
            $(this).css("text-decoration", "line-through");
        });
    });
});