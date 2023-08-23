function navMobile() {
  let botaoAbrir = window.document.querySelector("button#menu-fechado")
  let botaoFechar = window.document.querySelector("button#menu-aberto")
  let nav = window.document.querySelector("nav")

  if (botaoAbrir.style.display != "none") {
    botaoAbrir.style.display = "none"
    botaoFechar.style.display = "flex"
    nav.style.display = "flex"
  } else {
    botaoAbrir.style.display = "flex"
    botaoFechar.style.display = "none"
    nav.style.display = "none"
  }
}
