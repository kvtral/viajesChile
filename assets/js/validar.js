function validar() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("mensaje").value;
    
    if (nombre === "" || email === "" || mensaje === "") {
      alert("Todos los campos son obligatorios");
      return false
    } else if (nombre.length < 5 ||  nombre.length > 50 ) {
      alert("El nombre debe tener más de 5 caracteres y menos de 50");
      return false
    } else if (email.indexOf("@") == -1 || email.indexOf(".") == -1) {
      alert("El email no es valido");
      return false
    } else if (mensaje.length < 5) {
      alert("El Mensaje debe contener más de 5 caracteres");
      return false
    } else {
      alert("Mensaje enviado");
      console.log(nombre + " | " + email + " | " + mensaje);
      return true;
    }
    return false;
  }
