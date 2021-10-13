var valorDoKm = document.getElementById("valorEmKm");
var anoLuz = 9460800000000;
var distanciaEstrela = document.getElementById("valorDaDistancia");

//Conversor de KM em ano-luz 

function converteDistancia(){
  distanciaEmKm = valorDoKm.value;
  
  kmEmAnoLuz = (distanciaEmKm / anoLuz).toFixed(12); 
}

function mostraResultado(){
  var resultadoAnoLuz = document.getElementById('resultadoAnoLuz')
  resultadoAnoLuz.innerHTML = distanciaEmKm + " quilômetros equivale a " + kmEmAnoLuz + " anos-luz de distância.";
}

botaoConverter.addEventListener('click', function(e){
  converteDistancia();
  mostraResultado();
});

// Distância entre Estrelas 

function converteDistanciaEstrela(){
  distanciaEstrelaEmKm = distanciaEstrela.value;
  kmEmAnoLuz = (distanciaEstrelaEmKm / anoLuz).toFixed(12);
  tempo = (kmEmAnoLuz * 31536000).toFixed(1);  
}

function mostraResultadoEstrela(){
  var resultadoEstrela = document.getElementById('resultadoEstrela')
  resultadoEstrela.innerHTML = "A distância informada seria percorrida em " + tempo + " segundos.";
}

botaoConverterEstrela.addEventListener('click', function(e){
  converteDistanciaEstrela();
  mostraResultadoEstrela();
});