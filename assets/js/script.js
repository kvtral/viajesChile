$(document).ready(function () {

   $(window).scroll(function() {
    if ($('#navBar').offset().top > 250) {
        $('#navBar').addClass('bg-color');
    }  else {
        $('#navBar').removeClass('bg-color');
    } 
}); 

  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

});

function validar(){
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("mensaje").value;

    if (nombre === "" ||  email === "" || mensaje === "") {
        alert("Todos los campos son obligatorios");
    } else if (nombre.length < 3 || nombre.length > 20 || apellido.length < 3 || apellido.length > 50) {
        alert("El nombre debe tener más de 5 caracteres y menos de 50");
    } else if (email.indexOf("@") == -1 || email.indexOf(".") == -1) {
        alert("El email no es valido");
    } else if (mensaje.length < 5){
        alert("El Mensaje debe contener más de 5 caracteres");
    } else {  
        alert("Mensaje enviado");
        // pasar estos datos a funcion en lado de servidor para envio de correo
        console.log(nombre + " | " + email + " | " + mensaje); 
        return true;
    }
    return false;
}
