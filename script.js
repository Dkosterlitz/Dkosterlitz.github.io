function cambiarTituloSeccion() {
    const newTitle = document.getElementById("nuevo-titulo").value;
    const section = document.getElementById("crear-boton").querySelector("h2")
    section.textContent = newTitle;
}
