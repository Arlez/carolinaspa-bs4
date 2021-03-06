// Add Your Scripts here
(function() {
    'use strict';
    window.addEventListener('load', function() {
      // Seleccionar el formulario para validar
      var forms = document.getElementsByClassName('needs-validation');
      // Validar cada campo y prevenir que se envie
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          event.preventDefault();
          if (form.checkValidity() === false) {
            event.stopPropagation();
          } else {
               var nombre = document.getElementById('nombre').value,
                   email = document.getElementById('email').value,
                   mensaje = document.getElementById('mensaje').value;
                   console.log(nombre);
                   console.log(email);
                   console.log(mensaje);
               var xhr = new XMLHttpRequest();
               
               xhr.open('POST', 'http://localhost:8888/carolina_spaB4/inc/enviar.php');
               xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
               xhr.onload = function() {
                   if (xhr.status === 200) {
                     var respuesta = JSON.parse( xhr.responseText );
                       console.log( respuesta );
                   }
               };
               xhr.send('nombre='+nombre+'&email='+email+'&mensaje='+mensaje);
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  })();