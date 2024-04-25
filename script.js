document.addEventListener('DOMContentLoaded', function () {
  // Selecciona el elemento del contador
  var countdown = document.querySelector('.countdown');
  
  // Obtiene la fecha actual y establece la fecha de finalización en 10 minutos después
  var ahora = new Date();
  var fechaFin = new Date(ahora.getTime() + 10 * 60000); // 10 minutos en milisegundos
  
  // Función para actualizar el contador
  function actualizarContador() {
    var ahora = new Date();
    var diferencia = fechaFin - ahora;

    if (diferencia <= 0) {
      // Si el tiempo ha expirado, detener el contador
      clearInterval(intervalo);
      return;
    }

    // Calcular los minutos y segundos restantes
    var minutos = Math.floor(diferencia / 60000); // 60000 milisegundos = 1 minuto
    var segundos = Math.floor((diferencia % 60000) / 1000); // El residuo de la división por 60000 son los segundos restantes

    // Actualizar el contenido del contador en el DOM
    var tiempoElemento = countdown.querySelector('.tiempo');
    tiempoElemento.innerHTML = minutos + ' : ' + segundos;
  }

  // Actualizar el contador cada segundo
  var intervalo = setInterval(actualizarContador, 1000);

  // Actualizar el contador al cargar la página
  actualizarContador();
});
