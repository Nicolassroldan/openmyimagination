
var text = $('.typewriter').text();
var length = text.length;
var timeOut;
var character = 0;

(function typeWriter() {
  timeOut = setTimeout(function() {
    character++;
    var type = text.substring(0, character);
    $('.typewriter').text(type);
    typeWriter();

    if (character == length) {
      clearTimeout(timeOut);
      character = 0;
      setTimeout(typeWriter, 6000); // Agrega un retraso de 10 segundos antes de reiniciar la animación
    }
  }, 150);
}());