const pesquisar = document.querySelector('#botaoBuscar')

pesquisar.addEventListener('click', informarClima)

async function informarClima() {

    const chave = '46bbf8fe32bbd679e3c3ef640f7f251f';
    const cidade = 'goiania'
    

    const climaAgora = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${chave}`)

    console.log(climaAgora)

    const data = await climaAgora.json()

    console.log(data)

    
 
}

informarClima()

//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=${appkey}