window.addEventListener("load", ()=>{
    const botaoClicar = document.querySelector("#btn")

    botaoClicar.addEventListener("click", ()=>{
        // const textoCaixa = document.querySelector("#caixa")

        // textoCaixa.innerHTML = 'Este é o texto alterado'


        // // AJAX

        // criamos o obj request
        let request = new XMLHttpRequest();

        // funcao que vai atuar na repsposta

        request.onreadystatechange = function(){
            const textoCaixa = document.querySelector("#caixa")

            textoCaixa.innerHTML = this.responseText;
        }

        request.open("GET", "./texto.txt", true)

        request.send();




    })

})