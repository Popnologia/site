//Obter tema do sistema
let temaAtual = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark"

aplicarTema()

//Se botão for pressionado
function mudarTema() {
  if (temaAtual == "light") {
    temaAtual = "dark"
  } else {
    temaAtual = "light"
  }

  aplicarTema()
}

//Aplicação do tema
function aplicarTema() {
  //Botões tema claro e escuro
  let botaoClaro = window.document.querySelector("button#tema-claro")
  let botaoEscuro = window.document.querySelector("button#tema-escuro")

  let root = document.documentElement.style //para alterar variáveis CSS

  if (temaAtual == "light") {
    //Ocultar/mostrar botões
    botaoClaro.style.display = "flex"
    botaoEscuro.style.display = "none"

    //ALTERAR VARIÁVEIS

    //Fundo
    root.setProperty("--fundo-solido", "var(--cor10)")

    //Gradiente
    root.setProperty("--gradiente-padrao", "var(--gradiente-claro)")

    //Fundo transparente
    root.setProperty("--fundo-transparente", "var(--fundo-transparente-branco")

    //Texto
    root.setProperty("--cor-texto", "var(--cor-letra-preta)")
  } else {
    //Ocultar/mostrar botões
    botaoClaro.style.display = "none"
    botaoEscuro.style.display = "flex"

    //ALTERAR VARIÁVEIS

    //Fundo
    root.setProperty("--fundo-solido", "#000")

    //Gradiente
    root.setProperty("--gradiente-padrao", "var(--gradiente-escuro)")

    //Fundo transparente
    root.setProperty("--fundo-transparente", "var(--fundo-transparente-preto")

    //Texto
    root.setProperty("--cor-texto", "var(--cor-letra-branca)")
  }
}
