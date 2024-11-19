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

            // this == pedido
            // verifica se o arquivo foi encontrado e o status é OK
            if(this.readyState == 4 && this.status == 200){
                textoCaixa.innerHTML = this.responseText;
            } else {
                textoCaixa.innerHTML = 'ERRO TENTE MAIS TARDE'
            }

            
        }

        const urlCerta =  "./texto.txt"
        const urlErrada =  "./abcde.txt"

        // experimnetar usar a url certa
        request.open("GET", urlCerta, true)

        // USAR POST CASO O ARQUIVO NAO SERÀ DEVOLVIDO (EX: CRIAR PASTAS NO SERVIDOR, ATUALIZAR BASE DE DADOS SERVIDOR)
        // USAR POST QUANDO DESEJAMOS ENVIAR UMA QUANTIDADE MAIOR DE INFORMACOES (MAIS SEGURO, MAIS TAMANHO, MAIS ROBUSTO)
        // USAR POST QUANDO PEGAR FORMULARIOS DE HTML
        

        request.send();


    })

})