const botaoPlus = document.querySelector('#plusButton');

const divTaskBox = document.querySelector('.task-box');

const campoInputFixo = document.querySelector('.inputTask')




//event.preventDefault() // coloco para conseguir manter a informação que havia aqui antes da pagina renderizar// d


botaoPlus.addEventListener('click', novaTarefa);


function novaTarefa() {

    const novaDiv = document.createElement('div'); //criar uma nova div
    novaDiv.classList.add('task-item');
    divTaskBox.appendChild(novaDiv);

    const novoInput = document.createElement('input');
    novoInput.setAttribute("type", 'checkbox');
    novaDiv.appendChild(novoInput); // acrescenta o input à nova Div criada anteriormente

    novoInput.addEventListener('click', tarefaConcluida) //Criado aqui um eventListener para chamar outra função, quando a tarefa estiver concluída
    
    
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

    campoInputFixo.value = ' ' // para limpar o campo do input principal toda vez que for renderizado

    btnExcluir.addEventListener('click', deletarTarefa)  // DECLARO AQUI UM ONCLICK PARA A NOVA FUNÇÃO QUE CRIAREI, PRECISA SER DECLARADO DENTRO DE UMA FUNCTION
    //SENÃO NAO FUNCIONA



    function deletarTarefa() {

        
        novaDiv.remove()


}
}

/*function deletarTarefa() {

    //console.log(event.target); //event.target é para mostrar de onde está vindo o evento 
    //e.target.parentElement.parentElement.remove() // é necessário utilizar 2 parentElements porque o .parentElement elimina apenas o filho, então 2 eliminará os
    //2 filhos (engloando toda a DIV assim)
    console.log(event.target)
   
    
}
*/
function tarefaConcluida(e) {
     
   e.target.parentElement.classList.toggle('is-active')  //toggle é marailhoso, Fazer o toggle de uma classe. Isto é, adicionar a classe se não existir e, caso contrário, remover:
   
                                                                    //element.classList.toggle('is-active'); assim quando clica novamente no checkbox ele retira a classe e tira o ''line-thru''
 
                                                                   
}