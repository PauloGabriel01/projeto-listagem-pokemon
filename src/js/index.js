const botaoAlternarTema = document.getElementById("botao-alterar-tema")
const body = document.querySelector("body")
const imgTrocaTema = document.querySelector(".imagem-botao")

botaoAlternarTema.addEventListener("click", () => {
    const modoEscuroAtivo = body.classList.contains("modo-escuro")
    body.classList.toggle("modo-escuro")
    if (modoEscuroAtivo) {
        imgTrocaTema.setAttribute("src", "./src/img/sun.png")
    } else {
        imgTrocaTema.setAttribute("src", "./src/img/moon.png")
    }
})
