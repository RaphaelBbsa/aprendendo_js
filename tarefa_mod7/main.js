document.addEventListener("DOMContentLoaded", function(){
    const form = document.querySelector("form");
    const inputTarefa = document.querySelector("input[type='text']");
    const lista = document.getElementById("lista-tarefas");

    form.addEventListener("submit", function(e){
        e.preventDefault();

        const textoTarefa = inputTarefa.value.trim(); //pego o valor do input e removo espaço extra

        if(textoTarefa !== ""){
            const novaTarefa = document.createElement("li"); //faço criar um li
            novaTarefa.textContent = textoTarefa; //adiciono o texto digitado

            lista.appendChild(novaTarefa); //adicionando li dentro da lu

            inputTarefa.value= ""; //limpando o valor do input
        }else{
            alert("Por favor, digite uma tarefa!");
        }
    })
})