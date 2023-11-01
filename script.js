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
    red.src = "./img/greenButton.avif"
    //green.src = "./img/redButton.avif"
}

botaoON.addEventListener('click', changeImgToGreen)