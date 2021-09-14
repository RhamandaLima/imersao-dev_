var nome = "Guilherme"; 
var notaDoPrimeiroBimestre = 9;
var notaDoSegundoBimestre = 7; 
var notaDoTerceiroBimestre = 4; 
var notaDoQuartoBimestre = 2; 
 
var notaFinal = (notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre) / 4; 

var notaFixada = notaFinal.toFixed(1)

document.write("Bem vindo, " + nome + "!" + "<br>")
document.write("Sua média é " + notaFixada + "." + "<br>")

if(notaFinal >= 7) {
  document.write("Parabéns, você está aprovado!")
} else {
  document.write("Você foi reprovado.")
}

//Revisão: 1. Variáveis, strings, console.log, toFixed, operações matemáticas, concatenação. //