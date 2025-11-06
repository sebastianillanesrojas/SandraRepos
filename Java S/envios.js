document.addEventListener("DOMContentLoaded", () => {
    alert("¡Bienvenido a la sección de envíos de Sandra Repos!");
    const resaltados = document.querySelectorAll(".resaltado");

    const enlace = document.querySelector("a[href*='maps']");
  enlace.addEventListener("click", (e) => {
    const confirmar = confirm("¿Deseas abrir la ubicación en Google Maps?");
    if (!confirmar) {
        e.preventDefault();
    }
    });
})