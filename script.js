function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")
  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adc a imagem light
    img.setAttribute("src", "./assests/avatar-light.png")
    ("alt", "Foto de Gabriel sorrindo, barba curta, piercing na orelha, camisa verde, fundo cinza")
  } else {
    //se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "img minha.png")
    ("alt", "Foto de Gabriel agachado, brincando com o gato, de óculos, camisa azul e bermuda bege, com uma casa ao fundo")
  }
}
