

let taskButton = document.querySelector('#plusButton')

function addTask() {

    console.log('add'); {
        event.preventDefault()
    }
}

taskButton.addEventListener('click',addTask)


// adicionar nova tarefa 

//let div = document.createElement('div');
//div.classList.add('diveer');
//let text = document.createTextNode('Testeee');
//div.appendChild(text);
//document.body.appendChild(div)


let taskItem = document.createElement('div');
taskItem.classList.add('task-box');
let text =  document.createTextNode('Do the homework');
taskItem.appendChild(text);
document.body.appendChild(taskItem);