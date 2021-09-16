var numeroSecreto = parseInt(Math.random() * 11);
var elementoResultado = document.getElementById("resultado");
var tentativas = 3;

function Chutar() {
  while (tentativas > 0) {
    var chute = parseInt(document.getElementById("valor").value);
    if (chute < 0 || chute > 10 || isNaN(chute)) {
      elementoResultado.innerHTML =
        "Não foi possível realizar a jogada. Digite um número de 0 a 10.";
    }
    tentativas--;
    if (chute == numeroSecreto) {
      elementoResultado.innerHTML =
        "Você acertou! O número sorteado foi " + numeroSecreto + ".";
      return;
    } else if (chute > numeroSecreto && tentativas > 0) {
      elementoResultado.innerHTML =
        "Você errou! O número sorteado é menor do que " +
        chute +
        ". Tente mais uma vez.";
      return;
    } else if (chute < numeroSecreto && tentativas > 0) {
      elementoResultado.innerHTML =
        "Você errou! O número sorteado é maior do que " +
        chute +
        ". Tente mais uma vez.";
      return;
    }
  }
  elementoResultado.innerHTML =
    "Suas tentativas esgotaram e você não conseguiu adivinhar. O número secreto é " +
    numeroSecreto +
    ".";
  return;
}

function Reiniciar() {
  document.getElementById("resultado").innerHTML = "";
  document.getElementById("valor").value = "";
  numeroSecreto = parseInt(Math.random() * 11);
  tentativas = 3;
}