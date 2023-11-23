
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


function newTask(){

    event.preventDefault();
    console.log('add')

    const taskItem =  document.createElement("div");
    taskItem.classList.add('task-item');

    taskBox.appendChild(taskItem)

    const inputItem = document.createElement("input")
    inputItem.type = 'checkbox'
    
    taskItem.appendChild(inputItem)

    const paragrafo = document.createElement("p")
    var texto = document.createTextNode (' Do the homework')
    taskItem.appendChild(texto)



    const novoButaoLixo = document.createElement("button")
    taskItem.appendChild(novoButaoLixo)

    const iconeLixeira = document.createElement("i")
    iconeLixeira.classList.add('bi');
    iconeLixeira.classList.add('bi-trash');
    novoButaoLixo.appendChild(iconeLixeira)

    taskItem.appendChild(novoButaoLixo)


    
    

    

   


    
}





