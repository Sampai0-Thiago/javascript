function somar() {
  let A = parseFloat(document.getElementById('A').value)
  let B = parseFloat(document.getElementById('B').value)
  let C = parseFloat(document.getElementById('C').value)

  let resultado = A + B
  if (resultado < C) {
    document.getElementById('result').style.display = 'inline-block'
    document.getElementById('result').value =
      `Ótimo, a soma é menor do que 'C'.\nResultado = ${resultado} `
  }
}
