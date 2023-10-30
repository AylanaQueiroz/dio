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


function testeIn(){
    document.getElementById("testeInner").innerHTML="mudar"
}



let velAtingida = document.getElementById("velCarro");

const velocidadeMaxima = 80;
let resultado = document.getElementById("resultadoVelocidade");

function radarDeVelocidade(){
    
    
    if (velAtingida.value >= velocidadeMaxima) {
        resultado.innerHTML = "VOCÊ FOI MULTADO"
    }    else resultado.innerHTML ="Pode prosseguir com segurança"

}

//