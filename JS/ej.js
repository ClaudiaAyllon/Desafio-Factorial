document.getElementById('calculate').addEventListener('click', function() {
  var n = parseInt(document.getElementById('number').value);
  if (n > 0) {
    var approximateValue = Math.sqrt(2 * Math.PI * n) * Math.pow((n / Math.E), n);
    document.getElementById('res').innerHTML = `El factorial aproximado de ${n} es: ${approximateValue}`;
  } else {
    alert('Por favor, ingresa un número entero positivo');
  }
});