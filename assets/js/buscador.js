import mensajeError from "./mensajeError.js";

export default function buscador(e){
  let lista = document.querySelectorAll(".card-style");
  lista.forEach( pizza=>{
    pizza.textContent.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
    ?pizza.classList.remove("ocultar")
    :pizza.classList.add("ocultar");
  });
  mensajeError();
}