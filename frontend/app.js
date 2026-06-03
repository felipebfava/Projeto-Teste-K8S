
async function buscarMensagem() {
    const resposta = await fetch("/api/message");

    const dados = await resposta.json();

    document.getElementById("resultado").innerText = 
        dados.message;
}