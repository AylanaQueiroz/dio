const pesquisar = document.querySelector('#botaoBuscar')
const cidade = document.querySelector('.inputCidade')
const divBody = document.querySelector('.climaAqui')


pesquisar.addEventListener('click', informarClima)



async function informarClima() {



    const chave = '46bbf8fe32bbd679e3c3ef640f7f251f';
    const cidade = document.querySelector('.inputCidade')
    const idioma = 'pt_br'
    const buscarCidade = cidade.value

    console.log(buscarCidade)

    const climaAgora = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${buscarCidade}&appid=${chave}&lang=${idioma}`)

    console.log(climaAgora)

    const data = await climaAgora.json()

    console.log(data)

    const novaDiv = document.createElement('div')
    divBody.appendChild(novaDiv)
    
    const novoParagrafo = document.createElement('p')
    novoParagrafo.innerText =('A temperatura a minha cidade é '   )
    divBody.appendChild(novoParagrafo)
    
    
    

}

informarClima()

