const form = document.querySelector('.formulario'); // querySelector -> Estamos selecionando a classe formulário

form.addEventListener('submit', (event) => {
  event.preventDefault(); // o método preventDefault impede o envio de um formulário
  const inputPeso = event.target.querySelector('#peso');
  const inputAltura = event.target.querySelector('#altura');
  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  if (isNaN(peso) || isNaN(altura)) { // isNaN verifica se os campos peso e altura são diferentes de Number
    setResultado('Preencha os campos com valores númericos', true);
    return;
  }
  const imc = getImc(peso, altura);
  const resultadoimc = resultadoIMC(imc);

  const messageIMC = `Seu IMC é ${imc} (${resultadoimc})`
  setResultado(messageIMC, false);


});

const resultadoIMC = (imc) => {
  if (imc < 18.5) {
    return 'Abaixo do peso';
  } else if (imc >= 18.5 && imc < 25) {
    return 'Peso ideal';
  } else if (imc >= 25 && imc < 30) {
    return 'Sobrepeso';
  } else if (imc >= 30 && imc < 35) {
    return 'Obesidade grau I';
  } else if (imc >= 35 && imc < 40) {
    return 'Obesidade grau II (severa)';
  } else {
    return 'Obesidade mórbida';
  }
}

// Função para calcular o IMC e retornar a classificação do resultado
const getImc = (peso, altura) => {
  const imc = peso / altura ** 2;
  return imc.toFixed(2);
}


// Função para criar um elemento p (paragrafo) e adicioná-lo ao resultado do formulário
const createParagraph = () => {
  const paragraph = document.createElement('p');
  return paragraph;
}


// Função para setar o resultado do IMC no formulário
const setResultado = (message, isError) => {
  const resultado = document.querySelector('.resultado'); // Aqui também estamos selecionando
  resultado.innerHTML = '';
  const paragrafo = createParagraph();
  paragrafo.innerHTML = message;
  resultado.appendChild(paragrafo);

  // Se isNaN for == true ele vai adicionar a classe .bad que deixa o fundo da div resultado como vermelho
  if (isError) {
    paragrafo.classList.add('bad');
  } else { // Se isNaN for false ele vai adicionar a classe .paragraph-resultado como verde 
    paragrafo.classList.add('paragraph-resultado');
  }

}