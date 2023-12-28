const pesquisar = document.querySelector('#botaoBuscar')
const cidade = document.querySelector('.inputCidade')
const divBody = document.querySelector('.climaAqui')
const buscarCidade = cidade.value

pesquisar.addEventListener('click', informarClima)

async function informarClima() {

    const chave = '46bbf8fe32bbd679e3c3ef640f7f251f';
    const cidade = document.querySelector('.inputCidade')
    const idioma = 'pt_br'
    const buscarCidade = cidade.value

    console.log(buscarCidade)
    event.preventDefault();
    const climaAgora = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${buscarCidade}&appid=${chave}&lang=${idioma}`)
    //const climaAgora = await fetch("https://jsonplaceholder.typicode.com/posts")

    console.log(climaAgora)

    const data = await climaAgora.json()

    console.log(data)
    //data.map((weather) => {
    for (const product of data.weather) {

        //titulo.innerText =  product.id
        const novaDiv = document.createElement('div');
        const titulo = document.createElement('h2')
        const corpo = document.createElement('p')

        titulo.innerText = ('O Clima em ' + buscarCidade + ' apresenta-se de: ' + product.description)

        console.log(titulo)

        novaDiv.appendChild(titulo);
        novaDiv.appendChild(corpo)


        divBody.appendChild(novaDiv)



        cidade.addEventListener('click', limparCampo)

        function limparCampo() {
            novaDiv.style.display = 'none'
        }

    }

}





/*
console.log(data)

 const novaDiv = document.createElement('div')
 divBody.appendChild(novaDiv)

 const novoParagrafo = document.createElement('p')
 

 novoParagrafo.innerText = ('A temperatura a minha cidade é ')
 divBody.appendChild(novoParagrafo)

 cidade.value = ' '

 
 
 
 
 
mostrarClima(data)

 data.map((weather) =>{
     const divResultado = document.createElement('div')
     const temperatura = document.createElement('p')
 
     temperatura.innerText = weather.clouds

 
     divResultado.appendChild(temperatura)
 
 
     console.log(divResultado)
    })


 
}*/


/*
data.map((weather) =>{
    const divResultado = document.createElement('div')
    const temperatura = document.createElement('p')

    temperatura.innerText = weather.clouds

    divResultado.appendChild(temperatura)


    console.log(temperatura)
   })

    
*/



