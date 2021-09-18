var moedaRecebida = document.getElementById("moedaRecebida");
var valorMoedaRecebida = document.getElementById("valorMoedaRecebida");
var moedaEntregue = document.getElementById("moedaEntregue");
var resultado = document.getElementById("resultado");

function converteReal(){
  var quantidadeMoeda = valorMoedaRecebida.value;
  if(moedaRecebida.value == "dolar") {
    resultado.innerHTML = (quantidadeMoeda * 5.24).toFixed(2);
  } else if (moedaRecebida.value == "euro"){
    resultado.innerHTML = (quantidadeMoeda * 6.19).toFixed(2);
  } else {
    resultado.innerHTML = (quantidadeMoeda * 251568.23).toFixed(2);
  }
}

function converteDolar(){
  var quantidadeMoeda = valorMoedaRecebida.value;
  if(moedaRecebida.value == "reais") {
    resultado.innerHTML = (quantidadeMoeda / 5.24).toFixed(2);
  } else if (moedaRecebida.value == "euro"){
    resultado.innerHTML = (quantidadeMoeda * 1.18).toFixed(2);
  } else {
    resultado.innerHTML = (quantidadeMoeda * 48010.12).toFixed(2);
  }
}

function converteEuro(){
   var quantidadeMoeda = valorMoedaRecebida.value;
  if(moedaRecebida.value == "reais") {
    resultado.innerHTML = (quantidadeMoeda / 6.19).toFixed(2);
  } else if (moedaRecebida.value == "dolar"){
    resultado.innerHTML = (quantidadeMoeda / 0.85).toFixed(2);
  } else {
    resultado.innerHTML = (quantidadeMoeda * 40685.23).toFixed(2);
  }
}

function converteBitcoin(){
    var quantidadeMoeda = valorMoedaRecebida.value;
  if(moedaRecebida.value == "reais") {
    resultado.innerHTML = (quantidadeMoeda / 252100.54).toFixed(2);
  } else if (moedaRecebida.value == "dolar"){
    resultado.innerHTML = (quantidadeMoeda * 0.000021).toFixed(2);
  } else {
    resultado.innerHTML = (quantidadeMoeda * 0.000024).toFixed(2);
  }
}

function converter(){
  if(moedaEntregue.value == "reais") {
    converteReal();
  } else if (moedaEntregue.value == "dolar"){
    converteDolar();    
  } else if (moedaEntregue.value == "euro") {
    converteEuro();
  } else {
    converteBitcoin();
  }
}


