const lista = document.querySelector(".lista");
const mostrarTinta = document.querySelector("#mostrartinta");
const ocultaTinta = document.querySelector("#ocultatinta");

mostrarTinta.addEventListener("click", () => {
    lista.style.display = "none";
});

ocultaTinta.addEventListener("click", () => {
    lista.style.display = "block";
});