const lista = document.getElementById("lista");
const inputTexto = document.getElementById("inputTexto");
const botonAgregar = document.getElementById("btnAgregarElemento");
const botonEliminar = document.getElementById("btnEliminarUltimo");

botonAgregar.addEventListener("click", () => {
    let nuevoTexto = inputTexto.value;
    let nuevoElemento = document.createElement("li");
    nuevoElemento.innerHTML = nuevoTexto;
    lista.appendChild(nuevoElemento);
    inputTexto.value = "";
})

botonEliminar.addEventListener("click", () => {
    let aEliminar = lista.lastChild;
    if(aEliminar !== null){
        aEliminar.remove();
    }
})