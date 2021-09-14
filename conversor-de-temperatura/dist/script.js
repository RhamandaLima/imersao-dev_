var tempEmC= document.querySelector('.valorC'); 
var tempEmF= document.querySelector('.valorF');

tempEmC.addEventListener('input', function(event){
  tempEmF.value = (tempEmC.value * 1.8) + 32 + " ºF";
}, false);

tempEmF.addEventListener('input', function(event){
   tempEmC.value  = (tempEmF.value -32) / 1.8 + " ºC";
}, false);