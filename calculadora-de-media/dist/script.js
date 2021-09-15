var nome = document.getElementById('nome');
var notaDoPrimeiroBimestre = document.getElementById('notaA');
var notaDoSegundoBimestre = document.getElementById('notaB'); 
var notaDoTerceiroBimestre = document.getElementById('notaC'); 
var notaDoQuartoBimestre = document.getElementById('notaD'); 
var notaMedia;
var botaoCalcular = document.getElementById('botaoCalcular');

function calcularMedia(){
  nomeDoAluno = nome.value;
  primeiraNota = notaDoPrimeiroBimestre.value;
  segundaNota =  notaDoSegundoBimestre.value; 
  terceiraNota = notaDoTerceiroBimestre.value; 
  quartaNota = notaDoQuartoBimestre.value; 

  notaMedia = ((+primeiraNota + +segundaNota + +terceiraNota + +quartaNota)/4).toFixed(1);

}

function mostraResultado(){
  var resultado = document.getElementById('resultado')
  resultado.innerHTML = nomeDoAluno + ", sua média é: " + notaMedia + ".";
  
  var resultadoFinal = document.getElementById('resultadoFinal')
  if(notaMedia >= 7) {
   resultadoFinal.innerHTML = "Parabéns, você está aprovado(a)!";
  } else {
    resultadoFinal.innerHTML = "Você foi reprovado(a).";
  }
}

botaoCalcular.addEventListener('click', function(e){
  calcularMedia();
  mostraResultado();
});

//Revisão: 1. Variáveis, strings, console.log, toFixed, operações matemáticas, concatenação. //