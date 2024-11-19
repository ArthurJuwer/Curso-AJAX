const containerCards = document.querySelector(".container-cards")
const buttonloadMoreCards = document.querySelector("#loadMoreCards")

window.addEventListener("load", ()=>{
    fazerConexao(2)
})

buttonloadMoreCards.addEventListener("click", ()=>{
    let numeroAtualdeCards = document.querySelectorAll(".card").length
    fazerConexao(numeroAtualdeCards+2)
})

function fazerConexao(noticiasMostradas){
    let urlAPi = 'https://jsonplaceholder.typicode.com/users'
    fetch(urlAPi)
    .then(response =>{
        if(!response.ok) throw new Error
        return response.json()
    })
    .then(data =>{
        if(noticiasMostradas > 10){
            alert("todas noticias foram vistas")
        }
        containerCards.innerHTML = ''
        for (let i = 0; i < noticiasMostradas && i < data.length; i++) {
            criarCards(data[i].name, data[i].username, data[i].email, data[i].phone, data[i].company.name);
        }
    })
    .catch(error =>{
        console.error('Erro: ' + error);
    })
}

function criarCards(nome, username, email,celular,empresa){
    let card = document.createElement('div')
    card.setAttribute("class","card")

    card.innerHTML = 
    `
        <h2>Informações de ${nome}</h2>
        <p>empresa: ${empresa}</p>
        <p>username: ${username}</p>
        <p>email: ${email}</p>
        <p>celular: ${celular}</p>
    `
    containerCards.appendChild(card)
}