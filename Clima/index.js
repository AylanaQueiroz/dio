function informarClima() {

  const climaAgora =   fetch ('https://api.openweathermap.org/data/2.5/weather?q=orlando&appid=46bbf8fe32bbd679e3c3ef640f7f251f')

    console.log (climaAgora)

}

informarClima()