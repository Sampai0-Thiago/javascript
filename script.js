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

const radioFeminino = document.getElementById('feminino')
const radioMasculino = document.getElementById('masculino')
const perguntaAnos = document.getElementById('anosCasada')
const campoAnos = document.getElementById('tempoCasada')
const resumoCasamento = document.getElementById('resumoCasamento')

function atualizarCasamento() {
  const feminina = radioFeminino.checked
  const estadoCivil = document
    .getElementById('estadoCivil')
    .value.trim()
    .toLowerCase()
  const casada = estadoCivil === 'casada'

  let devePerguntarTempo = false

  if (feminina && casada) {
    devePerguntarTempo = true
  }

  if (devePerguntarTempo) {
    perguntaAnos.style.display = 'flex'
  } else {
    perguntaAnos.style.display = 'none'
  }

  if (!devePerguntarTempo || campoAnos.value === '') {
    resumoCasamento.style.display = 'none'
    return
  }

  resumoCasamento.value =
    `Nome: ${document.getElementById('nome').value}\n` +
    `Estado civil: ${document.getElementById('estadoCivil').value}\n` +
    `Sexo: Feminino\nTempo de casada: ${campoAnos.value} anos`
  resumoCasamento.style.display = 'block'
}

radioFeminino.addEventListener('change', atualizarCasamento)
radioMasculino.addEventListener('change', atualizarCasamento)
campoAnos.addEventListener('input', atualizarCasamento)
document.getElementById('nome').addEventListener('input', atualizarCasamento)
document
  .getElementById('estadoCivil')
  .addEventListener('input', atualizarCasamento)
