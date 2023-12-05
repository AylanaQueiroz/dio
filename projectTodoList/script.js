
//var novoParagrafo = document.createElement("p");


//var texto =  document.createTextNode("este texto é um teste");

//novoParagrafo.appendChild(texto);

//console.log(novoParagrafo);

//var body = document.querySelector("body");
//console.log(body);



//var inserirnoP = document.querySelector(".testep")

//nserirnoP.appendChild(novoParagrafo)

//body.appendChild(novoParagrafo);

// toDo list

const buttonNewtask = document.querySelector('.new-task-button');
const taskBox = document.querySelector('.task-box')
buttonNewtask.addEventListener('click', newTask)



//const botaoDeletar = document.querySelector('#lixo');
//botaoDeletar.addEventListener('click', deletarTarefa);




function newTask() {


    var novaTaskNomeada = document.querySelector('.inputTask')
    event.preventDefault();
    console.log(novaTaskNomeada.value)

    const taskItem = document.createElement("div");
    taskItem.classList.add('task-item');
    taskBox.appendChild(taskItem)


    const inputItemCheck = document.createElement("input")
    inputItemCheck.type = 'checkbox'
    taskItem.appendChild(inputItemCheck)

    const paragrafo = document.createElement("p")
    var texto = document.createTextNode(novaTaskNomeada.value)
    novaTaskNomeada.value = ''
    taskItem.appendChild(texto)
    tt = texto


    const novoButaoLixo = document.createElement("button")
    taskItem.appendChild(novoButaoLixo)

    const iconeLixeira = document.createElement("i")
    iconeLixeira.classList.add('bi');
    iconeLixeira.classList.add('bi-trash');
    novoButaoLixo.appendChild(iconeLixeira)

    taskItem.appendChild(novoButaoLixo)

    novoButaoLixo.addEventListener('click', deletarTarefa)

    var c = document.querySelector('.inputTask')


}


inputItemCheck.addEventListener('click', tarefaConcluida)

function deletarTarefa(e) {

    console.log(e);
    e.target.parentElement.parentElement.remove();

    console.log('teste')

}



inputItemCheck.addEventListener('click', tarefaConcluida)


function tarefaConcluida(e) {

    inputItemCheck.addEventListener('click', tarefaConcluida)
    console.log('éuque')



    e.target.parentElement.style.textDecoration = "line-through"
    console.log(e.target.parentElement)


}



function risco(e) {


}

