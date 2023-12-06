const botaoPlus = document.querySelector('#plusButton');

const divTaskBox = document.querySelector('.task-box');




//event.preventDefault() // coloco para conseguir manter a informação que havia aqui antes da pagina renderizar// d






botaoPlus.addEventListener('click', novaTarefa);


function novaTarefa() {

    const novaDiv = document.createElement('div'); //criar uma nova div
    novaDiv.classList.add('task-item');
    divTaskBox.appendChild(novaDiv);

    const novoInput = document.createElement('input');
    novoInput.setAttribute("type", 'checkbox');
    novaDiv.appendChild(novoInput); // acrescenta o input à nova Div criada anteriormente

    const entradaInputt = document.querySelector('.inputTask');
    event.preventDefault();
    const entradaInputComValor = entradaInputt.value;// indicando pegar o valor do input
    console.log(entradaInputComValor);

    const paragrafo = document.createElement('p');
    paragrafo.innerText = (entradaInputComValor);
    //document.body.appendChild(paragrafo)
    novaDiv.appendChild(paragrafo);

    const btnExcluir = document.createElement('button');
    novaDiv.appendChild(btnExcluir);

    const iconeLixo = document.createElement('i');
    iconeLixo.classList.add('fa-trash'); // acrescenta-se os dois nomes de classe do ícone
    iconeLixo.classList.add('fa-solid');
    btnExcluir.appendChild(iconeLixo);

}

