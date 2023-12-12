const url = 'https://api.chucknorris.io/jokes/random'; 

 async function getData() {    // a function ainda n é executada, vai executar primeiro a linha 15 console.log ('a')

    console.log ('c') //executa direto o C ssincronamente 
    const response = await fetch(url); // esperar pela resposta e sai da function, indo pra linha 18
    
    console.log('d') 
    const responsejson = await response.json()

    console.log('e') 
    console.log(responsejson)
 }

 console.log('a')

 getData()
 console.log ('b')

 //  a -> a é o primeiro a ser executado pq a function é chamada DEPOIS que á está declarado 
 // c ->  chamou a funtion, primeira coisa linha 5 printa c , na linha 6 qdo chama o await SAIMOS DA FUNCTION pra esperar a promesse
 //  b -> qd sai da function a proxima linha a ser executada é a linha 18 printando assim o b
 // QDO CHEGAR O RESPONSE VAMOS PRA LINHA 8 CONSOLE.LOG DE D
 // d -> assim que o response(linha 6) chega o d é printado 
 // e -> como o response ja chegou, segue para linha 11 consolee.log de e
 // por fim console.log de responsejson