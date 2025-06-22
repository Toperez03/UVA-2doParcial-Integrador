document.addEventListener("DOMContentLoaded", function () {
  const btnClaro = document.getElementById("modo-claro");
  const btnOscuro = document.getElementById("modo-oscuro");

  btnClaro.addEventListener("click", function () {
    document.body.classList.remove("modo-oscuro");
    document.body.classList.add("modo-claro");
  });

  btnOscuro.addEventListener("click", function () {
    document.body.classList.remove("modo-claro");
    document.body.classList.add("modo-oscuro");
  });

  // Validación del formulario
  const formulario = document.querySelector(".formulario-contacto");
  const mensajeExito = document.getElementById("mensaje-exito");
  const mensajeError = document.getElementById("mensaje-error");

  formulario.addEventListener("submit", function (event) {
    event.preventDefault(); // Previene envío real

    // Capturamos valores de los campos
    const nombre = document.getElementById("fname").value.trim();
    const apellido = document.getElementById("lname").value.trim();
    const email = document.getElementById("email").value.trim();
    const asunto = document.getElementById("asunto").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    // Validación simple de email
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    // Limpiamos mensajes anteriores
    mensajeExito.style.display = "none";
    mensajeError.style.display = "none";

    // Verificamos si hay errores
    if (!nombre || !apellido || !email || !asunto || !mensaje) {
      mensajeError.textContent = "Por favor, completá todos los campos del formulario.";
      mensajeError.style.display = "block";
      return;
    }

    if (!emailValido) {
      mensajeError.textContent = "El correo electrónico ingresado no es válido. Verificá la dirección.";
      mensajeError.style.display = "block";
      return;
    }

    // Si todo está bien, mostramos mensaje de éxito
    mensajeExito.textContent = `Gracias ${nombre} por tu contacto. En breve le estaré respondiendo.`;
    mensajeExito.style.display = "block";

    // Ocultar después de 10 segundos
    setTimeout(() => {
      mensajeExito.style.display = "none";
    }, 10000);

    formulario.reset(); // Limpiar campos
  });
});
