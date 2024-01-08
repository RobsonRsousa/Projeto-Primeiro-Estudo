function toggleMode() {
  const html = document.documentElement

  //if (html.classList.contains("light")) {
  //html.classList.remove("light")
  //} else {
  // html.classList.add("light")
  //}
  html.classList.toggle("light")

  //substituir a imagem
  //pegar a tag da imagem igual css mas com querySelector
  const img = document.querySelector("#profile img")
  // se tiver light adicionar a imagem light
  // se tiver sem dark mode manter a imagem normal
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./Imagens/avatar-light.png")
  } else {
    img.setAttribute("src", "./Imagens/avatar.png")
  }
}
