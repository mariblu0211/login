btn = document.getElementById("btn")
nome = document.getElementById("nome")
senha = document.getElementById("senha")
mensagem = document.getElementById("mensagem")

btn.addEventListener("click", function(event){
    event.preventDefault()
    if(nome.value == "admin" && senha.value == "admin"){
        mensagem.classList.add("mensagem-sucesso")
        mensagem.classList.remove("mensagem-erro")
        mensagem.innerHTML = "Logado com sucesso!"
    } else{
        mensagem.classList.add("mensagem-erro")
        mensagem.classList.remove("mensagem-sucesso")
        mensagem.innerHTML = "Usuário ou senha incorretos"
    }
})