document.addEventListener("DOMContentLoaded", () => {
    alert("¡Bienvenido a la sección de envíos de Sandra Repos!");
    const resaltados = document.querySelectorAll(".resaltado");

      resaltados.forEach((item) => {
    item.addEventListener("click", () => {
      alert(" Recuerda avisar con una semana de anticipación si deseas modificar tu pedido.");
    });
  });

})