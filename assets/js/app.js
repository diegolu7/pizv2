import buscador from "./buscador.js";
import { data } from "./data.js";
import { guardar_localStorage, limpiar_localStorage, obtener_localStorage } from "./LocalStorage.js";
import mostrarTodas from "./mostrarTodas.js";

document.addEventListener('DOMContentLoaded', ()=>{
  guardar_localStorage(data,'pizzas');

  mostrarTodas();

  const input = document.querySelector("#nombre");
  input.addEventListener('keyup', (e)=>{buscador(e)});
});





