$(document).ready(function () {
    const $form = $("form");
    const $inputTarefa = $("input[type='text']");
    const $listaTarefas = $("#lista-tarefas");

    // Adicionar nova tarefa ao clicar no botão "Adicionar"
    $form.on("submit", function (event) {
        event.preventDefault(); // Evita recarregar a página

        const tarefaTexto = $inputTarefa.val().trim(); // Pega o valor do input e remove espaços extras

        if (tarefaTexto !== "") {
            // Criar um novo <li> com a tarefa e adicionar um evento de clique para marcar como concluída
            const $novaTarefa = $("<li></li>").text(tarefaTexto).on("click", function () {
                $(this).toggleClass("concluida"); // Alterna a classe 'concluida' ao clicar
            });

            $listaTarefas.append($novaTarefa); // Adiciona a nova tarefa na <ul>
            $inputTarefa.val(""); // Limpa o campo de input
        } else {
            alert("Por favor, digite uma tarefa!");
        }
    });
});
