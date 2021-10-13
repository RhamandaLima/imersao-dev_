var tempEmC=document.querySelector('.valorC'); 
var tempEmF=document.querySelector('.valorF');
var tempEmK=document.querySelector('.valorK');

tempEmC.addEventListener('input', function(event){
  tempEmF.value = ((tempEmC.value * 1.8) + 32).toFixed(2);
  tempEmK.value = (parseFloat(tempEmC.value) + 273.15).toFixed(2);
}, false);

tempEmF.addEventListener('input', function(event){
   tempEmC.value  =  ((tempEmF.value - 32) / 1.8).toFixed(2);
   tempEmK.value =  ((tempEmF.value - 32) * 5/9 + 273.15).toFixed(2);
}, false);

tempEmK.addEventListener('input', function(event){
  tempEmF.value =  ((tempEmK.value - 273.15) * 1.8 + 32).toFixed(2);
  tempEmC.value = (tempEmK.value - 273.15).toFixed(2);
}, false);