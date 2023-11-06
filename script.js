function turnOn() {
    document.getElementById("imgLightOff").style.display = 'none'
    document.getElementById("imgLightOn").style.display = 'block'

}


function turnOff() {
    document.getElementById("imgLightOff").style.display = 'block'
    document.getElementById("imgLightOn").style.display = 'none'


}


function changeP() {
    document.getElementById("pTest").innerHTML = 'I have changed'
}


function testeIn() {
    document.getElementById("testeInner").innerHTML = "mudar"
}



let velAtingida = document.getElementById("velCarro");

const velocidadeMaxima = 80;
let resultado = document.getElementById("resultadoVelocidade");

function radarDeVelocidade() {


    if (velAtingida.value >= velocidadeMaxima) {
        resultado.innerHTML = "VOCÊ FOI MULTADO"
    } else resultado.innerHTML = "Pode prosseguir com segurança"

}


const teste = document.getElementById('gtest')
console.log(teste)


const lampadaLigada = document.querySelector('#lampadaOnTeste');

function desligarTeste() {
    lampadaLigada.src = "./img/lightOff.jpg"
}

//exercício luz verde e luz vermelha utilizando o addEventListenner

/*var green = document.querySelector('#testGreen');

function changeImg() {
    green.src="./img/redButton.avif"
}

green.addEventListener('click',changeImg)*/


var botaoOff = document.querySelector('#btnOff');
var green = document.querySelector('#testGreen');
var botaoON = document.querySelector('#btnON');
var red = document.querySelector('#testRed')



function changeImgToRed() {
    // botaoOff.src="./img/redButton.avif"
    green.src = "./img/redButton.avif"

}

botaoOff.addEventListener('click', changeImgToRed)



function changeImgToGreen() {
    green.src = "./img/greenButton.avif"
    //green.src = "./img/redButton.avif"
}

botaoON.addEventListener('click', changeImgToGreen)

//Eventos com teclado:

let inputKey = document.querySelector('#testKey')

function shootAlert() {

    alert("Botão apertado")
}

inputKey.addEventListener('keydown', shootAlert)


//evento onfocus


var focus = document.querySelector("#testOnfocus")

function onFocus() {
    console.log("testando Onfocus")
}

focus.addEventListener('focus', onFocus)

//evento OnBlur

var blur = document.querySelector('#cidade')

function onBlur() {
    console.log("testando efeito Onblur")
}

blur.addEventListener('blur', onBlur)

//evento OnChange

var change = document.querySelector('#estadoCivil')

function onChange() {
    alert("Completou certinho?")

}

change.addEventListener('change', onChange)

//evento OnInput

var input = document.querySelector('#profissao')

function onInput() {

    console.log("testando efeito on INPUTTT")
}

input.addEventListener('input', onInput)

//validação de formulário utilizando Onsubmit




function validateForm() {
    
    const username = document.getElementById("username");
    const password = document.getElementById("password");

   
    if (username.value == "") {
       alert("username must be filled out");{
        event.preventDefault()
       }
       
    }else if (password.value == ""){
         alert("password must be filled out");{
            event.preventDefault()
         }
    }else {
        alert('ok')
    }
}

