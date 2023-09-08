function navMobile() {
  //Variáveis
  let botaoAbrir = window.document.querySelector("button#menu-fechado")
  let botaoFechar = window.document.querySelector("button#menu-aberto")
  let nav = window.document.querySelector("nav")
  let body = window.document.querySelector("body")

  if (botaoAbrir.style.display != "none") {
    //Abrir nav
    botaoAbrir.style.display = "none"
    botaoFechar.style.display = "flex"
    nav.style.opacity = 1

    body.style.overflow = "hidden" //Impede rolagem do conteúdo quando nav estiver aberto
  } else {
    //Fechar nav
    botaoAbrir.style.display = "flex"
    botaoFechar.style.display = "none"
    nav.style.opacity = 0

    body.style.overflow = "auto" //Restaura rolagem ao fechar nav
  }
}
