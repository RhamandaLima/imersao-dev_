var valorEmReal = document.getElementById('valorReal');
var valorEmDolar = document.getElementById('valorDolar');
var valorEmEuro = document.getElementById('valorEuro');
var valorEmBitcoin = document.getElementById('valorBit');

valorEmReal.addEventListener('input', function(event){
  valorEmDolar.value = "US$ " + (valorEmReal.value / 5.24).toFixed(2) + "."; 
  valorEmEuro.value =  "€ " + (valorEmReal.value / 6.19).toFixed(2) + "."; 
  valorEmBitcoin.value = "₿ " + (valorEmReal.value / 252100.54).toFixed(2) + "."; 
}, false)

valorEmDolar.addEventListener('input', function(event){
  valorEmReal.value = "R$ " + (valorEmDolar.value * 5.24).toFixed(2) + ".";
  valorEmEuro.value = "€ " + (valorEmDolar.value / 0.85).toFixed(2) + "."; 
  valorEmBitcoin.value = "₿ " + (valorEmDolar.value / 0.000021).toFixed(2) + ".";
}, false)

valorEmEuro.addEventListener('input', function(event){
  valorEmDolar.value = "US$ " + (valorEmEuro.value * 1.18).toFixed(2) + ".";
  valorEmReal.value =  "R$ " + (valorEmEuro.value * 6.19).toFixed(2) + ".";
  valorEmBitcoin.value = "₿ " + (valorEmEuro.value / 0.000024).toFixed(2) + ".";
}, false)

valorEmBitcoin.addEventListener('input', function(event){
  valorEmDolar.value = "US$ " + (valorEmBitcoin.value * 48010.12).toFixed(2) + ".";
  valorEmEuro.value = "€ " + (valorEmBitcoin.value * 40685.23).toFixed(2) + ".";
  valorEmReal.value = "R$ " + (valorEmBitcoin.value * 251568.23).toFixed(2) + ".";
}, false)