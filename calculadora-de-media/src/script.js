var nome;
var notaDoPrimeiroBimestre;
var notaDoSegundoBimestre;
var notaDoTerceiroBimestre;
var notaDoQuartoBimestre;
var notaMedia;
var botaoCalcular = document.getElementById('botaoCalcular');

function calcularMedia(){
  nome = prompt("Olá! Informe o seu nome: ");
  notaDoPrimeiroBimestre = prompt("Informe sua nota do primeiro bimestre: ");
  notaDoSegundoBimestre = prompt("Informe sua nota do segundo bimestre: "); 
  notaDoTerceiroBimestre = prompt("Informe sua nota do terceiro bimestre: "); 
  notaDoQuartoBimestre = prompt("Informe sua nota do quarto bimestre: "); 

  notaMedia = ((+notaDoPrimeiroBimestre + +notaDoSegundoBimestre + +notaDoTerceiroBimestre + +notaDoQuartoBimestre)/4).toFixed(1);
}

function mostraResultado(){
  var resultado = document.getElementById('resultado')
  resultado.innerHTML = nome + ", sua média é: " + notaMedia + ".";
  
  var resultadoFinal = document.getElementById('resultadoFinal')
  if(notaMedia >= 7) {
   resultadoFinal.innerHTML = "Parabéns, você está aprovado!";
  } else {
    resultadoFinal.innerHTML = "Você foi reprovado.";
  }
}

botaoCalcular.addEventListener('click', function(e){
  calcularMedia();
  mostraResultado();
});

//Revisão: 1. Variáveis, strings, console.log, toFixed, operações matemáticas, concatenação. //