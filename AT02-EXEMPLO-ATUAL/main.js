const botaoCarregarDados = document.querySelector("#loadData")

botaoCarregarDados.addEventListener("click", ()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
        if(!response.ok) throw new Error('Erro na resposta do servidor')
        return response.json()
    })
    .then(data =>{
        document.querySelector("#response").innerHTML = JSON.stringify(data)
    })
    .catch(error =>{
        console.error("ERRO", error)
        document.querySelector("response").innerHTML = 'Erro ao carregar os dados'
    })
})